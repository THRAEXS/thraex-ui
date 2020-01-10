<template>
  <div class="app-container">
    <el-row type="flex" justify="space-between">
      <div
        v-for="item in apps"
        style="margin: 10px;"
        class="br-a"
        :key="item">
        <el-avatar
          shape="square"
          :size="142"
          :src="`${publicPath}images/app-${item}.jpeg`" />
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Launchpad',
  data() {
    return {
      publicPath: process.env.BASE_URL,
      apps: [
        'contacts',
        'find-friends',
        'find-iphone',
        'icloud',
        'keynote',
        'mail',
        'notes',
        'numbers',
        'pages',
        'photos',
        'reminders'
      ]
    }
  }
}
</script>
