<template>
  <div class="jc-type jc-object ">
    <div
      v-if="!localOpen"
      class="jc-type jc-object closed"
    >
      <div v-if="displayName !== 'Object' || shallow">
        <em @click="toggle">{{displayName}}</em>
        <span>{{'{ … }'}}</span>
      </div>
      <div v-else>
        <em @click="toggle">{{displayName}}</em>
        <span>{{'{'}} </span>
        <span
          class="object-item key-value"
          v-for="(key, index) in props"
          :key="`subtype-${index}`"
        >
          <span class="key">{{key}}:</span>
          <component
            :is="whichType(value[key])"
            class="value"
            :value="value[key]"
            :allowOpen="localOpen"
            :shallow="true"
          ></component>
          <span class="sep">,</span>
        </span>
        <span
          key="arrayType-0"
          v-if="Object.keys(value).length > props.length"
          className="more arb-info"
        >
          …
        </span>
        <span>{{'}'}}</span>
      </div>
    </div>
    <div
      v-else
      class="jc-type jc-object"
    >
      <div className="header">
        <em @click="toggle">{{displayName}}</em>
        <span>{{'{'}}</span>
      </div>
      <div class="jc-group">
        <div
          v-for="key in props"
          className="object-item key-value"
          :key="`subtype-${key}`"
        >
          <span className="key">{{key}}:</span>
          <component
            :is="whichType(value[key])"
            :value="value[key]"
            :shallow="true"
            :allowOpen="localOpen"
          ></component>
        </div>
      </div>
      <span>{{'}'}}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import which from "./whichType";

const LIMIT_CLOSED = 5;
@Component({
  components: {}
})
export default class JCObjectType extends Vue {
  @Prop({ default: true }) allowOpen!: boolean;
  @Prop({ default: [] }) value!: any[];
  @Prop({ default: false }) shallow!: boolean;
  @Prop({ default: false }) open!: boolean;

  private localOpen: boolean = false;
  private displayName: string = "Object";
  private props: string[] = [];

  mounted() {
    this.localOpen = this.open;
    this.displayName = this.value.constructor
      ? this.value.constructor.name
      : "Object";
    this.handleProps();
  }

  handleProps() {
    if (this.shallow && !this.localOpen) {
      return;
    }
    this.props = this.localOpen
      ? [...enumerate(this.value)]
      : Object.keys(this.value);
    Object.getOwnPropertyNames(this.value).forEach(prop => {
      if (!this.props.includes(prop)) {
        this.props.push(prop);
      }
    });
    if (!this.localOpen) {
      this.props.splice(LIMIT_CLOSED).sort();
    }
  }

  whichType(value: any) {
    return which(value);
  }

  toggle(e: any) {
    if (!this.allowOpen) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();
    this.localOpen = !this.localOpen;
    this.handleProps();
  }
}

function* enumerate(obj: any) {
  let visited = new Set();
  while (obj) {
    for (let key of Reflect.ownKeys(obj)) {
      if (typeof key === "string") {
        let desc = Reflect.getOwnPropertyDescriptor(obj, key);
        if (desc && !visited.has(key)) {
          visited.add(key);
          if (desc.enumerable) {
            yield key;
          }
        }
      }
    }
    obj = Reflect.getPrototypeOf(obj);
  }
}
</script>