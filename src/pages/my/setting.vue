<template>
<div class="hello">
  <!-- header -->
  <header>
    <div class="header-left">
      <router-link to="/tabs/my"><img src="../../assets/icon_back.svg" height="24" width="24" style="display:block;"></router-link>
    </div>
    <div class="title">{{title}}</div>
  </header>
  <!-- / -->
  <div class="content-box">
    <!-- 资料完整度 -->
    <div class="resume-step">
      <div class="step-wrap">
        <div class="step-inner" :style="{ width: innerWidth}"></div>
        <span class="step-label">资料完整度50%</span>
      </div>
    </div>
    <!-- / -->
    <!-- 用户信息 -->
    <group title="基本信息">
      <cell title="头像" is-link>
        <img style="margin-right:16px;display:block;" src="../../assets/my/avatar.jpg" alt="张三" height="64" width="64">
      </cell>
      <cell title="性别" is-link>
        <span>男</span>
      </cell>
      <cell title="生日" is-link>
        <span>1984-04-04</span>
      </cell>
      <cell title="常住" is-link>
        <span>广东</span> <span>珠海</span>
      </cell>
      <cell title="行业" is-link>
        <span>IT</span>
      </cell>
    </group>
    <group title="认证信息">
      <cell title="头像" is-link>
        <span>假的</span>
      </cell>
      <cell title="生日" is-link>
        <span>假的</span>
      </cell>
    </group>
    <!-- / -->
  </div>
</div>
</template>

<script>
import {
  Cell,
  Group,
} from 'vux'
export default {
  name: 'my',
  components: {
    Cell,
    Group,
  },
  data() {
    return {
      title: '设置',
      innerWidth: "20%", //资料完整度的百分比
    }
  },
  methods: {}
}
</script>
<style scoped lang='less'>
.hello {}
.resume-step {
    padding: 12px 16px;
    background-color: #FFF;
    .step-wrap {
        border-radius: 40px;
        background-color: #f8f8f9;
        position: relative;
        overflow: hidden;
        .step-label {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            color: #17233d;
            font-size: 12px;
        }
        .step-inner {
            background-color: #ff9900;
            text-align: center;
            height: 24px;
            transition: width 0.2s;
        }
    }
}
</style>
