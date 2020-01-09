<template>
  <div class="navbar">
    <el-row type="flex" align="middle">
      <el-col :span="12">
        <el-avatar class="cursor-p" :src="logoUrl" />
      </el-col>
      <el-col :span="12" align="right">
        <el-dropdown class="cursor-p" trigger="click">
          <el-row type="flex" align="middle">
            <el-avatar
              :src="userUrl"
              shape="square"
              size="small"
              @error="errorHandler">
              <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
            </el-avatar>
            <i class="el-icon-caret-bottom" />
          </el-row>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Console</el-dropdown-item>
            <el-dropdown-item>Profile</el-dropdown-item>
            <el-dropdown-item>Settings</el-dropdown-item>
            <el-dropdown-item>Log Out</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {
      keyword: null,
      logoUrl: 'https://avatars2.githubusercontent.com/u/51309378?s=400&u=b0cc106daa6281d419828d07d282718813a7aaa1&v=4',
      userUrl: 'https://avatars3.githubusercontent.com/u/19946794?s=460&v=4'
    }
  },
  methods: {
    errorHandler() {
      return true
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  padding: 6px 10px;
  /*background-color: rgb(24, 25, 2);*/
  background-color: rgb(40, 41, 35);
  /*color: rgb(158, 158, 156);*/
}
</style>
