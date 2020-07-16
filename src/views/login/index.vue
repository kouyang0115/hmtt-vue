<template>
  <div class="container-login">
    <el-card>
      <img src="../../assets/logo_index.png" alt />
      <!-- 表单 -->
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" status-icon>
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            style="width:240px;margin-right:8px"
          ></el-input>
          <el-button type="primary">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <!-- :value='true' 复选框默认选中，并且不允许更改 -->
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" type="primary" @click="login()">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "page-login",
  data() {
    // 自定义校验 在校验之前定义函数
    const checkMobile = (rule, value, callback) => {
      // value 是待校验的数据
      // callback 校验完毕后调用的回调函数
      // 手机号校验规制： 必须以1 开头 第二位是3-9之间 9个数字结尾
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback();
      } else {
        callback(new Error("手机号不正确"));
      }
    };

    return {
      //   表单数据对象
      // mobile  code是固定的 后台需要的字段
      loginForm: {
        mobile: "",
        code: ""
      },
      // 校验规制的对象
      loginRules: {
        // 手机号验证
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          // 自定义校验
          { validator: checkMobile, trigger: "blur" }
        ],
        //  验证码
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { len: 6, message: "验证码是6个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login() {
      // 整体表单验证
      this.$refs.loginForm.validate(valid => {
        // valid代表是否整体校验成功
        if (valid) {
          // 进行登录操作
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container-login {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("../../assets/login_bg.jpg") no-repeat center/cover;
  .el-card {
    //   el-card 是组件 解析后并不存在这个标签
    // 1 加一个类名
    // 2 加一个 . element-ui在跟组件的根容器上。加了一个组件的名字相同的类名 所以可以使用
    width: 400px;
    height: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      display: block;
      margin: 0 auto 20px;
      width: 200px;
    }
  }
}
</style>
