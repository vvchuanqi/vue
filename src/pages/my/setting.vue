<template>
<div class="hello">
  <!-- header -->
  <header>
    <div class="header-left"><a href="#" @click="goMain"><img src="../../assets/icon_back.svg" height="24" width="24" style="display:block;"></a></div>
    <div class="title">{{title}}</div>
  </header>
  <!-- / -->
  <div class="content-box">
    <!-- 资料完整度 -->
    <div class="resume-step">
      <div class="step-wrap">
        <div class="step-inner"></div>
        <span class="step-label">资料完整度50%</span>
      </div>
    </div>
    <!-- / -->
    <!-- 用户信息 -->
    <div class="list-title">基本信息</div>
    <div class="lists">
      <div class="list list-link">
        <div class="list-bd">
          <div class="list-label">头像</div>
        </div>
        <div class="list-ft"><img src="../../assets/my/avatar.jpg" alt="张三" height="64" width="64"></div>
      </div>
      <div class="list list-link">
        <div class="list-bd">
          <div class="list-label">性别</div>
        </div>
        <div class="list-ft">男</div>
      </div>
      <div class="list list-link">
        <div class="list-bd">
          <div class="list-label">生日</div>
        </div>
        <div class="list-ft">1984-04-04</div>
      </div>
      <div class="list list-link">
        <div class="list-bd">
          <div class="list-label">常住</div>
        </div>
        <div class="list-ft">广东 珠海</div>
      </div>
      <div class="list list-link">
        <div class="list-bd">
          <div class="list-label">行业</div>
        </div>
        <div class="list-ft">IT</div>
      </div>
    </div>

    <div class="list-title">认证信息</div>
    <div class="lists">
      <div class="list list-link">
        <div class="list-bd">
          <div class="list-label">头像</div>
        </div>
        <div class="list-ft">假的</div>
      </div>
      <div class="list list-link">
        <div class="list-bd">
          <div class="list-label">性别</div>
        </div>
        <div class="list-ft">男</div>
      </div>
      <div class="list list-link">
        <div class="list-bd">
          <div class="list-label">生日</div>
        </div>
        <div class="list-ft">1984-04-04</div>
      </div>
      <div class="list list-link">
        <div class="list-bd">
          <div class="list-label">常住</div>
        </div>
        <div class="list-ft">广东 珠海</div>
      </div>
      <div class="list list-link">
        <div class="list-bd">
          <div class="list-label">行业</div>
        </div>
        <div class="list-ft">IT</div>
      </div>
    </div>
    <!-- / -->
  </div>
</div>
</template>

<script>
export default {
  name: 'my',
  data() {
    return {
      title: '设置',
    }
  },
  methods: {
    goMain() {
      this.$router.push({
        path: "/tabs/my"
      });
    }
  }
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
        .step-label {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            color: #17233d;
            font-size: 12px;
        }
        .step-inner {
            border-radius: 40px 0 0 40px;
            background-color: #ff9900;
            text-align: center;
            width: 50%;
            height: 24px;
        }
    }
}
</style>
