<template>
  <div class="hello">
    <header>
      <a href="javaScript:;"><i class="iconfont icon-shanchuguanbiquxiaowubiankuang"></i></a>
      <a href="javaScript:;">注册</a>
    </header>
    <div class="list">
        <div class="content"><img src="/static/img/log.jpg"/></div>
        <div class="inde">
        <a href="javaScript:;"><i class="iconfont icon-shouji"></i>  手机账号登录</a><!--iconfont-->
        <a href="javaScript:;"><i class="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong
"></i>  邮箱账号登录</a>
      </div>
    <div class="hr"><span><hr></span>登录方式<span><hr></span></div>

    </div>
    <footer>
      <a href="javaScript:;"><i class="iconfont icon-QQ"></i>QQ</a>
      <a href="javaScript:;"><i class="iconfont icon-weixin"></i>微信</a>
      <a href="javaScript:;"><i class="iconfont icon-weibo"></i>微博</a>
      <a href="javaScript:;"><i class="iconfont icon-eye"></i>爱课程</a>
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

  @import "../../../static/css/index.css";
  html,body{
    height: 100%;
  }
  body{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }
  .list{
    flex: 1;
    overflow-y: auto;
  }
</style>
