<template>
<div class="hello">
  <transition name="scale">
    <div v-show="isShow">
      <img src="../assets/login/logo.svg" width="83" height="83" alt="logo" class="logo" v-bind:class="{ rotate: isLoading }">
    </div>
  </transition>
  <!-- start 登录 -->
  <div class="form" v-bind:class="{ active: !isShow }" v-if="showLogin">
    <h2 class="title">{{ msg }}</h2>
    <group>
      <x-input title="" @on-focus="focus" @on-blur="blur" placeholder="邮箱/手机号码" id="userName"></x-input>
      <x-input title="" type="password" @on-focus="focus" @on-blur="blur" placeholder="请输入密码" id="password"></x-input>
    </group>
    <box gap="16px 0">
      <x-button @click.native="login" type="primary">登录</x-button>
    </box>
    <flexbox>
      <flexbox-item><span @click="changePassword">重置密码</span></flexbox-item>
      <flexbox-item class="text-right"><span @click="reg">注册</span></flexbox-item>
    </flexbox>
  </div>
  <!-- end 登录 -->
  <!-- start 重置密码 -->
  <div class="form" v-bind:class="{ active: !isShow }" v-if="showChangePassword">
    <h2 class="title">{{ msg }}</h2>
    <group>
      <x-input title="" @on-focus="focus" @on-blur="blur" placeholder="邮箱/手机号码"></x-input>
      <x-input title="" @on-focus="focus" @on-blur="blur" placeholder="验证码">
        <x-button slot="right" mini>获取验证码</x-button>
      </x-input>
    </group>
    <box gap="16px 0">
      <x-button type="primary">确定</x-button>
    </box>
    <flexbox>
      <flexbox-item><span @click="cancel">取消</span></flexbox-item>
      <flexbox-item>
      </flexbox-item>
    </flexbox>
  </div>
  <!-- end 重置密码 -->
  <!-- start 注册 -->
  <div class="form" v-bind:class="{ active: !isShow }" v-if="showReg">
    <h2 class="title">{{ msg }}</h2>
    <group>
      <x-input title="" @on-focus="focus" @on-blur="blur" placeholder="邮箱/手机号码"></x-input>
      <x-input title="" @on-focus="focus" @on-blur="blur" placeholder="验证码">
        <x-button slot="right" mini>获取验证码</x-button>
      </x-input>
    </group>
    <box gap="16px 0">
      <x-button type="primary">注册</x-button>
    </box>
    <flexbox>
      <flexbox-item><span @click="cancel">取消</span></flexbox-item>
      <flexbox-item>
      </flexbox-item>
    </flexbox>
  </div>
  <!-- end 注册 -->
</div>
</template>

<script>
import {
  XInput,
  Group,
  XButton,
  Flexbox,
  FlexboxItem,
  Box,
} from 'vux'
export default {
  name: 'login',
  components: {
    XInput,
    XButton,
    Group,
    Flexbox,
    FlexboxItem,
    Box,
  },
  data() {
    return {
      msg: '后台管理登录',
      isShow: true, //是否显示logo
      isLoading: false, //是否给logo添加旋转的loading样式
      showLogin: true, //是否显示登录框
      showChangePassword: false, //是否显示重置密码表单
      showReg: false, //是否显示注册表单
    }
  },
  methods: { //用户名或者密码框获取焦点事件
    focus: function(e) {
      this.isShow = false;
    }, //密码框或者用户名文本框市区焦点事件
    blur: function(e) {
      this.isShow = true;
      var _this = this;
      if ($("#userName").val() == "" || $("#password").val() == "") {
        _this.msg = "请输入帐号和密码";
        return;
      }
    }, //登录按钮点击事件
    login: function() {
      var _this = this;
      if ($("#userName").val() == "" || $("#password").val() == "") {
        _this.msg = "请输入帐号和密码";
        return;
      }
      _this.isShow = true;
      _this.isLoading = true;
      _this.msg = "loading...";
      setTimeout(function() {
        _this.isLoading = false;
        _this.msg = "登录帐户/密码错误";
      }, 2000);
      setTimeout(function() {
        _this.$router.push({
          path: "/tabs/home"
        });
      }, 5000);
    },
    changePassword: function() {
      this.showChangePassword = true;
      this.showLogin = false;
      this.msg = "重置密码";
    },
    reg: function() {
      this.showLogin = false;
      this.showReg = true;
      this.msg = "注册帐号";
    },
    cancel: function() {
      this.showChangePassword = false;
      this.showReg = false;
      this.showLogin = true;
      this.msg = "后台管理登录";
    }
  }
}
</script>
<style scoped lang='less'>
// 缩放动画
.scale-enter-active,
.scale-leave-active {
    transition: all 0.5s;
}
.scale-enter,
.scale-leave-to {
    opacity: 0;
    transform: scale(0);
}
@keyframes rotate {
    from {
        transform-origin: center;
        transform: rotate(0);
    }
    to {
        transform-origin: center;
        transform: rotate(360deg);
    }
}
.rotate {
    animation-name: rotate;
}
// end 一些动画
.hello {
    background: url("../assets/login/bg_top.jpg") left top / 100% auto no-repeat;
    padding-top: 50px;
    position: relative;
    &:after {
        content: "@测试公司 2018";
        position: absolute;
        bottom: 16px;
        opacity: 0.4;
        left: 50%;
        font-size: 12px;
        transform: translateX(-50%);
    }
    .logo {
        display: block;
        margin: 0 auto 8px;
        width: 79px;
        height: 79px;
        box-sizing: content-box;
        animation-iteration-count: infinite;
        animation-duration: 1s;
        animation-fill-mode: both;
    }
    .title {
        margin: 0 auto 15px;
        text-align: center;
        font-size: 20px;
        color: #000;
    }
    .form {
        background-color: #FFF;
        border-radius: 16px;
        box-shadow: 0 5px 30px rgba(0, 0, 0, .175);
        padding: 24px;
        position: absolute;
        left: 16px;
        right: 16px;
        top: 185px;
        transition: all 0.2s;
        transition-delay: 0.3s;
        &.active {
            transform: translateY(-135px);
        }
    }
}
</style>
