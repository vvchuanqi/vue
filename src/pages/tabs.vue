<template>
<div class="hello">
  <header>
    <div class="title">{{title}}</div>
    <div class="header-right" v-if="currentIndex === 3">
      <router-link to="/tabs/my/setting" class="setting"><img src="../assets/my/icon_setting.svg" height="24" width="24" style="display:block;"></router-link>
    </div>
  </header>
  <div class="tab-panel">
    <router-view></router-view>
  </div>
  <footer>
    <div class="tabbar">
      <div class="tabbar-item" :class="{on:currentIndex === 0}" v-on:click="tabbarClick(0)"><i class="tabbar-icon"><img src="../assets/icon_tabbar_home.svg" height="28" width="28"></i><span class="tabbar-text">{{tabarName[0]}}</span></div>
      <div class="tabbar-item" :class="{on:currentIndex === 1}" v-on:click="tabbarClick(1)"><i class="tabbar-icon"><img src="../assets/icon_tabbar_pj1.svg" height="28" width="28"></i><span class="tabbar-text">{{tabarName[1]}}</span></div>
      <div class="tabbar-item" :class="{on:currentIndex === 2}" v-on:click="tabbarClick(2)"><i class="tabbar-icon"><img src="../assets/icon_tabbar_pj2.svg" height="28" width="28"></i><span class="tabbar-text">{{tabarName[2]}}</span></div>
      <div class="tabbar-item" :class="{on:currentIndex === 3}" v-on:click="tabbarClick(3)"><i class="tabbar-icon"><img src="../assets/icon_tabbar_me.svg" height="28" width="28"></i><span class="tabbar-text">{{tabarName[3]}}</span></div>
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
      tabarName: ['UX', '交互', '习惯', '我的'],
    }
  },
  mounted() {
    let to = this.$route.name;
    console.log("rout to :" + to);
    if (to == "home") {
      this.currentIndex = 0;
      this.title = this.tabarName[0];
    } else if (to == "stage1") {
      this.currentIndex = 1;
      this.title = this.tabarName[1];
    } else if (to == "stage2") {
      this.currentIndex = 2;
      this.title = this.tabarName[2];
    } else if (to == "my") {
      this.currentIndex = 3;
      this.title = this.tabarName[3];
    }
  },
  methods: {
    tabbarClick(index) {
      this.currentIndex = index;
      switch (this.currentIndex) {
        case 0:
          this.$router.push({
            path: "/tabs/home"
          });
          this.title = this.tabarName[0];
          break;
        case 1:
          this.$router.push({
            path: "/tabs/stage1"
          });
          this.title = this.tabarName[1];
          break;
        case 2:
          this.$router.push({
            path: "/tabs/stage2"
          });
          this.title = this.tabarName[2];
          break;
        case 3:
          this.$router.push({
            path: "/tabs/my"
          });
          this.title = this.tabarName[3];
          break;
      }
    },
    goSetting() {
      this.$router.replace({
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
}
</style>
