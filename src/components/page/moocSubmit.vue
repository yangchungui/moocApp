<template>
  <div class="font">
    <moochead></moochead>
    <moocsect></moocsect>
    <moocfoot></moocfoot>
    <router-link to="/moocBuyyes"></router-link>
    <router-view></router-view>
  </div>

</template>

<script>
  import moochead from '../smallcomponents/submit/moochead'
  import moocsect from '../smallcomponents/submit/moocsect'
  import moocfoot from '../smallcomponents/submit/moocfoot'
  export default {
    name: "moocSubmit",
    components: { moochead,moocsect,moocfoot}
    }
</script>

<style>
  @import "../../../static/css/submit.css";
  html,body{
    height:100%;
  }
  body{
    display: flex;
    height:100%;
    flex-direction: column;
    justify-content: space-between;
  }
  .font{
    display: flex;
    height:100%;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
