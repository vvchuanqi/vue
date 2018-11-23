<template>
<div class="hello">
  <!-- 用户信息 -->
  <flexbox class="user-info">
    <div class="user-avatar"><img src="../../assets/my/avatar.jpg" alt="张三" height="64" width="64"></div>
    <flexbox-item>
      <div class="user-name">东方不败</div>
      <div class="help-block">日出东方,唯我不败,文成武德,千秋万载。</div>
    </flexbox-item>
  </flexbox>
  <!-- / -->
  <!-- 快捷入口 -->
  <flexbox class="quick-port">
    <flexbox-item class="text-center">
      <strong>1</strong>
      <div class="port-name">密报</div>
    </flexbox-item>
    <flexbox-item class="text-center">
      <strong>22</strong>
      <div class="port-name">待办</div>
    </flexbox-item>
    <flexbox-item class="text-center">
      <strong>6</strong>
      <div class="port-name">堂报</div>
    </flexbox-item>
    <flexbox-item class="text-center">
      <strong>8</strong>
      <div class="port-name">会议</div>
    </flexbox-item>
  </flexbox>
  <!-- / -->
  <!-- 列表 -->
  <group>
    <cell title="待办" is-link>
      <img slot="icon" height="24" width="24" style="margin-right:16px;display:block;" src="../../assets/my/icon_reply.svg">
      <badge text="1"></badge>
    </cell>
    <cell title="待回复" is-link>
      <img slot="icon" height="24" width="24" style="margin-right:16px;display:block;" src="../../assets/my/icon_talk.svg">
      <badge text="1"></badge>
    </cell>
    <cell title="我的工单" is-link>
      <img slot="icon" height="24" width="24" style="margin-right:16px;display:block;" src="../../assets/my/icon_file.svg">
      <badge text="1"></badge>
    </cell>
    <cell title="收藏夹" is-link>
      <img slot="icon" height="24" width="24" style="margin-right:16px;display:block;" src="../../assets/my/icon_fav.svg">sdf
    </cell>
  </group>
  <group>
    <cell title="退出登录" is-link link="/">
      <img slot="icon" height="24" width="24" style="margin-right:16px;display:block;" src="../../assets/my/icon_off.svg">
    </cell>
  </group>
  <!-- / -->
  <transition :name="transitionName">
    <router-view class="cover"></router-view>
  </transition>
</div>
</template>

<script>
import {
  Flexbox,
  FlexboxItem,
  Cell,
  Group,
  Badge,
} from 'vux'
export default {
  name: 'my',
  components: {
    Flexbox,
    FlexboxItem,
    Cell,
    Group,
    Badge,
  },
  data() {
    return {
      msg: '我',
      transitionName: 'fade',
    }
  },
  methods: {

  }
}
</script>
<style scoped lang='less'>
.hello {
    .user-info {
        padding: 0 16px 16px;
        background-color: #FFF;
        .user-name {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 8px;
        }
        .help-block {
            font-size: 14px;
            opacity: 0.7;
        }
        .user-avatar {
            width: 64px;
            height: 64px;
            overflow: hidden;
            border-radius: 8px;
        }
    }
    .quick-port {
        background-color: #FFF;
        position: relative;
        .vux-flexbox-item {
            padding: 8px 0;
            &:active {
                background-color: #f8f8f9;
            }
        }
        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            border-top: 1px solid #e8eaec;
            transform: scaleY(0.5);
        }
        .port-name {
            font-size: 12px;
            opacity: 0.7;
        }
    }
}
</style>
