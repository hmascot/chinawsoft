<template>
  <div class="eliteTeam">
      <Banner :banner="banner"></Banner>
      
      <Footer :foot="foot"></Footer>
  </div>
</template>

<script>
import Banner from '../goodsBanner/goodsBanner'
import Footer from '../footerinder/footerOther'
import dataFoot from '@/data/foot'
export default {
  name: 'eliteTeam',
  components:{ Banner,Footer },
  data () {
    return {
      banner:{
        "img":"/static/img/qiyeBanner.png",
        "title":"精英团队",
        "enTitle":"Team"
      },
      foot:dataFoot.foot
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
