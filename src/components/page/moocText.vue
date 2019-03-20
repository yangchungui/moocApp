<template>
    <div class="he">
        <moocheadnav></moocheadnav>
        <mooc-section :data="proData"></mooc-section>
        <mooc-footer></mooc-footer>
    </div>
</template>

<script>
  import moocheadnav from '../smallcomponents/text/moocheadnav'
  import moocSection from '../smallcomponents/text/moocSection'
  import moocFooter from '../smallcomponents/commons/moocFooter';
  import Swiper from  "swiper";
  import "../../../node_modules/swiper/dist/css/swiper.css";
  import Api from '../../../apis/personApi';

    export default {
        name: "moocText",
        components: { moocheadnav,moocSection,moocFooter},
        data(){
          return{
            proData:{}
          }
        },
        created(){
          this._initData()
        },
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
          },
          _initData(){
            Api.getPersonInfo((data)=>{
              console.log(data)
              this.proData = data
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
  @import "../../../static/css/mooctext.css";
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
