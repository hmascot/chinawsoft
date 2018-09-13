<template>
  <div class="goodsDetail">
        <div class="container mb-40">

	        <div class="pdAll_20 flex between">
	            <div class="flex acenter">
	            	<router-link class="color-999" to="/">首页</router-link>
	            	<span class="ml-10 mr-10">&gt;</span>
	            	<router-link class="color-999" to="/prodect">产品与服务</router-link>
	            	<span class="ml-10 mr-10">&gt;</span>
	            	<span class="color-666">详情介绍</span>
	            </div>
	            <div></div>
	        </div>

	        <div class="flex acenter detailTitle">
	        	<div><img  class="imgStyle" :src="pageData.picture" /></div>
	        	<div class="detail">
	        		<div class="pdAll_30">
	        			<div class="bold color-666 fz_20" v-text="pageData.projectName"></div>
	        			<div class="flex between color-999 mt-10 fz_16">
	        				<div v-text="pageData.sketch"></div>
	        				<div class="flex acenter"><i class="iconfont mr-10 fz_20 icon-earth"></i><span class="url" @click="jump(pageData.url)" v-text="pageData.url"></span></div>
	        			</div>
						
						<div class="flex w_80 acenter warm fz_16 ">
							<div class="w_50 flex acenter mt-15" v-for="(item,index) in pageData.sketchInfo">
								<div class="color-666 w_30" v-text="item.title + '：'"></div>
								<div class="color-999" v-text="item.content"></div>
							</div>

						</div>

	        		</div>
	        	</div>
	        </div>
			
			<div class="detailContent">
				<div v-for="(item,index) in pageData.baseInfo">
					<div class="bg color-666" v-text="item.title"></div>
					<div class="color-999" v-text="item.content">
					</div>
				</div>
			</div>

	    </div>
	    <Footer :foot="foot"></Footer>
  </div>
</template>

<script>
import goodsData from '@/data/goodsData'
import Footer from '../footerinder/footerOther'
import dataFoot from '@/data/foot'
export default {
  name: 'goodsDetail',
  components:{ Footer },
  data () {
    return {
      pageData:[],
      foot:dataFoot.foot
    }
  },
  methods:{
    getData(id){
    	let self = this;
    	for(let i in goodsData.goods){
    		if (goodsData.goods[i].id == id) {
    			self.pageData = goodsData.goods[i];
    			break;
    		}
    	}
    },
    jump(url){
      window.open('http://' + url)
    }
  },
  created(){
  	this.getData(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detailTitle{border: 1px solid #F4F4F4; border-bottom: 0;}
.detail{ height: 280px; width: 100%; }
.detailContent{ border: 1px solid #F4F4F4; padding: 0px 30px; padding-bottom: 50px; }
.bg{ background: url('/static/img/tag.png') no-repeat; width: 250px; height: 50px; line-height: 50px; text-align: center; margin: 40px 0; }
.imgStyle{ width: 280px; height: 280px; }
.url:hover{ cursor: pointer; color: #34C9FB }
</style>
