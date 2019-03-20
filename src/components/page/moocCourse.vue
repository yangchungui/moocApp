<template>
  <div class="hello">
    <mooc-header></mooc-header>
    <mooc-section :data="proData"></mooc-section>
    <mooc-footer></mooc-footer>
  </div>
</template>

<script>
  import moocHeader from '../smallcomponents/commons/moocHeader'
  import moocSection from '../smallcomponents/course/moocSection'
  import moocFooter from '../smallcomponents/commons/moocFooter'
  import Api from "../../../apis/personApi"


  export default {
    name:"moocCourse",
  components: {
    moocHeader,
    moocSection,
    moocFooter
  },
    // 值肯定是定义在父组件中的，供所有子组件共享。所以要在父组件的data中定义值
    data(){
      return{
        proData:{}
      }

    },
    created(){
      this._initData()
    },
    methods:{
      _initData(){
        Api.getPersonInfo((data)=>{
          console.log(data)
          this.proData = data
        })
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
  @import "../../../static/css/course.css";
  html,body{
    height:100%;
  }
  .hello{
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
