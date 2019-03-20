<template>
  <div  v-if="data">
    <ol class="lis" >
      <li><img :src="data.pic" alt="" /></li>
      <li>
        <h2>{{data.title}}</h2>
        <h4>{{data.message}}</h4>
        <h4>{{data.authors}}</h4>
        <h4>
          <a href="#"><span><img src="../../../../static/img/personal-log1.jpg"/></span><span>{{data.number}}</span> </a>
          <a href="#"><span>{{data.prices}}</span> </a>
        </h4>
      </li>
    </ol>
  </div>
</template>

<script>
    export default {
        name: "moocslide-fistlis-ol",
        props:["data"],
        methods:{

        }
    }
</script>

<style scoped>

</style>
