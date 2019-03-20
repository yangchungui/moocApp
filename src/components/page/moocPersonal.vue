<template>
    <div class="person">
      <mooctop></mooctop>
      <moocslide></moocslide>
      <moocfoot></moocfoot>
    </div>
</template>

<script>
  import mooctop from '../smallcomponents/personal/mooctop'
  import moocslide from  '../smallcomponents/personal/moocslide'
  import moocfoot from '../smallcomponents/commons/moocFooter'
    export default {
        name: "moocPersonal",
      components:{
        mooctop,
        moocslide,
        moocfoot
      }
    }
</script>

<style scoped>
    .person{
      height:100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
</style>
