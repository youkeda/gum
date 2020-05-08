<template>
  <div class="right_drawer_container">
    <RightDrawer :visible="visible">
      <div slot="title"><p>dfasdfasdf</p></div>
    </RightDrawer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import RightDrawer from '@/components/RightDrawer/RightDrawer.vue';
@Component({
  components: {
    RightDrawer
  }
})
export default class Demo extends Vue {
  private visible: boolean = true;
}
</script>
