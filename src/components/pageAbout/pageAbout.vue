<template>
  <div class="pageAbout">
      <Banner :banner="banner"></Banner>
      <div class="rongqi">
          <div class="text-center bold fz_20 color-666 pt-40 pb-40">中胜软通的使命是让天下没有难做的生意。</div>
          <div class="color-999 fz_16 lHeight_35">
            中胜软通经过多年的经验积累，总结出了对电信领域及中小生产、销售企业信息化解决方案，我们的项目实施团队能够更加准确快捷地找出客户的具体需求，为您的企业度身定做真正切合实际需求的解决方案。我们实施方面多年的实践积累将为您的企业带来最大投资回报。客户的满意源于我们高度的责任感、敬业精神与专业素质。帮助客户不断创造价值，才能实现自身价值的升华,中胜软件助力您企业的发展，实现共赢。
          </div>
          <div class="flex between pt-40">
            <img src="/static/img/about_1.png" />
            <img src="/static/img/about_2.png" />
            <img src="/static/img/about_3.png" />
            <img src="/static/img/about_4.png" />
          </div>
          <div class="text-center bold fz_20 color-666 pt-40 pb-40">我们的发展历程</div>
          <div class="color-999 fz_16 lHeight_35 text-center pb-20">
            中胜软通信息技术有限公司成立于2014年，是北京一家专业从事企业信息化解决方案的高新技术企业。拥有一批长期专业从事软件开发、软件定制的专业人才，具有雄厚的技术开发实力，全方位满足企业信息化需求。
          </div>
      </div>
      <Footer :foot="foot"></Footer>
  </div>
</template>

<script>
import Banner from '../goodsBanner/goodsBanner'
import Footer from '../footerinder/footerOther'
import dataFoot from '@/data/foot'
export default {
  name: 'pageAbout',
  components:{ Banner,Footer },
  data () {
    return {
      banner:{
        "img":"/static/img/aboutBanner.png",
        "title":"关于我们",
        "enTitle":"About US"
      },
      foot:dataFoot.foot
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rongqi{width: 1040px; margin: auto;}
</style>
