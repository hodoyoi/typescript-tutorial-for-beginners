import Vue from "vue";
import Step6 from "./step6.vue";

// HTMLのidがstep6の要素の中身を、VueのStep6コンポーネントに置き換える
new Vue({
  el: "#step6",
  render: (h) => h(Step6),
});

// 続きはstep6.vueを参照
