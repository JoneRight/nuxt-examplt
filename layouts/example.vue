<template>
  <div>
    <example-nav></example-nav>
    <bread />
    <nuxt />
  </div>
</template>

<script>
import exampleNav from '~/components/example/nav'
import bread from '~/components/Bread.vue'

export default {
  components: {
    exampleNav,
    bread,
  },
}
</script>

<style>
</style>
