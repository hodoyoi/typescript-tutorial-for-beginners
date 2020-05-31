<template>
  <b-container>
    <div v-if="step == 0">
      <b-row>
        <img class="mx-auto img-fluid" src="/static/start.png" />
      </b-row>
      <b-row>
        <b-button class="mx-auto" variant="primary" size="lg" @click="onStart()">すたーと</b-button>
      </b-row>
    </div>
    <b-row v-if="step == 1 || step == 2">
      <b-row>
        <b-col cols="6" md="3">
          <b-card>
            <img src="/static/human.png" class="img card-img-top" />
            <div class="card-body">
              <h5 class="card-title">人間の手: <hand-image :sign="humanHand"></hand-image></h5>
              <h5 class="card-title">人間の向き: <hoi-image :hoi="humanMuki"></hoi-image></h5>
            </div>
          </b-card>
        </b-col>
        <b-col cols="6" md="3">
          <b-card>
            <img src="/static/cpu.png" class="img card-img-top" />
            <div class="card-body">
              <h5 class="card-title">CPUの手: <hand-image :sign="comHand"></hand-image></h5>
              <h5 class="card-title">CPUの向き: <hoi-image :hoi="comMuki"></hoi-image></h5>
            </div>
          </b-card>
        </b-col>
        <b-col v-if="step == 1" cols="12" md="6">
          <h3>じゃんけん: {{ result }}</h3>
          <a href="#" class="btn btn-lg btn-primary" @click="onJanken('グー')">グー</a>
          <a href="#" class="btn btn-lg btn-primary" @click="onJanken('チョキ')">チョキ</a>
          <a href="#" class="btn btn-lg btn-primary" @click="onJanken('パー')">パー</a>
          <a href="#" class="btn btn-lg btn-primary" @click="onJanken('グーチョキパー')" v-if="aviableGuChokiPa()">猫の手を借りる</a>
          <h3>猫エネルギー: {{ energy }}</h3>
          <h3 v-if="winStatus == 3" style="color: red;">{{ hoiResult }}</h3>
        </b-col>
        <!-- <h3>カウント: {{ jankenCount }}</h3> -->
        <div v-if="step == 2" class="col-md-6">
          <h3>じゃんけん: {{ result }}</h3>
          <a href="#" class="btn btn-lg btn-primary" @click="onAttimuite('ウエ')">↑</a>
          <a href="#" class="btn btn-lg btn-primary" @click="onAttimuite('シタ')">↓</a>
          <a href="#" class="btn btn-lg btn-primary" @click="onAttimuite('ミギ')">→</a>
          <a href="#" class="btn btn-lg btn-primary" @click="onAttimuite('ヒダリ')">←</a>
        </div>
      </b-row>
    </b-row>
    <div v-if="step == 3">
      <b-row>
        <b-col cols="6" md="3">
          <b-card>
            <img src="/static/human.png" class="img card-img-top" />
            <div class="card-body">
              <h5 class="card-title">人間の手: <hand-image :sign="humanHand"></hand-image></h5>
              <h5 class="card-title">人間の向き: <hoi-image :hoi="humanMuki"></hoi-image></h5>
            </div>
          </b-card>
        </b-col>
        <b-col cols="6" md="3">
          <b-card>
            <img src="/static/cpu.png" class="img card-img-top" />
            <div class="card-body">
              <h5 class="card-title">CPUの手: <hand-image :sign="comHand"></hand-image></h5>
              <h5 class="card-title">CPUの向き: <hoi-image :hoi="comMuki"></hoi-image></h5>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <h3 style="color: red;">{{ hoiResult }}</h3>
          <img class="mx-auto img-fluid" src="/static/win.png" />
          <a href="#" class="btn btn-lg btn-primary" @click="onStart()">もっかい</a>
        </b-col>
      </b-row>
    </div>
    <div v-if="step == 4">
      <b-row>
        <b-col cols="6" md="3">
          <b-card>
            <img src="/static/human.png" class="img card-img-top" />
            <div class="card-body">
              <h5 class="card-title">人間の手: <hand-image :sign="humanHand"></hand-image></h5>
              <h5 class="card-title">人間の向き: <hoi-image :hoi="humanMuki"></hoi-image></h5>
            </div>
          </b-card>
        </b-col>
        <b-col cols="6" md="3">
          <b-card>
            <img src="/static/cpu.png" class="img card-img-top" />
            <div class="card-body">
              <h5 class="card-title">CPUの手: <hand-image :sign="comHand"></hand-image></h5>
              <h5 class="card-title">CPUの向き: <hoi-image :hoi="comMuki"></hoi-image></h5>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <h3 style="color: red;">{{ hoiResult }}</h3>
          <img class="mx-auto img-fluid" src="/static/lose.png" />
          <a href="#" class="btn btn-lg btn-primary mx-auto" @click="onStart()">もっかい</a>
        </b-col>
      </b-row>
    </div>
    <div v-if="step == 5">
      <b-row>
        <b-col cols="6" md="3">
          <b-card>
            <img src="/static/human.png" class="img card-img-top" />
            <div class="card-body">
              <h5 class="card-title">人間の手: <hand-image :sign="humanHand"></hand-image></h5>
              <h5 class="card-title">人間の向き: <hoi-image :hoi="humanMuki"></hoi-image></h5>
            </div>
          </b-card>
        </b-col>
        <b-col cols="6" md="3">
          <b-card>
            <img src="/static/cpu.png" class="img card-img-top" />
            <div class="card-body">
              <h5 class="card-title">CPUの手: <hand-image :sign="comHand"></hand-image></h5>
              <h5 class="card-title">CPUの向き: <hoi-image :hoi="comMuki"></hoi-image></h5>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <h3 style="color: red;">{{ hoiResult }}</h3>
          <img class="mx-auto img-fluid" src="/static/draw.png" />
          <a href="#" class="btn btn-lg btn-primary mx-auto" @click="onReStart()">もっかい</a>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import HandImage from "./HandImage.vue";
import HoiImage from "./HoiImage.vue";

export default {
  components: {
    HandImage,
    HoiImage,
  },
  data() {
    return {
      step: 0,
      winStatus: 0,
      humanHand: "",
      comHand: "",
      result: "",
      jankenCount: 0,
      energy: "🐱：☆☆☆",
      humanMuki: "",
      comMuki: "",
      hoiResult: "",
    };
  },
  methods: {
    onReStart() {
      this.step = 1;
      this.humanHand = "";
      this.humanMuki = "";
      this.comHand = "";
      this.comMuki = "";
    },
    onStart() {
      this.step = 1;
      this.humanHand = "";
      this.humanMuki = "";
      this.comHand = "";
      this.comMuki = "";
      this.energy = "🐱：☆☆☆";
      this.result = "";
      this.jankenCount = 0;
    },
    onJanken(hand) {
      this.humanHand = hand;
      this.winStatus = 0;
      this.comHand = this.getComHand();
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
      this.comMuki = this.getComMuki();
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
      this.step = 5;
      this.result = "";
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
