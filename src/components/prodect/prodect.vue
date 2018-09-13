<template>
  <div class="prodect">
      <div class="container">

        <div class="pr-20 flex acenter between pb-40 pt-40" v-if="title">
          <div class="fz_20 color-666 flex acenter"><span class="lantiao mr-20"></span>产品与服务<span class="fz_16 color-999 ml-20">Products & solutions</span></div>
          <div class="fz_16 allProdect">全部</div>
        </div>
        
        <div class="flex warm">
          <div class="pro_item" v-for="(item,index) in project" :key="index" :class="[ among(index) ? 'ml-15 mr-15' : '',rowNum(index) ? 'mt-20' : '']">
            <div class="companyLogo"><img :src="item.picture" :alt="item.projectName"></div>
            
            <div v-if="type == 'recruitment'" class="line"></div>

            <div>
              <div class="pl-15 pr-15 color-666 fz_18" :class="[type == 'recruitment' ? 'pt-20' : type == 'goods' ? 'pt-25 pb-25' : '']" v-text="item.projectName"></div>
              <div class="pl-15 pr-15 color-999 lHeight_25" :class="[type == 'recruitment' ? 'pb-25' : '' ]" v-text="item.projectDescribe"></div>
            </div>
            


            <div v-if="type == 'goods'" class="line mt-10" ></div>

            <div class="url flex acenter between" v-if="type == 'goods'">
              <div class="flex acenter">
                <i class="iconfont icon-earth"></i>
                <span @click="jump(item.url)" class="ml-10 comurl" v-text="item.url"></span></div>
              <div class="detail color-999" @click="detail(item.id)">了解详情</div>
            </div>


          </div>
        </div>
      </div> 
  </div>
</template>

<script>
let dataAmong = [];

export default {
  name: 'prodect',
  props:["project","title","type"],
  data () {
    return {
      rowNumber:3
    }
  },
  methods:{
    among(ind){
        let self = this
        let index = 3*(ind+1) -1
        dataAmong.push(index)
        if (dataAmong.indexOf(ind+1) > -1) return true
        else return false;
    },
    rowNum(ind){
      let self = this;
      if (ind < self.rowNumber) return false
      else return true
    },
    jump(url){
      window.open('http://' + url)
    },
    detail(id){
      let self = this;
      self.$router.push({path:"/project/detail/" + id})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.allProdect:hover{ color: #34C9FB; cursor: pointer; }
.pro_item{ width: 389px; border: 1px solid #F2F2F2; }
.line{ height: 1px; background: #F2F2F2; }
.url{ padding: 12px 20px; }
.comurl:hover{ cursor: pointer; color: #34C9FB }
.detail{ border: 1px solid #f2f2f2; padding: 10px 20px; cursor: pointer; border-radius: 4px; }
.pro_item:hover .detail{ background: #0079fe; color: #FFF; }
.companyLogo img{ width: 100%; }
.prodect{margin-bottom: 60px;}
.lantiao{height: 20px; background: #34C9FB; width: 4px; display: inline-block;}
</style>
