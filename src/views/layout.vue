<template>
  <!-- 最外层  -->
  <el-container class="container-layout">
    <!-- 左边导航栏 -->
    <el-aside :width="isOpen?'200px':'64px'">
      <!-- logo区域 -->
      <div class="logo" :class="{'min_logo':!isOpen}"></div>

      <!-- 导航菜单 -->
      <!-- 导航容器 -->
      <!-- default-active="2" 设置默认激活的菜单项 根据菜单项index属性来激活 -->
      <!--   @open="handleOpen" 组件自定义事件，展开子菜单触发该事件 -->
      <!--   @close="handleClose" 组件自定义事件 收起子菜单触发该事件 -->
      <!-- background-color="#545c64" 导航菜单背景样式 -->

      <el-menu
        style="border-right:none"
        :collapse="!isOpen"
        :collapse-transition="false"
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#002233"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <!-- el-submenu  当你有子菜单使用该组件 -->
        <!-- el-menu-item 当没有子组件使用该组件 -->
        <el-menu-item index="1">
          <!-- 设置图标 -->
          <i class="el-icon-s-home"></i>
          <!-- 菜单文字 -->
          <span slot="title">首页</span>
        </el-menu-item>

        <el-menu-item index="2">
          <!-- 设置图标 -->
          <i class="el-icon-document"></i>
          <!-- 菜单文字 -->
          <span slot="title">内容管理</span>
        </el-menu-item>

        <el-menu-item index="3">
          <!-- 设置图标 -->
          <i class="el-icon-picture"></i>
          <!-- 菜单文字 -->
          <span slot="title">素材管理</span>
        </el-menu-item>

        <el-menu-item index="4">
          <!-- 设置图标 -->
          <i class="el-icon-s-promotion"></i>
          <!-- 菜单文字 -->
          <span slot="title">发布文章</span>
        </el-menu-item>

        <el-menu-item index="5">
          <!-- 设置图标 -->
          <i class="el-icon-chat-line-round"></i>
          <!-- 菜单文字 -->
          <span slot="title">评论管理</span>
        </el-menu-item>

        <el-menu-item index="6">
          <!-- 设置图标 -->
          <i class="el-icon-potato-strips"></i>
          <!-- 菜单文字 -->
          <span slot="title">粉丝管理</span>
        </el-menu-item>

        <el-menu-item index="7">
          <!-- 设置图标 -->
          <i class="el-icon-setting"></i>
          <!-- 菜单文字 -->
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <!-- 右侧内容 -->
    <el-container>
      <!-- 头部 -->
      <el-header>
        <!-- 图标 -->
        <span
          @click="isOpen=!isOpen"
          class="icon"
          :class="{'el-icon-s-fold':isOpen,'el-icon-s-unfold':!isOpen} "
        ></span>
        <!-- 文字 -->
        <span class="text">江苏传智播客科技有限公司</span>
        <!-- 下拉框 -->
        <el-dropdown>
          <!--默认显示 -->
          <span>
            <!-- 头像 -->
            <img class="head" src="../assets/avatar.jpg" alt />
            <!-- 用户 -->
            <span class="name">清风徐来</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <!-- 下拉选项 -->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人设置</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <!-- 内容区域 -->

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "layout",
  data() {
    return {
      //   控制侧边栏展开和收起
      isOpen: true
    };
  }
};
</script>


<style lang="less" scoped>
.container-layout {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .el-aside {
    background: #002233;
    .logo {
      width: 100%;
      height: 60px;
      background: #002244 url("../assets/logo_admin.png") no-repeat center /
        140px auto;
    }
    .min_logo {
      background-image: url("../assets/logo_admin_01.png");
      background-size: 36px auto;
    }
  }
  .el-header {
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    .icon {
      vertical-align: middle;
      font-size: 20px;
    }
    .text {
      vertical-align: middle;
      margin-left: 10px;
    }
    .el-dropdown {
      float: right;
      .head {
        vertical-align: middle;
        width: 30px;
        height: 30px;
      }
      .name {
        vertical-align: middle;
        margin-left: 10px;
        font-weight: bold;
        color: #333;
      }
    }
  }
}
</style>