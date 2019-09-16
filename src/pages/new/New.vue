<template>
  <div class="new">

    <!--    banner-->
    <div class="banner">
      <img src="../../assets/imgs/banner_about.png" alt="">
    </div>

    <!--    tab标签-->
    <div class="new-tab">
      <div class="new-wrap w1200">
        <div class="new-tab-top flex">
          <ul class="flex">
            <router-link tag="li" :to="{name: 'signing'}">最新签约</router-link>
            <router-link tag="li" :to="{name: 'company'}">公司新闻</router-link>
            <router-link tag="li" :to="{name: 'design'}">设计知识</router-link>
            <router-link tag="li" :to="{name: 'product'}">产品优化</router-link>
            <router-link tag="li" :to="{name: 'industry'}">行业资讯</router-link>
            <router-link tag="li" :to="{name: 'development'}">开发学堂</router-link>
          </ul>
          <div class="search">
            <input type="text" placeholder="输入搜索关键字">
            <img src="../../assets/imgs/search.png" alt="">
          </div>
        </div>
        <!--    路由窗口-->
        <transition>
          <keep-alive>
            <router-view/>
          </keep-alive>
        </transition>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "New",
    data() {
      return {
        activeName: 'second'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/pulic";

  .new {
    margin-top: 86px;

    .new-tab {

      .new-wrap {

        .new-tab-top {
          justify-content: space-between;
          align-items: center;
          padding: 52px 0;

          ul {
            font-size: 18px;
            color: #333333;

            li {
              padding: 8px 14px;
              cursor: pointer;
            }

            li.linkActiveClass {
              background-color: #0A84FF;
              border-radius: 17px;
              color: #ffffff;
            }
          }

          .search {
            width: 300px;
            height: 38px;
            border-radius: 8px;
            border: 1px solid $color_0A84FF;
            background-color: $color_0A84FF;
            box-sizing: border-box;
            overflow: hidden;
            position: relative;

            input {
              width: 246px;
              height: 100%;
              border: 1px solid $color_0A84FF;
              border-radius: 8px;
              outline: none;
              box-sizing: border-box;
              padding-left: 13px;
              padding-right: 13px;
              font-size: 14px;
              color: #999999;
            }

            img {
              position: absolute;
              top: 50%;
              right: 13px;
              transform: translateY(-50%);
            }
          }
        }
      }
    }
  }

</style>
