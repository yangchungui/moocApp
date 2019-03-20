<template>
  <div class="he">
    <mooc-header></mooc-header>
    <mooc-nav></mooc-nav>
    <found-section></found-section>
    <mooc-footer></mooc-footer>
  </div>
</template>

<script>
  import moocHeader from "../smallcomponents/commons/moocHeader"
  import moocNav from '../smallcomponents/text/moocNav';
  import foundSection from '../smallcomponents/found/foundSection'
  import moocFooter from '../smallcomponents/commons/moocFooter';
  import Swiper from  "swiper";
  import "../../../node_modules/swiper/dist/css/swiper.css";

  // import moocSection from '../commons/moocSection';
  export default {
    name: "moocFound",
    components: { moocHeader, moocNav,foundSection,moocFooter},
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
    },
    mounted(){
      this._initSwiper()
    },
    updated(){

    }
  }
</script>

<style>
  @import "../../../static/css/found.css";
  html,body{
    height:100%;
  }
  .he{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  body{
    display: flex;
    height:100%;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
