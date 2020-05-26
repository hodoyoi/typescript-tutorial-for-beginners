<template>
  <div>
    <h1>じゃんけんマシーン</h1>
    <div>人間の手: {{ humanHand }}</div>
    <h1>{{ humanpic }}</h1>
    <div>コンピュータの手: {{ comHand }}</div>
    <h1>{{ compic }}</h1>
    <div>
      <a href="#" class="btn btn-lg btn-primary" @click="onJanken('グー')">グー</a>
      <a href="#" class="btn btn-lg btn-primary" @click="onJanken('チョキ')">チョキ</a>
      <a href="#" class="btn btn-lg btn-primary" @click="onJanken('パー')">パー</a>
      <a href="#" class="btn btn-lg btn-primary" @click="onJanken('グーチョキパー')" v-if="availableGuChokiPa()">猫の手を借りる</a>
    </div>
    <h3>カウント: {{ jankenCount }}</h3>
    <h3>勝敗: {{ result }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      humanHand: "",
      comHand: "",
      humanpic: "",
      compic: "",
      result: "",
      jankenCount: 0,
    };
  },
  methods: {
    onJanken(hand) {
      this.humanHand = hand;
      this.humanpic = this.emoji(this.humanHand);
      this.comHand = this.getComHand();
      this.compic = this.emoji(this.comHand);
      this.result = this.hantei();
      this.jankenCount++;
      // ジャンケンカウントを1回足す
    },
    emoji(hand) {
      if (hand == "グー") {
        return "✊";
      }
      if (hand == "チョキ") {
        return "✌";
      }
      if (hand == "パー") {
        return "✋";
      }
      if (hand == "グーチョキパー") {
        return "🐱";
      }
      return "💀";
    },
    getComHand() {
      const hands = ["グー", "チョキ", "パー"];
      const hand = hands[Math.floor(Math.random() * hands.length)];
      return hand;
    },
    availableGuChokiPa() {
      // ここにグーチョキパーボタンを出せるかどうかの判定をいれよ
      if (this.jankenCount >= 3) {
        return true;
      }
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
      if (this.humanHand == "グーチョキパー") {
        return win;
      }
      return lose;
    },
  },
};
</script>
