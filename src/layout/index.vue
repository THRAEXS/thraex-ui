<template>
  <div>
    <navbar />
    <div>
      Launchpad Container
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
