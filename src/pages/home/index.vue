<style scoped lang='less'>
.hello {
    .weui-grids {
        background-color: #fff;
        .weui-grid__icon {
            height: 48px;
            width: 48px;
        }
        .weui-grid__label {
            font-size: 12px;
        }
    }
}
</style>

<template>
<div class="hello">
  <div class="content-box">
    <grid>
      <grid-item label="体验反馈表" key="0"><img slot="icon" src="../../assets/home/icon_delivery_big.svg" height="140" width="72"></grid-item>
    </grid>
    <grid :cols="3" :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item label="调研工具" key="0">
        <img slot="icon" src="../../assets/home/icon_file.svg" height="48" width="48">
      </grid-item>
      <grid-item label="调研工具" key="1">
        <img slot="icon" src="../../assets/home/icon_cogs.svg" height="48" width="48">
      </grid-item>
      <grid-item label="调研工具" key="2">
        <img slot="icon" src="../../assets/home/icon_user.svg" height="48" width="48">
      </grid-item>
      <grid-item label="调研工具" key="3">
        <img slot="icon" src="../../assets/home/icon_updown.svg" height="48" width="48">
      </grid-item>
      <grid-item label="调研工具" key="4">
        <img slot="icon" src="../../assets/home/icon_box.svg" height="48" width="48">
      </grid-item>
      <grid-item label="调研工具" key="5">
        <img slot="icon" src="../../assets/home/icon_file.svg" height="48" width="48">
      </grid-item>
    </grid>
    <card>
      <img slot="header" src="../../assets/home/icon_add.svg" alt="" height="32" width="32">
      <div slot="content" class="card-padding">
        添加项目
      </div>
    </card>
  </div>
</div>
</template>

<script>
import {
  Grid,
  GridItem,
  Card
} from 'vux'
export default {
  name: 'home',
  components: {
    Grid,
    GridItem,
    Card
  },
  data() {
    return {
      msg: '管理后台',
    }
  },
  methods: {}
}
</script>
