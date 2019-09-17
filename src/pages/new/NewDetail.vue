<template>
  <div class="new-detail">

    <!--    banner-->
    <div class="banner">
      <img src="../../assets/imgs/banner_about.png" alt="">
    </div>

    <div class="new-detail-content w1200">
      <h3>新闻标题,当前新闻的id是: {{ this.$route.params.id }}</h3>
      <p class="sub-title">
        <span>2019年3月10日</span>
        <span>来源：<i style="color: #0A84FF;">小忆设计</i></span>
        <span>浏览：1258</span>
        <span>版权申明：未经该公司授权禁止使用</span>
      </p>
      <p class="new-content">
        新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
        新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
        新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
        新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewDetail',
  }
</script>

<style scoped lang="scss">
  .new-detail {
    margin-top: 86px;
    .new-detail-content {
      h3 {
        text-align: center;
        font-size: 24px;
        font-weight: 400;
        color: #000000;
        line-height: 66px;
      }
      .sub-title {
        font-size: 14px;
        color: #666666;
        text-align: center;
        margin-bottom: 30px;
        span {
          margin-right: 30px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .new-content {
        font-size: 16px;
        color: #666666;
        text-align: justify;
        line-height: 1.5;
      }
    }
  }
</style>
