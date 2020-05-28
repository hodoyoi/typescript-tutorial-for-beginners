<template>
  <div class="container">
    <h1>あっちむいてほいマシーン</h1>
    <div class="row">
      <div class="col-md-3">
        <div class="card">
          <img src="/static/human.png" class="img card-img-top" />
          <div class="card-body">
            <h5 class="card-title">人間の手: {{ humanHand }}</h5>
            <h1>{{ humanpic }}</h1>
            <h5 class="card-title">人間の向き: {{ humanMuki }}</h5>
            <h1>{{ humanMukipic }}</h1>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <img src="/static/cpu.png" class="img card-img-top" />
          <div class="card-body">
            <h5 class="card-title">CPUの手: {{ comHand }}</h5>
            <h1>{{ compic }}</h1>
            <h5 class="card-title">CPUの向き: {{ comMuki }}</h5>
            <h1>{{ comMukipic }}</h1>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div v-if="step >= 1">
          <a href="#" class="btn btn-lg btn-primary" @click="onJanken('グー')">グー</a>
          <a href="#" class="btn btn-lg btn-primary" @click="onJanken('チョキ')">チョキ</a>
          <a href="#" class="btn btn-lg btn-primary" @click="onJanken('パー')">パー</a>
          <a href="#" class="btn btn-lg btn-primary" @click="onJanken('グーチョキパー')" v-if="aviableGuChokiPa()">猫の手を借りる</a>
        </div>
        <h3>カウント: {{ jankenCount }}</h3>
        <h3>猫エネルギー: {{ energy }}</h3>
        <h3>勝敗: {{ result }}</h3>
      </div>
    </div>
    <div v-if="step == 2">
      <a href="#" class="btn btn-lg btn-primary" @click="onAttimuite('ウエ')">↑</a>
      <a href="#" class="btn btn-lg btn-primary" @click="onAttimuite('シタ')">↓</a>
      <a href="#" class="btn btn-lg btn-primary" @click="onAttimuite('ミギ')">→</a>
      <a href="#" class="btn btn-lg btn-primary" @click="onAttimuite('ヒダリ')">←</a>
    </div>
    <h5 class="card-title">人間の向き: {{ humanMuki }}</h5>
    <h1>{{ humanMukipic }}</h1>
    <h3>人間の勝敗: {{ hoiResultHuman }}</h3>
    <h3>コンピューターの勝敗: {{ hoiResultCom }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      humanHand: "",
      comHand: "",
      humanpic: "",
      compic: "",
      result: "",
      jankenCount: 0,
      energy: "🐱：☆☆☆",
      humanMuki: "",
      comMuki: "",
      humanMukipic: "",
      comMukipic: "",
      hoiResultHuman: "",
      hoiResultCom: "",
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
      this.cooltime();
      this.energy = this.nekocount();
      if (this.result == "あなたの勝ち！あっち向いて" || this.result == "コンピュータの勝ち！あっち向いて") {
        this.step = 2;
      } else {
        this.step = 1;
      }
    },
    onAttimuite(muki) {
      this.humanMuki = muki;
      this.humanMukipic = this.emojiMuki(this.humanMuki);
      this.comMuki = this.getComMuki();
      this.comMukipic = this.emojiMuki(this.comMuki);
      this.hoiResultHuman = this.hoiHanteiHuman();
      this.hoiResultCom = this.hoiHanteiCom();
      this.step = 1;
    },
    getComMuki() {
      const mukis = ["ウエ", "シタ", "ミギ", "ヒダリ"];
      const muki = mukis[Math.floor(Math.random() * mukis.length)];
      return muki;
    },
    hoiHanteiHuman() {
      const win = "あなたの勝ち！";
      const mokkai = "もう一回！";
      if (this.humanMuki == this.comMuki) {
        return win;
      }
      return mokkai;
    },
    hoiHanteiCom() {
      const win = "コンピューターの勝ち！";
      const mokkai = "もう一回！";
      if (this.humanMuki == this.comMuki) {
        return win;
      }
      return mokkai;
    },
    nekocount() {
      if (this.jankenCount == 0) {
        return "🐱：☆☆☆";
      }
      if (this.jankenCount == 1) {
        return "🐱：★☆☆";
      }
      if (this.jankenCount == 2) {
        return "🐱：★★☆";
      }
      if (this.jankenCount >= 3) {
        return "🐱：★★★[!!!CAT POWER MAX!!!]";
      }
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
    emojiMuki(muki) {
      if (muki == "ウエ") {
        return "⏫";
      }
      if (muki == "シタ") {
        return "⏬";
      }
      if (muki == "ミギ") {
        return "⏩";
      }
      if (muki == "ヒダリ") {
        return "⏪";
      }
    },
    getComHand() {
      const hands = ["グー", "チョキ", "パー"];
      const hand = hands[Math.floor(Math.random() * hands.length)];
      return hand;
    },
    aviableGuChokiPa() {
      if (this.jankenCount >= 3) {
        return true;
      }
      return false;
    },
    cooltime() {
      if (this.humanHand == "グーチョキパー") {
        this.jankenCount = 0;
      }
    },
    hantei() {
      const win = "あなたの勝ち！あっち向いて";
      const lose = "コンピュータの勝ち！あっち向いて";
      const draw = "あいこ！";
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
© 2020 GitHub, Inc. Terms Privacy Security Status Help Contact GitHub Pricing API Training Blog About
