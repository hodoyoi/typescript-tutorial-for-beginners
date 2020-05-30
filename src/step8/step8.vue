<template>
  <div class="container">
    <h1>あっちむいてほいマシーン</h1>
    <div v-if="step == 0">
      <div class="row">
        <img class="mx-auto" src="/static/start.png" />
      </div>
      <div class="row">
        <a href="#" class="btn btn-lg btn-primary mx-auto" @click="onStart()">すたーと</a>
      </div>
    </div>
    <div v-if="step == 1 || step == 2">
      <div class="row">
        <div class="col-md-3">
          <div class="card">
            <img src="/static/human.png" class="img card-img-top" />
            <div class="card-body">
              <h5 class="card-title">人間の手: <hand-image :sign="humanHand"></hand-image></h5>
              <h5 class="card-title">人間の向き: {{ humanMuki }}</h5>
              <h1>{{ humanMukipic }}</h1>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <img src="/static/cpu.png" class="img card-img-top" />
            <div class="card-body">
              <h5 class="card-title">CPUの手: <hand-image :sign="comHand"></hand-image></h5>
              <h5 class="card-title">CPUの向き: {{ comMuki }}</h5>
              <h1>{{ comMukipic }}</h1>
            </div>
          </div>
        </div>
        <div v-if="step == 1" class="col-md-6">
          <h3>じゃんけん: {{ result }}</h3>
          <a href="#" class="btn btn-lg btn-primary" @click="onJanken('グー')">グー</a>
          <a href="#" class="btn btn-lg btn-primary" @click="onJanken('チョキ')">チョキ</a>
          <a href="#" class="btn btn-lg btn-primary" @click="onJanken('パー')">パー</a>
          <a href="#" class="btn btn-lg btn-primary" @click="onJanken('グーチョキパー')" v-if="aviableGuChokiPa()">猫の手を借りる</a>
          <h3>猫エネルギー: {{ energy }}</h3>
          <h3 v-if="winStatus == 3">{{ hoiResult }}</h3>
        </div>
        <!-- <h3>カウント: {{ jankenCount }}</h3> -->
        <div v-if="step == 2" class="col-md-6">
          <h3>じゃんけん: {{ result }}</h3>
          <a href="#" class="btn btn-lg btn-primary" @click="onAttimuite('ウエ')">↑</a>
          <a href="#" class="btn btn-lg btn-primary" @click="onAttimuite('シタ')">↓</a>
          <a href="#" class="btn btn-lg btn-primary" @click="onAttimuite('ミギ')">→</a>
          <a href="#" class="btn btn-lg btn-primary" @click="onAttimuite('ヒダリ')">←</a>
        </div>
      </div>
    </div>
    <div v-if="step == 3">
      <div class="row">
        <h3 style="color: red;">{{ hoiResult }}</h3>
        <img class="mx-auto" src="/static/win.png" />
      </div>
      <div class="row">
        <a href="#" class="btn btn-lg btn-primary mx-auto" @click="onStart()">もっかい</a>
      </div>
    </div>
    <div v-if="step == 4">
      <div class="row">
        <h3 style="color: red;">{{ hoiResult }}</h3>
        <img class="mx-auto" src="/static/lose.png" />
      </div>
      <div class="row">
        <a href="#" class="btn btn-lg btn-primary mx-auto" @click="onStart()">もっかい</a>
      </div>
    </div>
  </div>
</template>

<script>
import HandImage from "./HandImage.vue";

export default {
  components: {
    HandImage,
  },
  data() {
    return {
      step: 0,
      winStatus: 0,
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
      hoiResult: "",
      realHand: "",
    };
  },
  methods: {
    onStart() {
      this.step = 1;
      this.humanHand = "";
      this.humanpic = "";
      this.humanMuki = "";
      this.humanMukipic = "";
      this.comHand = "";
      this.compic = "";
      this.comMuki = "";
      this.comMukipic = "";
      this.energy = "🐱：☆☆☆";
      this.realHand = "";
      this.result = "";
      this.jankenCount = 0;
    },
    onJanken(hand) {
      this.humanHand = hand;
      this.winStatus = 0;
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
      this.humanMukipic = "";
      this.comMukipic = "";
    },
    onAttimuite(muki) {
      this.humanMuki = muki;
      this.humanMukipic = this.emojiMuki(this.humanMuki);
      this.comMuki = this.getComMuki();
      this.comMukipic = this.emojiMuki(this.comMuki);
      this.hoiResult = this.hoiHantei();
    },
    getComMuki() {
      return "ウエ";
      const mukis = ["ウエ", "シタ", "ミギ", "ヒダリ"];
      const muki = mukis[Math.floor(Math.random() * mukis.length)];
      return muki;
    },
    hoiHantei() {
      const win = "あなたの勝ち！";
      const lose = "コンピューターの勝ち！";
      const mokkai = "もう一回！";
      if (this.humanMuki == this.comMuki && this.result == "あなたの勝ち！あっち向いて") {
        this.winStatus = 1;
        this.step = 3;
        return win;
      }
      if (this.humanMuki == this.comMuki && this.result == "コンピュータの勝ち！あっち向いて") {
        this.winStatus = 2;
        this.step = 4;
        return lose;
      }
      this.winStatus = 3;
      this.step = 1;
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
      return "グー";
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
