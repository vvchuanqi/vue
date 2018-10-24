<template>
<div class="hello">
  <header>
    <div class="title">{{title}}</div>
    <div class="header-right"><a href="#" class="setting" @click="goSetting" :class="{show:currentIndex === 3}"><img src="../assets/my/icon_setting.svg" height="24" width="24" style="display:block;"></a></div>
  </header>
  <div class="tab-panel">
    <router-view></router-view>
  </div>
  <footer>
    <div class="tabbar">
      <div class="tabbar-item" :class="{on:currentIndex === 0}" v-on:click="tabbarClick(0)"><i class="tabbar-icon"><img src="../assets/icon_tabbar_home.svg" height="28" width="28"></i><span class="tabbar-text">首页</span></div>
      <div class="tabbar-item" :class="{on:currentIndex === 1}" v-on:click="tabbarClick(1)"><i class="tabbar-icon"><img src="../assets/icon_tabbar_pj1.svg" height="28" width="28"></i><span class="tabbar-text">场景</span></div>
      <div class="tabbar-item" :class="{on:currentIndex === 2}" v-on:click="tabbarClick(2)"><i class="tabbar-icon"><img src="../assets/icon_tabbar_pj2.svg" height="28" width="28"></i><span class="tabbar-text">场景</span></div>
      <div class="tabbar-item" :class="{on:currentIndex === 3}" v-on:click="tabbarClick(3)"><i class="tabbar-icon"><img src="../assets/icon_tabbar_me.svg" height="28" width="28"></i><span class="tabbar-text">我</span></div>
    </div>
  </footer>
</div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      title: '管理后台',
      currentIndex: 0,
    }
  },
  mounted() {
    let to = this.$route.name;
    console.log("rout to :" + to);
    if (to == "home") {
      this.currentIndex = 0;
      this.title = "首页";
    } else if (to == "stage1") {
      this.currentIndex = 1;
      this.title = "场景1";
    } else if (to == "stage2") {
      this.currentIndex = 2;
      this.title = "场景2";
    } else if (to == "my") {
      this.currentIndex = 3;
      this.title = "我的";
    }
  },
  methods: {
    tabbarClick(index) {
      this.currentIndex = index;
      switch (this.currentIndex) {
        case 0:
          this.$router.replace({
            path: "/tabs/home"
          });
          this.title = "首页";
          break;
        case 1:
          this.$router.replace({
            path: "/tabs/stage1"
          });
          this.title = "场景1";
          break;
        case 2:
          this.$router.replace({
            path: "/tabs/stage2"
          });
          this.title = "场景2";
          break;
        case 3:
          this.$router.replace({
            path: "/tabs/my"
          });
          this.title = "我的";
          break;
      }
    },
    goSetting() {
      this.$router.push({
        path: "/tabs/my/setting"
      });
    }
  }
}
</script>
<style scoped lang='less'>
.hello {
    .tab-panel {
        flex: 1;
        background-color: #e8ecef;
        overflow: hidden;
    }
    .setting {
        display: none;
        &.show {
            display: block;
        }
    }
}
</style>
