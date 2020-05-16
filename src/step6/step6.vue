<template>
  <div>
    <h1>Step6: Vueことはじめ</h1>
    <p>
      🐶問題<br />
      <a href="https://jp.vuejs.org/v2/guide/list.html">このドキュメント</a>
      を参考に、v-forを使って<b>messages</b>をリスト表示せよ！
    </p>
    <ul>
      <li></li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: [
        "Hello",
        "Work!",
        "Hoge Piyo",
        "Fuga Moge",
        "Super Chicken Park",
        "Ultimate Duck Duck Do",
      ],
    };
  },
};
</script>
