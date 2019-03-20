<template>
  <div class="person">
    <mooctop></mooctop>
    <moocslide :data="proData" @sub="subIdx(i)"></moocslide>
    <moocfoot></moocfoot>
  </div>
</template>

<script>
  import mooctop from '../smallcomponents/person/mooctop'
  import moocslide from '../smallcomponents/person/moocslide'
  import moocfoot from '../smallcomponents/commons/moocFooter'
  import Api from "../../../apis/personApi"
    export default {
      name: "moocPerson",
      components: {
        mooctop,
        moocslide,
        moocfoot
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
        },
        subIdx(i){
          alert(i)
        }
      }
    }
</script>

<style>
  @import "../../../static/css/person.css";
  .person{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
