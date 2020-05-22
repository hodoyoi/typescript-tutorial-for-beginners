<template>
  <div>
    <h1>Step6: Vueことはじめ</h1>
    <p>
      🐶問題
      <br />
      <a href="https://jp.vuejs.org/v2/guide/list.html">このドキュメント</a>
      を参考に、v-forを使って
      <b>messages</b>をリスト表示せよ！
    </p>

    <ul>
      <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
    </ul>

    <addtext @add="onAdd"></addtext>
  </div>
</template>

<script>
import Addtext from "./addtext.vue";

export default {
  data() {
    return {
      messages: [
        "Hello",
        "Work!",
        "Hoge Piyo",
        "Fuga Moge",
        "Super Chicken Park",
        "Ultimate Duck Duck Do"
      ]
    };
  },
  methods: {
    onAdd(text) {
      this.messages.push(text);
    }
  },
  components: {
    Addtext
  }
};
</script>
