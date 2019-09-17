<template>
  <div class="case-detail">

    <!--    banner-->
    <div class="banner">
      <img src="../../assets/imgs/banner_about.png" alt="">
    </div>

    <div class="case-detail-content w1200">
      <h3>成功案例,当前案例的id是: {{ this.$route.params.id }}</h3>
      <p class="sub-title">
        <span>2019年3月10日</span>
        <span>来源：<i style="color: #0A84FF;">小忆设计</i></span>
        <span>浏览：1258</span>
        <span>版权申明：未经该公司授权禁止使用</span>
      </p>
      <div class="introduce">
        <div class="introduce-wrap flex w1200">
          <div class="synopsis">
            <h5>产品简介</h5>
            <p>产品简介的文字内容...</p>
          </div>
          <div class="service">
            <h5>产品服务</h5>
            <ul>
              <li>需求整理</li>
              <li>素材收集</li>
              <li>视觉设计</li>
              <li>LOGO设计</li>
            </ul>
          </div>
        </div>
      </div>
      <p class="case-content">
        案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片
        案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片
        案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片
        案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片
        案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片
        案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片案例的内容或者图片
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CaseDetail',
  }
</script>

<style scoped lang="scss">
  .case-detail {
    margin-top: 86px;
    .case-detail-content {
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
      .introduce {
        margin-bottom: 20px;
        .introduce-wrap {
          justify-content: space-between;
          height: 470px;
          overflow: hidden;
          .synopsis {
            flex: 1;
            background-color: #f5f5f5;
            box-sizing: border-box;
            padding: 50px 39px 20px 39px;
            h5 {
              color: #0A84FF;
              &::after {background-color: #0A84FF;}
            }
            p {
              color: #666666;
              font-size: 14px;
            }
          }
          .service {
            flex: 1;
            background-color: #0A84FF;
            box-sizing: border-box;
            padding: 50px 39px 20px 39px;
            h5 {
              color: #ffffff;
              &::after {background-color: #ffffff;}
            }
            ul {
              padding-left: 100px;
              box-sizing: border-box;
              li {
                font-size: 20px;
                color: #ffffff;
                line-height: 1.5;
                position: relative;
                &::before {
                  content: '';
                  display: block;
                  width: 8px;
                  height: 8px;
                  border-radius: 50%;
                  background-color: #ffffff;
                  position: absolute;
                  top: 50%;
                  left: -20px;
                  transform: translateY(-50%);
                }
              }
            }
          }
          .service, .synopsis {
            h5 {
              font-size: 28px;
              display: inline-block;
              position: relative;
              margin-bottom: 25px;
              &::after {
                content: '';
                display: block;
                height: 4px;
                width: 30px;
                position: absolute;
                right: -31px;
                bottom: 0;
              }
            }
          }
        }
      }
      .case-content {
        font-size: 16px;
        color: #666666;
        text-align: justify;
        line-height: 1.5;
      }
    }
  }
</style>
