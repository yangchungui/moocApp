<template>
    <div>
      <moocheader></moocheader>
      <moocnav></moocnav>
    </div>
</template>

<script>
  import moocheader from '../../smallcomponents/commons/moocHeader'
  import moocnav from '../../smallcomponents/commons/moocNav'
    export default {
        name: "mooctop",
      components:{
        moocheader,
        moocnav
      }
    }
</script>

<style scoped>

</style>
