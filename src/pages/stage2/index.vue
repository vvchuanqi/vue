<template>
<div class="hello">
  <search @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" position="absolute" auto-scroll-to-top top="46px" @on-focus="onFocus" @on-cancel="onCancel" @on-submit="onSubmit" ref="search"></search>
  <div class="content-box">地方撒旦法撒旦法斯蒂芬三顿饭阿斯蒂芬地方撒旦法撒旦法斯蒂芬三顿饭阿斯蒂芬地方撒旦法撒旦法斯蒂芬三顿饭阿斯蒂芬地方撒旦法撒旦法斯蒂芬三顿饭阿斯蒂芬地方撒旦法撒旦法斯蒂芬三顿饭阿斯蒂芬地方撒旦法撒旦法斯蒂芬三顿饭阿斯蒂芬地方撒旦法撒旦法斯蒂芬三顿饭阿斯蒂芬地方撒旦法撒旦法斯蒂芬三顿饭阿斯蒂芬地方撒旦法撒旦法斯蒂芬三顿饭阿斯蒂芬地方撒旦法撒旦法斯蒂芬三顿饭阿斯蒂芬地方撒旦法撒旦法斯蒂芬三顿饭阿斯蒂芬地方撒旦法撒旦法斯蒂芬三顿饭阿斯蒂芬地方撒旦法撒旦法斯蒂芬三顿饭阿斯蒂芬地方撒旦法撒旦法斯蒂芬三顿饭阿斯蒂芬</div>
</div>
</template>

<script>
import {
  Search
} from "vux";
export default {
  name: 'stage2',
  components: {
    Search
  },
  data() {
    return {
      results: [],
      value: 'test'
    }
  },
  methods: {
    setFocus() {
      this.$refs.search.setFocus()
    },
    resultClick(item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult(val) {
      console.log('on-change', val)
      this.results = val ? getResult(this.value) : []
    },
    onSubmit() {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus() {
      console.log('on focus')
    },
    onCancel() {
      console.log('on cancel')
    }
  }
}

function getResult(val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>
<style scoped lang='less'>
.hello {}
</style>
