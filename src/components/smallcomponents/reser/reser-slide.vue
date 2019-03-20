<template>
    <div class="slide">
      <resernav></resernav>
      <resersect></resersect>
    </div>
</template>

<script>
  import resernav from './reser-nav'
  import resersect from  './reser-sect'
    export default {
        name: "reser-head",
        components:{
          resernav,
          resersect
        }
    }
</script>

<style scoped>

</style>
