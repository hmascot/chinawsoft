import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Default from '@/components/indexContent/indexContent'
import Products from '@/components/goods/goods'
import commodityDetail from '@/components/goodsDetail/goodsDetail'
import recruitment from '@/components/recruitment/recruitment'
import about from '@/components/pageAbout/pageAbout'
// import eliteTeam from '@/components/eliteTeam/eliteTeam'
Vue.use(Router)

export default new Router({
	mode:"history",
	routes: [
	    {
	        path: '/',
	        component: Index,
	        children:[{
	        	path: '/',
		        name: 'Default',
		        component: Default
	        },{
		    	path: '/prodect',
		    	name:'product',
		        component: Products
		    },{
			    path: '/project/detail/:id',
			    name: 'detail',
			    component: commodityDetail
			},{
			    path: '/recruitment',
			    name: 'recruitment',
			    component: recruitment
			},{
			    path: '/about',
			    name: 'about',
			    component: about
			}
			// ,{
			//     path: '/eliteTeam',
			//     name: 'eliteTeam',
			//     component: eliteTeam
			// }
			]
	    }
	]
})
