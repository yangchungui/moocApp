<template>
  <div class="nav">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="/static/img/img-found/slide1.jpg" alt="" /></div>
        <div class="swiper-slide"><img src="/static/img/img-found/slide2.jpg" alt="" /></div>
        <div class="swiper-slide"><img src="/static/img/img-found/slide3.jpg" alt="" /></div>
        <div class="swiper-slide"><img src="/static/img/img-found/slide4.jpg" alt="" /></div>
        <div class="swiper-slide"><img src="/static/img/img-found/slide5.jpg" alt="" /></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from  "swiper";
  import "../../../../node_modules/swiper/dist/css/swiper.css";
    export default {
        name: "foundSlide",
      methods:{
        _initSwiper(){
          var mySwiper = new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay:{
              delay: 3000,
              stopOnLastSlide: false,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
            },
          })
        }
      }
    }
</script>

<style scoped>

</style>
