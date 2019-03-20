<template>
  <div class="sect">
    <section>
      <h3>全部专栏</h3>
      <ul class="list">
        <li class="fistlis">
          <ol class="lis">
            <li><img src="../../../../static/img/personal1.jpg" alt="" /></li>
            <li>
              <h2>有用又有趣的有用又有趣的</h2>
              <h4>帮你构建底层思维模型帮你构建底层思维模型</h4>
              <h4>文建东</h4>
              <h4>
                <a href="#"><span><img src="../../../../static/img/personal-log1.jpg"/></span><span>3386</span> </a>
                <a href="#"><span>￥</span><span>98</span> </a>
              </h4>
            </li>
          </ol>
        </li>
        <li>
          <a href="#"><span>音频</span></a>
          <a href="#">
            <p>为什么钻石远没有水有用，为什么钻石远没有水有用</p>
            <img src="../../../../static/img/movie.jpg" alt="" />
          </a>
        </li>
        <li>
          <a href="#"><span>音频</span></a>
          <a href="#">
            <p>为什么钻石远没有水有用，为什么钻石远没有水有用</p>
            <img src="../../../../static/img/movie.jpg" alt="" />
          </a>
        </li>
        <li>
          <a href="#"><span>音频</span></a>
          <a href="#">
            <p>为什么钻石远没有水有用，为什么钻石远没有水有用</p>
            <img src="../../../../static/img/movie.jpg" alt="" />
          </a>
        </li>
      </ul>
      <!--<ul class="list">-->
        <!--<li class="fistlis">-->
          <!--<ol class="lis">-->
            <!--<li><img src="../../../../static/img/personal2.jpg" alt="" /></li>-->
            <!--<li>-->
              <!--<h2>20堂高能搜索搜索</h2>-->
              <!--<h4>助你提升效率，为人生为人生</h4>-->
              <!--<h4>周建方</h4>-->
              <!--<h4>-->
                <!--<a href="#"><span><img src="../../../../static/img/personal-log1.jpg"/></span><span>4479</span> </a>-->
                <!--<a href="#"><span>￥</span><span>39</span> </a>-->
              <!--</h4>-->
            <!--</li>-->
          <!--</ol>-->
        <!--</li>-->
        <!--<li>-->
          <!--<a href="#"><span>音频</span></a>-->
          <!--<a href="#">-->
            <!--<p>如何免费获取实用数据？</p>-->
            <!--<img src="../../../../static/img/movie.jpg" alt="" />-->
          <!--</a>-->
        <!--</li>-->
      <!--</ul>-->
      <!--<ul class="list">-->
        <!--<li class="fistlis">-->
          <!--<ol class="lis">-->
            <!--<li><img src="../../../../static/img/personal2.jpg" alt="" /></li>-->
            <!--<li>-->
              <!--<h2>20堂高能搜索搜索</h2>-->
              <!--<h4>助你提升效率，为人生为人生</h4>-->
              <!--<h4>周建方</h4>-->
              <!--<h4>-->
                <!--<a href="#"><span><img src="../../../../static/img/personal-log1.jpg"/></span><span>4479</span> </a>-->
                <!--<a href="#"><span>￥</span><span>39</span> </a>-->
              <!--</h4>-->
            <!--</li>-->
          <!--</ol>-->
        <!--</li>-->
        <!--<li>-->
          <!--<a href="#"><span>音频</span></a>-->
          <!--<a href="#">-->
            <!--<p>如何免费获取实用数据？</p>-->
            <!--<img src="../../../../static/img/movie.jpg" alt="" />-->
          <!--</a>-->
        <!--</li>-->
      <!--</ul>-->

    </section>
  </div>

</template>

<script>
    export default {
        name: "moocslide"
    }
</script>

<style scoped>
  .sect{
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
  section{
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    text-indent: .18rem;
    background: #FFFFFF;
  }
  section h3{
    font-size: .26rem;
    color: #333333;
    margin-top: .31rem;
    margin-bottom: 11px;
  }
  section .list{
    width: 100%;
    padding-top: .15rem;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #f3f3f3;
  }

  section .list li{
    display: flex;
    align-items: center;
    margin-bottom: 11px;
  }

  section .list li .lis{
    padding-left: .2rem;
    display: flex;
    justify-content:flex-start;
  }
  section .list li .lis li{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  section .list li .lis li img{
    display:inline-block;
    width: 1.52rem;
    height: 1.05rem;
  }
  section .list li .lis li h2{
    width: 1.7rem;
    font-size: .19rem;
    color: #282828;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  section .list li .lis li h4{
    padding-top: .08rem;
    width: 1.7rem;
    font-size: .14rem;
    color: #878787;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  section .list li .lis li h4:last-child{
    display: flex;
    justify-content: space-between;
    padding-right: .1rem;
  }
  section .list li .lis li h4:last-child a span img{
    display: inline-block;
    width: .12rem;
    height: .12rem;
  }
  section .list li .lis li h4:last-child a:last-child{
    font-size: .12rem;
    color: #fb7135;
  }
  section .list li .lis li h4:last-child a span{
    font-size: .12rem;
    color: #898989;
  }
  section .list li a{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  section .list li a span{
    line-height: .18rem;
    text-align: center;
    font-size: .12rem;
    color: #628ef4;
  }
  section .list li a p{
    font-size: .19rem;
    color: #515151;
    width: 2.53rem;
    margin-right: .3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  section .list li a img{
    width: .2rem;
    height: .2rem;
    display: inline-block;
  }
</style>
