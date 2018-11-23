<template>
<div class="hello">
  <card :header="{title: '死定了看风景'}">
    <div slot="content" class="card-demo-flex card-demo-content01">
      <div class="vux-1px-r">
        <span>1130</span>
        <br />
        需求调研
      </div>
      <div class="vux-1px-r">
        <span>15</span>
        <br />
        意见反馈
      </div>
      <div class="vux-1px-r">
        <span>0</span>
        <br />
        信息梳理
      </div>
      <div>
        <span>88</span>
        <br />
        原型开发
      </div>
    </div>
  </card>
  <div class="content-box">
    123
  </div>
</div>
</template>

<script>
import {
  Card,
  Divider
} from "vux";
export default {
  name: 'stage1',
  components: {
    Card,
    Divider
  },
  data() {
    return {
      msg: 'stage1',
    }
  },
  methods: {

  }
}
</script>
<style scoped lang='less'>
@import '~vux/src/styles/1px.less';
.card-demo-flex {
    display: flex;
}
.card-demo-content01 {
    padding: 10px 0;
}
.card-padding {
    padding: 15px;
}
.card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
}
.card-demo-flex span {
    color: #f74c31;
    font-size: 16px;
}
</style>
