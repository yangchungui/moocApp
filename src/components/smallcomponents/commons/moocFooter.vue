<template>
  <footer>
    <a href="javaScript:;"><img src="/static/img/img-course/font1.jpg"/>首页</a>
    <a href="javaScript:;"><img src="/static/img/img-course/font2.jpg"/>全部课程</a>
    <a href="javaScript:;"><img src="/static/img/img-course/font3.jpg"/>我的学习</a>
    <a href="javaScript:;"><img src="/static/img/img-course/font4.jpg"/>账号</a>
  </footer>
</template>

<script>
    export default {

    }
</script>

<style scoped>
  /*footer*/
  footer{
    width: 100%;
    height: .61rem;
    display: flex;
    justify-content: space-around;
    background: white;
  }
  footer a{
    width: .61rem;
    height: .61rem;
    font-size: .09rem;
    color: #999999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  footer a img{
    width: .28rem;
    height: .28rem;
  }

</style>
