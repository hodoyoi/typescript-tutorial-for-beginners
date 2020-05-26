<template>
  <div>
    <h1>じゃんけんマシーン</h1>
    <div>人間の手: {{ humanHand }}</div>
    <div>コンピュータの手: {{ comHand }}</div>
    <div>
      <a href="#" class="btn btn-lg btn-primary" @click="onJanken('グー')">グー</a>
      <a href="#" class="btn btn-lg btn-primary" @click="onJanken('チョキ')">チョキ</a>
      <a href="#" class="btn btn-lg btn-primary" @click="onJanken('パー')">パー</a>

      <a href="#" class="btn btn-lg btn-primary" @click="onJanken('グーチョキパー')" v-if="availableGuChokiPa()">グーチョキパー</a>
    </div>
    <h3>勝敗: {{ result }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      humanHand: "",
      comHand: "",
      result: "",
      jankenCount: 0,
    };
  },
  methods: {
    onJanken(hand) {
      this.humanHand = hand;
      this.comHand = this.getComHand();
      this.result = this.hantei();

      // ジャンケンカウントを1回足す
    },
    getComHand() {
      const hands = ["グー", "チョキ", "パー"];
      const hand = hands[Math.floor(Math.random() * hands.length)];
      return hand;
    },
    availableGuChokiPa() {
      // ここにグーチョキパーボタンを出せるかどうかの判定をいれよ
      return false;
    },
    hantei() {
      const win = "あなたの勝ち！";
      const lose = "コンピュータの勝ち！";
      const draw = "あいこ！";

      // ここにグーチョキパーボタンを押した時の判定をいれよ

      if (this.humanHand == "グー" && this.comHand == "チョキ") {
        return win;
      }
      if (this.humanHand == "チョキ" && this.comHand == "パー") {
        return win;
      }
      if (this.humanHand == "パー" && this.comHand == "グー") {
        return win;
      }
      if (this.humanHand == "グー" && this.comHand == "パー") {
        return lose;
      }
      if (this.humanHand == "チョキ" && this.comHand == "グー") {
        return lose;
      }
      if (this.humanHand == "パー" && this.comHand == "チョキ") {
        return lose;
      }
      if (this.humanHand == this.comHand) {
        return draw;
      }
    },
  },
};
</script>
