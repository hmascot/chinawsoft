<template>
  <div class="index">
        <Sowing :carousel="carousel"></Sowing>
        <Prodect :project="project" :title="true" type="goods"></Prodect>
        <About :about="about" :brief="brief"></About>
        <Customers :customers="customers"></Customers>
        <FooterInder></FooterInder> 
  </div>
</template>

<script>
import Sowing from '../carousel/carousel'
import Prodect from '../prodect/prodect'
import About from '../about/about'
import Customers from '../customers/customers'
import FooterInder from '../footerinder/footerinder'
import goodsData from '@/data/goodsData'
import carousel from '@/data/carousel'
import about from '@/data/about'
import customer from '@/data/customers'
export default {
  name: 'index',
  components: { Sowing,Prodect,About,Customers,FooterInder },
  data () {
    return {
      carousel:carousel.carousel,
      project:goodsData.goods,
      about:about.about,
      brief:about.brief,
      customers:customer.customers
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
