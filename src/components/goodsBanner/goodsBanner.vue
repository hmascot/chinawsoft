<template>
  <div class="itemBanner">
      <div class="banner"><img :src="banner.img" :alt="banner.title"></div>
      <div class="container">
      	<div class="shuoming bgbai">
      		<div class="color-666 fz_18" v-text="banner.title"></div>
      		<div class="color-999 fz_16" v-text="banner.enTitle"></div>
      	</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'itemBanner',
  props:["banner"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner img{width: 100%;}
.shuoming{padding: 10px 30px; box-shadow: 0 2px 5px #AAAAAA; margin-top: -30px; position: relative;z-index: 22;}
</style>
