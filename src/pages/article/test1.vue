<style scoped lang='less'>
.hello {}
.checked-result {
    font-weight: 800;
    color: #ff9900;
}
.vux-flex-row {
    padding: 0 16px;
    .vux-flexbox-item {
        font-size: 12px;
        color: #c5c8ce;
        &:last-child {
            text-align: right;
        }
    }
}
.vux-checker-box {
    padding: 8px 16px;
    display: flex;
    .checker-item {
        flex: 1;
        text-align: center;
        border: 1px solid #ddd;
        border-right-color: transparent;
        padding: 8px 12px;
        line-height: 1;
        font-size: 12px;
        &:last-child {
            border-right-color: #ddd;
        }
    }
    .checker-item-selected {
        background-color: #67C23A;
        border-color: #67C23A;
        color: #FFF;
        &:last-child {
            border-right-color: #67C23A;
        }
    }
}
.footer-card {
    background-color: #FFF;
    text-align: center;
    padding: 16px;
    &:active {
        background-color: #f8f8f9;
    }

}
</style>

<template>
<div class="hello">
  <!-- header -->
  <header>
    <div class="header-left">
      <router-link to="/tabs/home/article2"><img src="../../assets/icon_back.svg" height="24" width="24" style="display:block;"></router-link>
    </div>
    <div class="title">{{title}}</div>
  </header>
  <!-- / -->
  <div class="content-box">
    <group title="请选择测评项目">
      <popup-picker title="选择项目" :data="list1" v-model="value1" :columns="2"></popup-picker>
    </group>
    <group title="请对项目进行评分">
      <cell title="1、我认为我会愿意经常使用本APP" :border-intent="false"></cell>
      <flexbox>
        <flexbox-item>强烈反对</flexbox-item>
        <flexbox-item>非常同意</flexbox-item>
      </flexbox>
      <checker v-model="value2" default-item-class="checker-item" selected-item-class="checker-item-selected">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item}}</checker-item>
      </checker>
      <cell title="2、我发现这个app没必要这么复杂" :border-intent="false"></cell>
      <flexbox>
        <flexbox-item>强烈反对</flexbox-item>
        <flexbox-item>非常同意</flexbox-item>
      </flexbox>
      <checker v-model="value3" default-item-class="checker-item" selected-item-class="checker-item-selected">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item}}</checker-item>
      </checker>
      <cell title="3、我认为这个app容易使用" :border-intent="false"></cell>
      <flexbox>
        <flexbox-item>强烈反对</flexbox-item>
        <flexbox-item>非常同意</flexbox-item>
      </flexbox>
      <checker v-model="value4" default-item-class="checker-item" selected-item-class="checker-item-selected">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item}}</checker-item>
      </checker>
      <cell title="4、我需要技术人员支持才能使用" :border-intent="false"></cell>
      <flexbox>
        <flexbox-item>强烈反对</flexbox-item>
        <flexbox-item>非常同意</flexbox-item>
      </flexbox>
      <checker v-model="value5" default-item-class="checker-item" selected-item-class="checker-item-selected">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item}}</checker-item>
      </checker>
      <cell title="5、我发现这个系统中的不同功能被较好的整合在一起" :border-intent="false"></cell>
      <flexbox>
        <flexbox-item>强烈反对</flexbox-item>
        <flexbox-item>非常同意</flexbox-item>
      </flexbox>
      <checker v-model="value6" default-item-class="checker-item" selected-item-class="checker-item-selected">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item}}</checker-item>
      </checker>
      <cell title="6、我认为这个系统太不一致了" :border-intent="false"></cell>
      <flexbox>
        <flexbox-item>强烈反对</flexbox-item>
        <flexbox-item>非常同意</flexbox-item>
      </flexbox>
      <checker v-model="value7" default-item-class="checker-item" selected-item-class="checker-item-selected">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item}}</checker-item>
      </checker>
      <cell title="7、我认为大部分人会很快学会使用这个系统" :border-intent="false"></cell>
      <flexbox>
        <flexbox-item>强烈反对</flexbox-item>
        <flexbox-item>非常同意</flexbox-item>
      </flexbox>
      <checker v-model="value8" default-item-class="checker-item" selected-item-class="checker-item-selected">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item}}</checker-item>
      </checker>
      <cell title="8、我发现这个系统使用起来非常笨拙" :border-intent="false"></cell>
      <flexbox>
        <flexbox-item>强烈反对</flexbox-item>
        <flexbox-item>非常同意</flexbox-item>
      </flexbox>
      <checker v-model="value9" default-item-class="checker-item" selected-item-class="checker-item-selected">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item}}</checker-item>
      </checker>
      <cell title="9、使用这个系统我感到很自信" :border-intent="false"></cell>
      <flexbox>
        <flexbox-item>强烈反对</flexbox-item>
        <flexbox-item>非常同意</flexbox-item>
      </flexbox>
      <checker v-model="value10" default-item-class="checker-item" selected-item-class="checker-item-selected">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item}}</checker-item>
      </checker>
      <cell title="10、在我可以使用该系统前，我需要学习很多东西" :border-intent="false"></cell>
      <flexbox>
        <flexbox-item>强烈反对</flexbox-item>
        <flexbox-item>非常同意</flexbox-item>
      </flexbox>
      <checker v-model="value11" default-item-class="checker-item" selected-item-class="checker-item-selected">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item}}</checker-item>
      </checker>
    </group>
    <div class="footer-card">
      <x-button type="primary" @click.native="done">提交</x-button>
    </div>
  </div>

</div>
</template>

<script>
import {
  Group,
  Cell,
  PopupPicker,
  Checker,
  CheckerItem,
  XButton,
  Flexbox,
  FlexboxItem
} from 'vux'
export default {
  name: 'home',
  components: {
    Group,
    Cell,
    PopupPicker,
    Checker,
    CheckerItem,
    XButton,
    Flexbox,
    FlexboxItem
  },
  data() {
    return {
      title: '可用性量表',
      value1: [],
      items1: ['1', '2', '3', '4', '5'],
      list1: [{
        name: '财智云app',
        value: 'czyapp',
        parent: '0' // 为一级时可以不写 parent，但是此时允许为数字 0、空字符串或者字符串 '0'
      }, {
        name: '智能CiCi',
        value: 'cici',
        parent: '0'
      }, {
        name: '财务家园',
        value: 'cwjy',
        parent: '0'
      }, {
        name: '微学习',
        value: 'wxx',
        parent: '0'
      }, {
        name: '核算3.0',
        value: 'hs',
        parent: '0'
      }, {
        name: 'v1.2',
        value: '1.2',
        parent: 'czyapp'
      }, {
        name: 'v1.5',
        value: '1.5',
        parent: 'czyapp'
      }, {
        name: 'v1.0',
        value: '1.0',
        parent: 'cici'
      }, {
        name: 'v1.5',
        value: '1.5',
        parent: 'cici'
      }, {
        name: 'v1.0',
        value: '1.0',
        parent: 'cwjy'
      }, {
        name: 'v1.4',
        value: '1.4',
        parent: 'cwjy'
      }, {
        name: 'v1.5',
        value: '1.5',
        parent: 'wxx'
      }, {
        name: 'v1.5',
        value: '1.5',
        parent: 'wxx'
      }, {
        name: 'v1.5.3',
        value: '1.5.3',
        parent: 'wxx'
      }, {
        name: 'v3.0',
        value: '3.0',
        parent: 'hs'
      }, {
        name: 'v3.5',
        value: '3.5',
        parent: 'hs'
      }],
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',
      value11: '',
    }
  },
  methods: {
    done: function() {

    }
  }
}
</script>
