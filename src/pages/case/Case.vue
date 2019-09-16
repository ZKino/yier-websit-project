<template>
  <div class="case">

    <!--    banner-->
    <div class="banner">
      <img src="../../assets/imgs/banner_about.png" alt="">
    </div>

    <div class="case-top">
      <div class="case-top-wrap flex w1200">
        <h4>
          <span>成功案例</span>
          <span>successful case</span>
        </h4>
        <ul class="flex">
          <router-link tag="li" :to="{name: 'design'}">平面设计</router-link>
          <router-link tag="li" :to="{name: 'ui'}">UI设计</router-link>
          <router-link tag="li" :to="{name: 'program'}">程序开发</router-link>
          <router-link tag="li" :to="{name: 'tv'}">影视制作</router-link>
          <router-link tag="li" :to="{name: 'ad'}">广告制作</router-link>
        </ul>
      </div>
    </div>

    <!--    路由窗口-->
    <transition>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "Case",
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/pulic";
  .case {
    margin-top: 86px;
    .case-top {
      padding-top: 57px;
      padding-bottom: 24px;
      margin-bottom: 37px;
      background-color: #E6E1E1;
      .case-top-wrap {
        justify-content: space-between;
        align-items: center;
        h4 {
          span {
            display: block;
          }
          span:nth-child(1) {
            font-size:26px;
            color:#333333;
            line-height: 1.5;
          }
          span:nth-child(2) {
            font-size:18px;
            color:#666666;
          }
        }
        ul {
          li {
            padding-right: 20px;
            font-size: 18px;
            color: #333333;
          }
          li:last-child {
            padding-right: 0;
          }
          li.linkActiveClass {
            color: #0A84FF;
          }
        }
      }
    }
  }

</style>
