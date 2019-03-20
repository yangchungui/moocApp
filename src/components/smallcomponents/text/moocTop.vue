<template>
    <div class="con-list" v-if="data">
      <div class="nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"  v-for="data in data.pic">
              <img :src="data.src" alt="" />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <h3 v-for="data in data.message">
        <a href="javaScript:;">{{data.classname}} <span>头条</span></a>
        <a href="javaScript:;"><p>{{data.title}}</p></a>
        <a href="javaScript:;"><i class="iconfont icon-fangxiangjiantou"></i></a>
      </h3>
      <div class="list-num">
        <p>
          <a href="javaScript:;" v-for="data in data.listcourse"><img :src="data.img" alt="" /><span>{{data.title}}</span></a>
        </p>
      </div>
    </div>
</template>

<script>
  import Swiper from  "swiper";
  import "../../../../node_modules/swiper/dist/css/swiper.css";
    export default {
        name: "moocTop",
      props:["data"],
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
            }
          })
        }
      },
      mounted(){
        this._initSwiper()
      }
    }
</script>

<style scoped>

</style>
