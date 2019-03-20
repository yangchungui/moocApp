<template>
  <div v-if="data" class="move">
    <div class="slides" v-for="data in data.text">
      <mooc-top :data="data"></mooc-top>
      <mooc-splay :data="data"></mooc-splay>
      <mooc-sopen :data="data"></mooc-sopen>
      <mooc-about></mooc-about>
    </div>
  </div>
</template>

<script>
    import moocTop from "./moocTop";
    import moocSplay from "./moocSplay";
    import moocSopen from "./moocSopen";
    import moocAbout from "./moocAbout";
    export default {
        name: "moocSection",
        components: {moocTop,moocSopen, moocSplay,moocAbout},
        props:["data"]
    }
</script>

<style>
    .slides{
      flex: 1;
      overflow-x: hidden;
      overflow-y: auto;
    }
  .move{
    flex: 1;
    overflow-y: auto;
  }
</style>
