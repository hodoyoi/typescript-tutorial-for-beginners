import Vue from "vue";
import Step7 from "./step7.vue";

// HTMLのidがstep7の要素の中身を、VueのStep7コンポーネントに置き換える
new Vue({
  el: "#step7",
  render: (h) => h(Step7),
});

// 続きはstep7.vueを参照
