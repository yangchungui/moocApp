<template>
  <div class="hello">
      <header>
        <a href="javaScript:;"><img src="/static/img/p-head.jpg" alt="" />  你的名字</a>
        <a href="javaScript:;"><i class="iconfont icon-fangxiangjiantou"></i></a>
      </header>
      <div class="content">
        <a href="javaScript:;"><span>0</span><span>讨论</span></a>
        <a href="javaScript:;"><span>0</span><span>关注</span></a>
        <a href="javaScript:;"><span>0</span><span>证书</span></a>
      </div>
      <section>
        <a href="javaScript:;">消息中心 <i class="iconfont icon-fangxiangjiantou"></i></a>
        <a href="javaScript:;">我的优惠价 <i class="iconfont icon-fangxiangjiantou"></i></a>
        <a href="javaScript:;">我的账户余额 <i class="iconfont icon-fangxiangjiantou"></i></a>
        <a href="javaScript:;">我的团购 <i class="iconfont icon-fangxiangjiantou"></i></a>
        <a href="javaScript:;">设置 <i class="iconfont icon-fangxiangjiantou"></i></a>
        <a href="javaScript:;">分享App <i class="iconfont icon-fangxiangjiantou"></i></a>
        <a href="javaScript:;">去评分 <i class="iconfont icon-fangxiangjiantou"></i></a>

      </section>
    <footer>
      <a href="javaScript:;"><img src="/static/img/img-mooc-text/font6.jpg"/>首页</a>
      <a href="javaScript:;"><img src="/static/img/img-mooc-text/font2.jpg"/>全部课程</a>
      <a href="javaScript:;"><img src="/static/img/img-mooc-text/font3.jpg"/>我的学习</a>
      <a href="javaScript:;"><img src="/static/img/img-mooc-text/font5.jpg"/>账号</a>
    </footer>
  </div>
</template>

<script>
  export default {
   /* name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to!'
      }
    }*/
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

  <style>
  @import "../../../static/css/mine.css";
  html,body{
    height:100%;
  }
  .hello{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  body{
    display: flex;
    height:100%;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
