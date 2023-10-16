<template>
  <el-container>
    <el-header>
      <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="4">
          <router-link :to="{ path: 'login' }">登录</router-link></el-menu-item
        >
      </el-menu>
    </el-header>
    <el-main>888</el-main>
  </el-container>
</template>
<script>
export default {
  name: "IndexView",
};
</script>