<template>
  <div id="app">
    <!-- <GumEditor></GumEditor> -->
    <JSConsole :data="data"></JSConsole>
    <iframe src="http://dev.youkeda.com:5000/console.html"></iframe>
    <!-- <Demo /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "./components/Editor";
import JSConsole from "./components/JSConsole/JSConsole.vue";
import { parseWrapper } from "./components/JSConsole";
import { stringify } from "./components/JSConsole/stringify";
import Demo from "./components/Modal/demo.vue";

@Component({
  components: {
    JSConsole,
    Demo
  }
})
export default class App extends Vue {
  mounted() {
    document.domain = "youkeda.com";
    this.data = [];
    window.addEventListener("message", e => {
      if (e.origin === "http://dev.youkeda.com:5000") {
        this.data = this.data.concat(e.data.value);
      }
    });

    setTimeout(() => {
      console.log("-----", parseWrapper(this.data));
    }, 2000);
  }
  private data = [
    document,
    undefined,
    null,
    "zhoufan \n test",
    [
      "1\ntest",
      "1",
      undefined,
      {
        abc: "123123123",
        ccc: 111,
        zhoufan: [
          "1",
          "1",
          undefined,
          123,
          "1",
          "1",
          "1",
          "1",
          "1",
          "1",
          "1",
          "1",
          "1"
        ],
        ddd: "123123123",
        eee: 111,
        fff: "123123123",
        ggg: 111
      },
      123,
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1"
    ],
    {
      abc: "123123123",
      ccc: 111,
      zhoufan: [
        "1",
        "1",
        undefined,
        123,
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1"
      ],
      ddd: "123123123",
      eee: 111,
      fff: "123123123",
      ggg: 111
    },
    document,
    new Error("1111"),
    document.querySelectorAll("div"),
    this.abc,
    this.abc()
  ];

  async abc() {}
}
</script>

<style>
*,
body {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
