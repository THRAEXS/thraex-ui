<template>
  <div>
    <navbar />
    <div class="main-container">
      <router-view :key="key"/>
    </div>
  </div>
</template>
<script>
import Navbar from './navbar'

export default {
  name: 'Layout',
  components: {
    Navbar
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
<style lang="scss" scoped>
body {
  background-color: rgb(40, 41, 35);
}
</style>
