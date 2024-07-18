<template>
  <el-menu :default-openeds="['0', '0']" style="height: 100%; overflow-x: hidden"
           background-color="#e58998"
           text-color="#fff"
           active-text-color="#837881"
           :collapse-transition="false"
           :collapse="isCollapse"
           router>
    <div style="height: 60px; line-height: 60px; text-align: center" class="logo_t">
      <img class="logo_t" src="../assets/Logo.png" style="height: 60px" v-show="logo">
      <img class="logo_t" src="../assets/Logo-s.png" style="height: 60px" v-show="logo_s">
    </div>
    <el-submenu index="1">
    <template slot="title"><i class="el-icon-s-promotion"></i>
      <span slot="title">首页</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="/home">首页</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-user-solid"></i>
        <span slot="title">用户管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/user">用户管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-menu"></i>
        <span slot="title">展会管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="exhibition">展会管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title"><i class="el-icon-s-shop"></i>
        <span slot="title">商品管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="commodity">商品管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title"><i class="el-icon-s-order"></i>
        <span slot="title">公告管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/anno">公告管理</el-menu-item>
        <el-menu-item index="/annopublish">发布公告</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title"><i class="el-icon-s-comment"></i>
        <span slot="title">留言管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/message">留言管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="7">
      <template slot="title"><i class="el-icon-s-claim"></i>
        <span slot="title">订单管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="orders">订单管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="8">
    <template slot="title"><i class="el-icon-s-opportunity"></i>
      <span slot="title">评价管理</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="appraise">评价管理</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "Aside",
  props:{
    isCollapse:Boolean,
    logo:true,
    logo_s:false
  }
}
</script>

<style scoped>

</style>