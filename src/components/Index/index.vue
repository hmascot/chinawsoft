<template>
  <div class="index">
      <HeaderNav :head="head"></HeaderNav>
      <router-view></router-view>
  </div>
</template>

<script>
import HeaderNav from '../header/header_index'
import headData from '@/data/headerData'
export default {
  name: 'index',
  components: { HeaderNav },
  data () {
    return {
      head:headData.head
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
