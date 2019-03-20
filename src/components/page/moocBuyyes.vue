<template>
  <div class="buyyes">
    <moochead></moochead>
    <moocbod></moocbod>
    <moocfoot></moocfoot>

  </div>
</template>

<script>
  import moochead from '../smallcomponents/buyyes/moochead'
  import moocbod from '../smallcomponents/buyyes/moocbod'
  import moocfoot from '../smallcomponents/buyyes/moocfoot'
    export default {
        name: "moocBuyyes",
      components:{
        moochead,
        moocbod,
        moocfoot
      }
    }
</script>

<style>
  @import "../../../static/css/buyyes.css";
 .buyyes{
   height: 100%;
   display: flex;
   flex: 1;
   flex-direction: column;
   justify-content: space-between;
 }
</style>
