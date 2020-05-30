<template>
  <img v-bind:src="hoiSrc()" />
</template>

<script>
export default {
  props: {
    hoi: {
      type: String,
    },
  },

  methods: {
    hoiSrc() {
      if (this.hoi == "ウエ") {
        return "/static/step8/hoi_ue.png";
      }
      if (this.hoi == "シタ") {
        return "/static/step8/hoi_sita.png";
      }
      if (this.hoi == "ミギ") {
        return "/static/step8/hoi_migi.png";
      }
      if (this.hoi == "ヒダリ") {
        return "/static/step8/hoi_hidari.png";
      }
    },
  },
};
</script>

<style scoped>
img {
  width: 8rem;
}
</style>
