<template>
  <div class="recruitment">
      <Banner :banner="banner"></Banner>
      <div class="container">
        <div class="pdAll_20 flex between">
          <div class="flex acenter">
            <router-link class="color-999" to="/">首页</router-link>
            <span class="ml-10 mr-10">&gt;</span>
            <span class="color-666">企业理念</span>
          </div>
          <div></div>
        </div>
      </div>
      <Prodect :project="recruitment" :title="false" type="recruitment"></Prodect>
      <Footer :foot="foot"></Footer>
  </div>
</template>

<script>
import Banner from '../goodsBanner/goodsBanner'
import Footer from '../footerinder/footerOther'
import Prodect from '../prodect/prodect'
import dataRecruitment from '@/data/recruitment'
import dataFoot from '@/data/foot'
export default {
  name: 'recruitment',
  components:{ Banner,Footer,Prodect },
  data () {
    return {
      banner:{
        "img":"/static/img/qiyeBanner.png",
        "title":"企业理念",
        "enTitle":"Talent recruitment"
      },
      foot:dataFoot.foot,
      recruitment:dataRecruitment.recruitment
    }
  },
  methods:{
    
  },
  created(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
