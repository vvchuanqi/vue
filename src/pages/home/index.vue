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
    .card-padding {
        padding: 16px;
    }
}
</style>

<template>
<div class="hello">
  <div class="content-box">
    <card :header="{title: '尼尔森的十大可用性原则' }" :footer="{title: '查看更多',link:'/tabs/home/article1'}">
      <div slot="content" class="card-padding">尼尔森的十大可用性原则是产品设计与用户体验设计的重要参考标准，值得深入研究与运用。</div>
    </card>
    <card :header="{title: '系统可用性量表（SUS）' }" :footer="{title: '查看更多',link:'/tabs/home/article2'}">
      <div slot="content" class="card-padding">从what，when，why，how四个角度讨论用户研究中常用的SUS（System Usability Scale：系统可用性量表），对其他量表感兴趣的可以自行深入研究。</div>
    </card>
    <!-- <grid>
      <grid-item label="体验反馈表" key="0"><img slot="icon" src="../../assets/home/icon_delivery_big.svg" height="140" width="72"></grid-item>
    </grid> -->
    <!-- <grid :cols="3">
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
    </grid> -->
    <!-- <card>
      <img slot="header" src="../../assets/home/icon_add.svg" alt="" height="32" width="32">
      <div slot="content" class="card-padding">
        添加项目
      </div>
    </card> -->
  </div>
  <transition :name="transitionName">
    <router-view class="cover"></router-view>
  </transition>
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
      transitionName: 'fade',
    }
  },
  methods: {}
}
</script>
