<template>
  <footer>
    <ul class="foot">
      <li><img src="../../../../static/img/movie.jpg" alt="" /><span>免费体验</span></li>
      <router-link to="/moocSubmit"><li><a href="#">订阅：￥<span> 19.98</span></a></li></router-link>
    </ul>
    <router-view></router-view>
  </footer>


</template>

<script>
    export default {
        name: "reser-head"
    }
</script>

<style scoped>

</style>
