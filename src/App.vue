<template>
<div id="app">
  <router-view />
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import '../static/less/global';
.fade-enter-active {
    transition: all 0.2s ease;
}
.fade-leave-active {
    transition: all 0.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter,
.fade-leave-to {
    transform: translateX(100%);
}
</style>
