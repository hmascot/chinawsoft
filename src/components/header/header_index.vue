<template>
  <div class="headerName">
      <header class="header">
          <nav class="container flex acenter nav">
              <div class="logo flex acenter">
                <img src="@/assets/logo.png" alt="天津中胜软通">
              </div>
              <div class="flex acenter ml-30">
                <div class="flex acenter nav_item" v-for="(item,index) in head" :key="index" :class="[index == activeIndex ? 'nav_item_active' : '']" v-text="item.title" @click="jump(item.url,index)"></div>
                <div class="flex acenter ml-20">
                  <div class="iconfont icon-phone color-b7b9ba"></div>
                  <div class="ml-10">
                    <div>服务热线</div>
                    <div>022-8707-0321</div>
                  </div>
                </div>
              </div>
          </nav>
      </header>
  </div>
</template>

<script>
export default {
  name: 'headerName',
  props:["head"],
  data () {
    return {
      activeIndex:0
    }
  },
  methods:{
    jump(url,ind){
      let self = this;
      
      self.activeIndex = ind;

      self.$router.push({path:url})

    },
    routerChange(){
      let self = this;
      for(let i in self.head){
        if (self.head[i].url == this.$route.path) {
          self.activeIndex = i;
          break;
        }
      }
    }
  },
  watch:{
    '$route':'routerChange'
  },
  created(){
    this.routerChange();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{background: #707477;color: #FFF;}
.nav{height: 70px; }
.logo img{ height: 50px;  }
.nav_item{  height: 70px; padding: 0 20px; font-size: 16px; }
.nav_item:hover{background: #34C9FB; cursor: pointer;}
.nav_item_active{ background: #34C9FB; }
</style>
