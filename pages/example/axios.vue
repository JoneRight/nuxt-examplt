<template>
  <div>
    {{data}}
  </div>
</template>

<script>
export default {
  name: 'exampleAxios',
  layout: 'example',
  data() {
    return {
      data: '',
    }
  },
  created() {
    var aaa = {
      a: 1,
      b: 2,
      c: 3,
    }
    this.$axios({
      method: 'post',
      url: '/test',
      data: this.$qs.stringify(aaa),
    })
      .then((res) => {
        console.log(res)
        this.data = res
      })
      .catch((error) => {
        this.$message.error(error.msg || error.message || error)
      })
  },
}
</script>

<style lang="scss" scoped>
</style>