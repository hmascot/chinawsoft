<template>
  <div class="goods">
      <Banner :banner="banner"></Banner>
      <div class="container">
        <div class="pdAll_20 flex between">
          <div class="flex acenter">
            <router-link class="color-999" to="/">首页</router-link>
            <span class="ml-10 mr-10">&gt;</span>
            <span class="color-666">产品与服务</span>
          </div>
          <div></div>
        </div>
      </div>
      <Prodect :project="project" :title="false" type="goods"></Prodect>
      <Footer :foot="foot"></Footer>
  </div>
</template>

<script>
import Banner from '../goodsBanner/goodsBanner'
import Prodect from '../prodect/prodect'
import Footer from '../footerinder/footerOther'
import goodsData from '@/data/goodsData'
import dataFoot from '@/data/foot'
export default {
  name: 'goods',
  components:{ Banner,Prodect,Footer },
  data () {
    return {
      banner:{
        "img":"/static/img/goodsBanner.png",
        "title":"产品与服务",
        "enTitle":"Products & solutions"
      },
      project:goodsData.goods,
      foot:dataFoot.foot
    }
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .toIndex{color: } */
</style>
