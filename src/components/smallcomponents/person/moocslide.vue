<template>
    <section v-if="data">
      <div v-for="data in data.shops">
        <her :data="data"></her>
        <uler :data="data.products" ></uler>
      </div>


    </section>
</template>

<script>

  import her from './moocslide-h'
  import uler from './moocslide-ul'
    export default {
        name: "moocslide",
        props:["data"],//接收父组件的数据
        components:{
          her,uler
        },

        methods: {

        },
        mounted(){
            // console.log(data)
        },
      data(){
        return { }
      }

    }
</script>

<style>

</style>
