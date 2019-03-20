<template>
  <div class="slides">
    <found-slide></found-slide>
    <found-ul></found-ul>
    <found-ol></found-ol>
  </div>

</template>

<script>
  import foundSlide from './foundSlide';
  import foundUl from './foundUl';
  import foundOl from './foundOl'
    export default {
        name: "foundSection",
        components: {
          foundSlide,
          foundUl,
          foundOl
        }
    }
</script>

<style scoped>

</style>
