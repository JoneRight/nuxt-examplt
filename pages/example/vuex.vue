<template>
  <div class="vuex">
    <el-input
      v-model="$store.state.counter"
      readonly
    ></el-input>
    <el-button
      type="primary"
      @click="add"
    >累加</el-button>
  </div>
</template>

<script>
export default {
  layout: 'example',
  methods: {
    add() {
      this.$store.commit('increment')
    },
  },
}
</script>

<style lang="scss" scoped>
.vuex {
  width: 300px;
  margin: 0 auto;
  padding: 30px 0;
  input {
    width: 100%;
  }
  button {
    width: 100%;
    margin-top: 10px;
  }
}
</style>