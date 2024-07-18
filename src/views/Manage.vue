<template>
  <el-container >
    <el-container style="height: 100vh">
      <el-header style="height: 82px;padding: 0">
        <Header/>
      </el-header>
      <el-main style="padding: 0">
<!--        表示当前页面的子路由会在router-view里面展示-->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: 'HomeView',
  components: {
    Header
  }
}
</script>
