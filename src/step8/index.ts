import Vue from "vue";
import Step8 from "./step8.vue";

// HTMLのidがstep7の要素の中身を、VueのStep7コンポーネントに置き換える
new Vue({
  el: "#step8",
  render: (h) => h(Step8),
});
// 続きはstep7.vueを参照
