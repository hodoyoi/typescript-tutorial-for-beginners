import Vue from "vue";
import Step8 from "./step8.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// HTMLのidがstep7の要素の中身を、VueのStep7コンポーネントに置き換える
new Vue({
  el: "#step8",
  render: (h) => h(Step8),
});
// 続きはstep7.vueを参照
