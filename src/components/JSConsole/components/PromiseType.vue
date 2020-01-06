<template>
  <div class="jc-type jc-promise clo">
    <div
      v-if="!localOpen"
      @click="toggle"
      class="jc-type jc-promise closed"
    > <em>Promise</em>
      {{'{ '}}
      <div class="object-item jc-key-value">
        <span class="key">[[PromiseStatus]]:</span>
        <span class="value">{{status}}</span>
      </div>
      <span class="arb-info">, </span>
      <div class="object-item jc-key-value">
        <span class="key">[[PromiseValue]]:</span>
        <span class="value">
          <component
            :is="whichType(promiseValue)"
            :shallow="true"
            :allowOpen="localOpen"
            :value="promiseValue"
          />
        </span>
      </div>
      {{' }'}}
    </div>
    <div
      v-else
      @click="toggle"
      class="jc-type jc-promise"
    >
      <div class="header">
        <em>Promise</em>
        <span>{{'{'}}</span>
      </div>
      <div class="jc-group">
        <div class="object-item jc-key-value">
          <span class="key">[[PromiseStatus]]:</span>
          <span class="value">{{status}}</span>
        </div>
        <div class="object-item jc-key-value">
          <span class="key">[[PromiseValue]]:</span>
          <span class="value">
            <component
              :is="whichType(promiseValue)"
              :shallow="true"
              :allowOpen="localOpen"
              :value="promiseValue"
            />
          </span>
        </div>
      </div>
      <span>{{'}'}}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import which from "./whichType";
@Component({
  components: {}
})
export default class JCPromiseType extends Vue {
  @Prop({ default: true }) allowOpen!: boolean;
  @Prop({ default: () => {} }) value!: any;
  @Prop({ default: true }) shallow!: boolean;
  @Prop({ default: false }) open!: boolean;

  private localOpen: boolean = false;
  private promiseValue: any = "";
  private status: string = "pending";

  whichType(value: any) {
    return which(value);
  }
  mounted() {
    this.localOpen = this.open;
    this.init();
  }

  toggle(e: any) {
    if (!this.allowOpen) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();
    this.localOpen = !this.localOpen;
    this.init();
  }

  async init() {
    if (this.localOpen) {
      const { promiseValue, status } = await this.updatePromiseState();
      this.status = status;
      this.$set(this, "promiseValue", promiseValue);
    }
  }

  async updatePromiseState() {
    let promiseValue = undefined;
    let status = "pending";

    const flag = Math.random();
    try {
      promiseValue = await Promise.race([
        this.value,
        new Promise(resolve => setTimeout(() => resolve(flag), 10))
      ]);

      if (promiseValue !== flag) {
        status = "resolved";
      } else {
        promiseValue = undefined;
      }
    } catch (e) {
      promiseValue = e;
      status = "rejected";
    }

    return {
      promiseValue,
      status
    };
  }
}
</script>