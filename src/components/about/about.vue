<template>
  <div class="about">
    <div class="main">
      <div class="container flex acenter between warm">
        
        <div class="flex acenter" v-for="(item,index) in about">
            <div class="itemPro flex column rowcenter acenter">
              <div><span class="bold fz_30 color-666" v-text="item.number"></span><span class="color-666 ml-5" v-text="item.unit"></span></div>
              <div class="color-666 mt-10" v-text="item.content"></div>
            </div>
            <div v-if="index != about.length -1" class="line"></div>
        </div>
        
        <div class="aboutContent">
          <div class="content flex acenter">
            <div class="guanyu"><img src="/static/img/5.png" alt="中胜软通"></div>
            <div class="ml-50 gyzs">
              <div class="flex acenter">
                <div class="lantiao"></div>
                <div class="ml-20">
                  <div class="color-666 fz_20">关于中胜</div>
                  <div class="color-999 fz_18">About Us</div>
                </div>
              </div>
              <div class="mt-20 lHeight_25 fz_16 color-999">
                <span class="color-000 fz_18" v-text="brief.title"></span>
                <span v-text="brief.content"></span>
              </div>
              <div class="flex flex-end w_100 mt-40">
                <div class="detail color-999">了解详情</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'about',
  props:["about","brief"],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about{background: #f5f5f5;}
.main{/* height: 550px; */background: url('/static/img/4-banner.jpg') no-repeat; width: 100%; background-size: 100% 60%;}
.line{height: 50px; background: #6B6B6B; width: 1px; }
.itemPro{ width: 239px; height: 140px;  }
.aboutContent{width: 1200px; margin:auto; background: #FFF; box-shadow: 0 2px 10px #B2B2B2; height: 350px; }
.content{padding: 50px;}
.guanyu img{width: 250px; height: 250px;}
.gyzs{height: 250px;}
.detail{border: 1px solid #C2D1DA; padding: 6px 15px; cursor: pointer; border-radius: 4px;}
.detail:hover{background: #0079fe; color: #FFF;}
.lantiao{height: 20px; background: #34C9FB; width: 4px; }
</style>
