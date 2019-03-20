<template>
  <div class="inp">
    <header>
      <a href="javaScript:;"><i class="iconfont icon-jiantou-copy1"></i>  手机号注册</a>
    </header>
    <section>
      <p>
        <select name="">
          <option value="" >+86</option>
        </select>
        <input type="text" placeholder="请输入手机号"/>
      </p>
      <p>验证码   <input type="text" placeholder="验证码"/><input type="button" name="btn" id="btn" value="|   获取验证码" /></p>
      <p>密码   <input type="text" placeholder="请设置6-16位密码"/></p>
    </section>
    <footer>
      <a href="javaScript:;"><span>注册并登陆</span></a>
    </footer>
    <h4>
      <p>用户注册即代表同意<span>《服务条款》</span>和<span>《网易隐私政策》</span></p>
    </h4>
  </div>
</template>

<script>
    export default {
        name: "input"
    }
</script>

<style scoped>
  @import "../../../static/css/input.css";
  .inp{
    height: 100%;
  }
</style>
