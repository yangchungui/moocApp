<template>

    <li class="fistlis" >
      <ols :data="data" @sub="sub"></ols>
    </li>

</template>

<script>
    import ols from './moocslide-fistlis-ol'
    export default {
        name: "moocslide-fistlis",
       props:["data","index"],
      components:{ols},
      methods:{
        sub(i){
          // this.id=id;
          this.$emit('sub',i);

        }
      }
    }
</script>

<style scoped>
  @import "../../../../static/css/person.css";
</style>
