<template>
  <div class="carousel">
      <template>
        <Carousel v-model="value" autoplay loop :autoplay-speed="3000">
            <CarouselItem v-for="(item,index) in carousel" :key="index">
                <div class="demo-carousel">
                  <img :src="item" />
                </div>
            </CarouselItem>
        </Carousel>
    </template>
      
  </div>
</template>

<script>
export default {
  name: 'carousel',
  props:["carousel"],
  data () {
    return {
      value:0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo-carousel img{ width: 100%; }
</style>
