<template>
  <div>
    <h1>Add Text</h1>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="message" v-model="addText" />
      <div class="input-group-append">
        <button href="#" class="btn btn-primary" type="button" @click="onClickAdd">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addText: ""
    };
  },
  methods: {
    onClickAdd() {
      this.$emit("add", this.addText);
    }
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>