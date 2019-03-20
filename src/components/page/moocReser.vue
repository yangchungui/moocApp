<template>
  <div class="rese">
    <reserhead></reserhead>
    <reserslide></reserslide>
    <reserfoot></reserfoot>
    <router-link to="/moocSubmit"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import reserhead from '../smallcomponents/reser/reser-head'
  import reserslide from '../smallcomponents/reser/reser-slide'
  import reserfoot from '../smallcomponents/reser/reser-foot'
    export default {
        name: "moocReser",
        components:{
          reserhead,
          reserslide,
          reserfoot
        },
      methods:{

      }
    }
</script>

<style>
  @import "../../../static/css/reser.css";
  .rese{
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
