<template>
  <img v-bind:src="signSrc()" />
</template>

<script>
export default {
  props: {
    sign: {
      type: String
    }
  },

  methods: {
    signSrc() {
      if (this.sign == "グー") {
        return "/static/step8/janken_gu.png";
      }
      if (this.sign == "チョキ") {
        return "/static/step8/janken_choki.png";
      }
      if (this.sign == "パー") {
        return "/static/step8/janken_pa.png";
      }
      if (this.sign == "グーチョキパー") {
        return "/static/step8/janken_gutyokipa.png";
      }
      return "/static/step8/blank.png";
    }
  }
};
</script>

<style scoped>
img {
  width: 6rem;
}
</style>
