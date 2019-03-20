<template>
  <div class="new-play" v-if="data">
    <h1>最近直播</h1>
    <div class="playul">
      <ul v-for="data in data.newplay">
        <li>
          <h5>{{data.title}}</h5>
          <h5>{{data.author}}</h5>
          <h5>{{data.time}}</h5>
        </li>
        <li><img :src="data.pic"/></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "moocSplay",
      props:["data"]
    }
</script>

<style scoped>
  .playul{
    overflow-x: auto;display: flex;
  }
</style>
