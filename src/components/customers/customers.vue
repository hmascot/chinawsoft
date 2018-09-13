<template>
  <div class="customers">
      <div class="container">

        <div class="pr-20 flex acenter between pb-40 pt-40">
          <div class="fz_20 color-666 flex acenter"><span class="lantiao mr-20"></span>我们的客户<span class="fz_16 color-999 ml-20">Our Customers</span></div>
          <div class="fz_16 allProdect">全部</div>
        </div>
        
        <div class="flex acenter warm">
          <div v-for="(item,index) in customers" :key="index" :class="[ among(index) ? 'mr-25' : '',rowNum(index) ? 'mt-40' : '']">
            <img :src="item" alt="">
          </div>
        </div>
        
      </div> 
  </div>
</template>

<script>
let dataAmong = [];
export default {
  name: 'customers',
  props:["customers"],
  data () {
    return {
      rowNumber:5
    }
  },
  methods:{
    among(ind){
        let self = this
        let index = 5*(ind+1)
        dataAmong.push(index)
        if (dataAmong.indexOf(ind+1) > -1) return false
        else return true;
    },
    rowNum(ind){
      let self = this;
      if (ind < self.rowNumber) return false
      else return true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.customers{background: #f5f5f5;padding-bottom: 80px;}
.allProdect:hover{ color: #34C9FB; cursor: pointer; }
.lantiao{height: 20px; background: #34C9FB; width: 4px; display: inline-block;}
</style>
