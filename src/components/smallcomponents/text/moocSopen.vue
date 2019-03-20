<template>
  <div class="open-pro" v-if="data">
    <h1>考研公开课</h1>
    <ul v-for="data in data.openpro">
      <li><img :src="data.pic"/></li>
      <li>
        <h5>{{data.toptitle}}</h5>
        <h5>{{data.author}}</h5>
        <h5><span>{{data.autoplay}}</span></h5>
        <h5><a href="javaScript:;">{{data.price}}</a><a href="javaScript:;">{{data.number}}</a></h5>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "moocSopen",
      props:["data"]
    }
</script>

<style scoped>

</style>
