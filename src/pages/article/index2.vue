<style scoped lang='less'>
.hello {}
.footer-card {
    background-color: #FFF;
    text-align: center;
    padding: 16px;
    &:active {
        background-color: #f8f8f9;
    }
}
article {
    padding: 16px;
    h2 {
        font-size: 18px;
        margin: 0 0 16px;
    }
    ol {
        list-style: inside;
        margin-bottom: 16px;
        > li {
            margin-bottom: 8px;
            font-size: 16px;
        }
    }
    p {
        font-size: 16px;
        margin: 0 0 16px;
        line-height: 1.6;
    }
}
</style>

<template>
<div class="hello">
  <!-- header -->
  <header>
    <div class="header-left">
      <router-link to="/tabs/home"><img src="../../assets/icon_back.svg" height="24" width="24" style="display:block;"></router-link>
    </div>
    <div class="title">{{title}}</div>
  </header>
  <!-- / -->
  <div class="content-box">
    <article>
      <p>我们在做产品或系统的可用性测试后，都想把结果更好地传递给相关方。除了定性的研究结果之外，还有定量的可用性问卷，这些可用性问卷是标准化的，不仅可以科学地量化用户体验，也方便相关方之间有效沟通。常见的标准化可用性问卷有整体评估问卷、任务评估问卷和网站感知可用性评估问卷。</p>
      <p>SUS最初是Brooke于1986年编制，量表由10个题目组成，包括奇数项的正面陈述和偶数项的反面陈述，要求参与者在使用系统或产品后对每个题目进行5点评分。</p>
      <h2>何时使用？</h2>
      <ol>
        <li>同一产品或系统，新旧迭代版本的对比。比如：某App首页改版后，新旧首页的对比。</li>
        <li>同一产品或系统，不同终端之间的对比。比如：某产品的PC端、App端进行比较。</li>
        <li>同类型竞品之间的比较。比如：苏宁，京东，当当三款App使用后进行比较。</li>
      </ol>
      <h2>如何使用？</h2>
      <p>当参与者做完一系列任务后，就可以快速对SUS进行打分。然后就需要对每个题目的分值进行转换，奇数项计分采用“原始得分-1”，偶数项计分采用“5-原始得分”。由于是5点量表，每个题目的得分范围记为0~4（最大值为40），而SUS的范围在0~100，故需要把所有项的转换分相加，最终再乘以2.5，即可获得SUS分数。</p>
      <p>除了获得SUS量表总分之外，还可以获得分量表得分。SUS中，第4和第10项构成的子量表为“易学性”（Learnability），其他8项构成的子量表为“可用性”（Usability）。为了使易学性和可用性分数能够与整体SUS分数兼容，范围也是0~100，需要对原始分数进行转换：易学性量表转换分数的总和乘以12.5，可用性量表乘以3.125。</p>
      <p>Tips：因为SUS记分时是用的0~4个距离，为了让总分是100，所以计算SUS总分时要乘以2.5。但是可用性的题目为8个，总分值在0~32，所以应该是计算出8道题的总分，然后乘以100/32。易学性的计分类推。</p>
      <p>除此之外，也可以将SUS分数换算成百分等级来解释，百分等级的意思是指测量的产品或系统相对于总数据库里其他产品或系统的可用性程度。比如SUS得分是73分，其百分等级大约为67，意味着比大约66%的产品可用性更好。</p>

    </article>
  </div>
  <div class="footer-card" @click="doTest">
    <img src="../../assets/home/icon_add.svg" alt="开始测评项目" height="32" width="32"><br>
    开始测评项目
  </div>
  <transition :name="transitionName">
    <router-view class="cover"></router-view>
  </transition>
</div>
</template>

<script>
import {} from 'vux'
export default {
  name: 'home',
  components: {},
  data() {
    return {
      title: '系统可用性量表（SUS）',
      transitionName: 'fade',
    }
  },
  methods: {
    doTest: function() {
      this.$router.push({
        path: "/tabs/home/article2/test1"
      });
    }
  }
}
</script>
