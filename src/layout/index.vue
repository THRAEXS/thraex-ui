<template>
  <div>
    <navbar />
    <div>
      Launchpad Container
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from './navbar'

export default {
  name: 'Layout',
  components: {
    Navbar
  }
}
</script>
