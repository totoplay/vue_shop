<template>
        
    <el-container class="home-container">
  <el-header>
    <el-button type='info' @click='loginout'>退出</el-button>
      <div>
          <img src="../assets/1.png" alt="">
          <span>电商后台管理系统</span>
      </div>
      <el-button type='info' @click='loginout'>退出</el-button>
  </el-header>
  <el-container>
    <el-aside width="200px">
        <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
      </el-submenu>
    </el-menu>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
    methods: {
        loginout(){
            window.sessionStorage.clear()
            this.$router.push('/login')
        }
    },
}
</script>

<style lang="less" scoped>
.home-container{
    height: 100%;
}
.el-header{
  background-color:#373D41;
  display: flex;
  
}
.el-aside{
  background-color:#333744;
}
.el-main{
  background-color:#eaedf1;
}
</style>
