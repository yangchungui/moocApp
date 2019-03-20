<template>
    <div>
      <mooc-header></mooc-header>
      <mooc-nav></mooc-nav>
    </div>
</template>

<script>
  import moocHeader from "../../smallcomponents/commons/moocHeader"
  import moocNav from '../../smallcomponents/text/moocNav';
    export default {
        name: "moocheadnav",
      components:{moocHeader, moocNav}
    }
</script>

<style scoped>

</style>
