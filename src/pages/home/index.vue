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
    <card :header="{title: '用户调研方法' }" :footer="{title: '查看更多',link:'/tabs/home/article2'}">
      <div slot="content" class="card-padding">设计决策需要同时满足商业与用户需求，但了解真实用户需求也非常重要。为了平息这场争论，下面就要请出本文的主角——用户研究——一种能让设计方案落地并关注用户体验的手段。</div>
    </card>
    <card :header="{title: '尼尔森的十大可用性原则' }" :footer="{title: '查看更多',link:'/tabs/home/article1'}">
      <div slot="content" class="card-padding">尼尔森的十大可用性原则是产品设计与用户体验设计的重要参考标准，值得深入研究与运用。</div>
    </card>
    <card :header="{title: '系统可用性量表（SUS）' }" :footer="{title: '查看更多',link:'/tabs/home/article2'}">
      <div slot="content" class="card-padding">从what，when，why，how四个角度讨论用户研究中常用的SUS（System Usability Scale：系统可用性量表），对其他量表感兴趣的可以自行深入研究。</div>
    </card>
    <card :header="{title: '错误提示怎么写？' }" :footer="{title: '查看更多',link:'/tabs/home/article2'}">
      <div slot="content" class="card-padding">当用户犯错时，什么样的提醒设计才能让他不会恼怒，反而如临春风呢？本文总结了8个小技巧，帮你做好这个细节。</div>
    </card>
    <card :header="{title: '栅格设计原理和技巧' }" :footer="{title: '查看更多',link:'/tabs/home/article2'}">
      <div slot="content" class="card-padding">运用网格辅助设计，可以让页面富有统一的秩序感和韵律。在网页设计里，我们也需要视觉表现出统一性和一致性，让页面更加专业和系统化；但同时，网页设计相对于传统平面设计也更强调动态化、体系化的思考。栅格系统可以辅助我们制定网页设计的规则，了解栅格的基本原理和前端应用对于网页设计来说就变得非常重要了。</div>
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
