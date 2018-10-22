<template>
<div class="hello">
  <!-- 用户信息 -->
  <div class="user-info">
    <div class="flex-box">
      <div class="flex-item">
        <div class="user-name">vvchuanqi</div>
        <div class="help-block">文成武德，一统江湖，我主万岁。</div>
      </div>
      <div class="user-avatar"><img src="../../assets/my/avatar.jpg" alt="张三" height="64" width="64"></div>
    </div>
  </div>
  <!-- / -->
  <!-- 快捷入口 -->
  <div class="quick-port">
    <div class="flex-box">
      <div class="flex-item text-center"><strong>1</strong>
        <div class="port-name">消息</div>
      </div>
      <div class="flex-item text-center"><strong>22</strong>
        <div class="port-name">消息</div>
      </div>
      <div class="flex-item text-center"><strong>6</strong>
        <div class="port-name">消息</div>
      </div>
      <div class="flex-item text-center"><strong>8</strong>
        <div class="port-name">消息</div>
      </div>
    </div>
  </div>
  <!-- / -->
  <!-- 列表 -->
  <div class="lists">
    <div class="list list-link">
      <div class="list-hd"><img src="../../assets/my/avatar.jpg" alt="" height="24" width="24" style="margin-right:16px;display:block;"></div>
      <div class="list-bd">待办</div>
      <div class="list-ft">3</div>
    </div>
    <div class="list list-link">
      <div class="list-hd"><img src="../../assets/my/avatar.jpg" alt="" height="24" width="24" style="margin-right:16px;display:block;"></div>
      <div class="list-bd">待回复</div>
      <div class="list-ft">3</div>
    </div>
    <div class="list list-link">
      <div class="list-hd"><img src="../../assets/my/avatar.jpg" alt="" height="24" width="24" style="margin-right:16px;display:block;"></div>
      <div class="list-bd">我的工单</div>
      <div class="list-ft">3</div>
    </div>
    <div class="list list-link">
      <div class="list-hd"><img src="../../assets/my/avatar.jpg" alt="" height="24" width="24" style="margin-right:16px;display:block;"></div>
      <div class="list-bd">收藏夹</div>
      <div class="list-ft">3</div>
    </div>
  </div>
  <!-- / -->
</div>
</template>

<script>
export default {
  name: 'my',
  data() {
    return {
      msg: '我'
    }
  },
  methods: {}
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
        margin-bottom: 16px;
        .flex-item {
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
