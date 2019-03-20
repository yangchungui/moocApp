<template>
  <div v-if="data">
    <li v-for="data in data">
      <a href="#"><span>音频</span></a>
      <a href="#">
        <p>{{data.title}}</p>
        <img :src="data.log" alt="" />
      </a>
    </li>
  </div>

</template>

<script>
    export default {
      name: "moocslide-li",
      props:["data"],
      methods: {


      },
      created(){

      }
    }
</script>

<style scoped>

</style>
