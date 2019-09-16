<template>
  <nav class="navigation">
    <div class="navigation-inner flex w1200">
      <h1>LOGO</h1>
      <ul class="flex">
        <li>
          <router-link :to="{name: 'home'}">首页</router-link>
        </li>
<!--        <li>-->
<!--          <router-link :to="{name: 'service'}">产品服务</router-link>-->
<!--        </li>-->
        <li>
          <router-link :to="{name: 'case'}">成功案例</router-link>
        </li>
        <li>
          <router-link :to="{name: 'new'}">新闻动态</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">关于我们</router-link>
        </li>
<!--        <li>-->
<!--          <router-link :to="{name: 'join'}">招贤纳士</router-link>-->
<!--        </li>-->
        <li>
          <router-link :to="{name: 'contact'}">联系我们</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/pulic";

  .navigation {
    width: 100%;
    height: 86px;
    overflow: hidden;
    background-color: $color_ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;

    .navigation-inner {
      height: 100%;
      justify-content: space-between;
      align-items: center;

      h1 {

      }

      ul {
        .linkActiveClass {
          color: $color_0A84FF;
        }

        li {
          margin-right: 20px;

          &:last-child {
            margin-right: 0;
          }

          a {
            font-size: $font_size_16;
            color: $color_333333;

            &:hover {
              color: $color_0A84FF;
            }

            &.linkActiveClass {
              color: $color_0A84FF;
            }
          }
        }
      }
    }
  }
</style>
