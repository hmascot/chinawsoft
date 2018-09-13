<template>
  <div class="footOther">
      <div class="foot" v-text="foot"></div>
  </div>
</template>

<script>
export default {
  name: 'footOther',
  props:["foot"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.foot{ text-align: center; height: 60px; line-height: 60px; background: #999999; color: #FFF; }
</style>
