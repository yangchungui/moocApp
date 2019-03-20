<template>
  <footer>
    <a href="javaScript:;"><span>实际金额：￥</span><span>19.98</span></a>
    <router-link to="/moocBuyyes"><a href="javaScript:;" class="tobuy">提交订单</a></router-link>

    <router-view></router-view>
  </footer>
</template>

<script>
    export default {
        name: "moocfoot"
    }
</script>

<style scoped>
  .tobuy{
    background: #FF7A3F;
  }

</style>
