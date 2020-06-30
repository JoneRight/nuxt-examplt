<template>
  <div>
    <img
      v-lazy="imgSrc"
      alt=""
    >
  </div>
</template>

<script>
export default {
  layout: 'example',
  data() {
    return {
      imgSrc: 'http://idiy.haier.com/upload/test/ca9eed25-1087-417f-88dc-ac68038bffaa.jpg',
    }
  },
}
</script>

<style lang="scss" scoped>
</style>