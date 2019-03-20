<template>
  <section v-if="data">
    <div v-for="data in data.course">
      <nav :data="data">
        <ul v-for="data in data.news">
          <li>
            <a href="javaScript:;">{{data.title}}</a>
            <a href="javaScript:;">{{data.message}}</a>
          </li>
        </ul>
      </nav>
      <ul class="uls" v-for="data in data.content">
        <li>
          <a href="javaScript:;"><img :src="data.pic"/>  {{data.conclass}}</a>
          <a href="javaScript:;"><i class="iconfont icon-fangxiangjiantou"></i></a>
        </li>
        <li>
          <ul class="lis">
            <li  v-for="(data,i) in data.classlist">
              <a href="javaScript:;">{{data}}</a>
              <!--<a href="javaScript:;">{{data}}</a>-->
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
    export default {
        name: "section",
        props:["data"]

    }
</script>

<style scoped>

</style>
