<template>
  <div v-if="data">
    <ul class="list" v-for="(data,index) in data" @click="sub(index)">
      <lis :data="data.attrs" ></lis>
      <lismall :data="data.list"></lismall>
    </ul>
  </div>
</template>

<script>
  import '../../../../static/js/vue/dist/vue'
  import lis from './moocslide-fistlis'
  import lismall from './moocslide-li'
    export default {
        name: "moocslide-ul",
        components:{lis,lismall},
        props:["data","index"],
      methods:{
        sub(i){
          this.$emit('sub',i);
          alert(i);
        }
      }
    }
</script>
<style scoped>

</style>
