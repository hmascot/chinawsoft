<template>
  <div class="foot">
      <div class="bg">
        <div class="container">

          <div class="pr-20 flex acenter between pb-40 pt-40">
            <div class="fz_20 color-666 flex acenter">
              <span class="lantiao mr-20"></span>联系我们<span class="fz_16 color-999 ml-20">Contact</span></div>
          </div>

          <div class="pl-50">
            <div class="flex between">
              <div>
                <div class="fz_18">中胜软通信息技术有限公司</div>
                <div class="mt-50">
                  <div class="fz_16">地址：<span>天津市南开区红旗路208号乐谷商务中心A座1501</span></div>
                  <div class="fz_16 mt-20">电话：<span>022-8707-0321</span></div>
                  <div class="fz_16 mt-20">邮箱：<span>www.chinawsoft.com</span></div>
                  <div class="fz_16 mt-20 flex acenter">
                    <div>关注我们：</div>
                    <div class="footImg"> <img src="/static/img/qq.png" /> </div>
                    <div class="footImg ml-10"> <img src="/static/img/wx.png" /> </div>
                    <div class="footImg ml-10"> <img src="/static/img/sign.png" /> </div>
                  </div>
                </div>
              </div>
              
              

              <div>
                <img src="/static/img/9.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'foot',
  props:["foot"],
  data () {
    return {
    }
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg{ background: url('/static/img/footer_bg.jpg') no-repeat; height: 470px; }
.allProdect:hover{ color: #34C9FB; cursor: pointer; }
.lantiao{height: 20px; background: #34C9FB; width: 4px; display: inline-block;}
.footImg img{ width: 20px;height: 20px; cursor: pointer; border-radius: 4px; }
</style>
