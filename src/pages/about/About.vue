<template>
  <div class="about">

    <!--    banner-->
    <div class="banner">
      <img src="../../assets/imgs/banner_about.png" alt="">
    </div>

    <div class="des">
      <div class="des-inner w1440">
        <span>One-stop design and development service platform</span>
        <span>一站式设计开发服务平台</span>
      </div>
    </div>

    <div class="introduce">
      <div class="introduce-inner w1440">
        <div class="introduce-inner-item">
          专注于产品设计、开发服务 <br /> 解决方案
        </div>
        <div class="introduce-inner-item">
          <span>About us</span>
          <span>从这里开始，让 您的产品赢在起跑线</span>
        </div>
        <div class="introduce-inner-item">
          <el-carousel trigger="click" height="316px" indicator-position="outside" :autoplay=false arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
              <img src="../../assets/imgs/introduce_1.png" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="introduce-inner-item">
          <p>四川忆尔科技有限公司是一个以创意为核心的新锐设计团队。我们致力于品牌策略定位与设计， 以专业的能力洞悉市场变化，以设计为工具，通过品牌视觉策略与美学设计逻辑，
            为各类型企业，创业者提供品牌建设、品牌升级、品牌推广等前瞻性商业设计服务。</p>
          <p>
            致力于互联网品牌建设与网络营销，专业领域包括网站建设、电子商务、移动互联网营销、系统平台开发，等服务范围，并且涵盖基础的域名服务、主机服务；企业邮箱、网络营销等应用服务；以先进完善的建站体系，及不断开拓创新的精神理念，以及高端的企业电子商务解决方案和顾问咨询服务，帮助企业客户真正实现电子商务应用，提高企业的竞争能力。</p>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "About"
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/pulic";

  .about {
    .des {
      width: 100%;
      padding: 20px 0 33px 0;
      background-color: $color_0A84FF;

      .des-inner {
        span {
          color: $color_ffffff;
          line-height: 1.5;
          display: block;
        }

        span:nth-child(1) {
          font-size: $font_size_28;
        }

        span:nth-child(2) {
          font-size: $font_size_16;
        }
      }
    }

    .introduce {
      padding-top: 75px;
      padding-bottom: 32px;
      .introduce-inner {
        display: grid;
        grid-template-columns: 486px auto;
        grid-template-rows: auto;
        grid-column-gap: 77px;
        grid-row-gap: 39px;

        .introduce-inner-item {
          &:nth-child(1) {
            font-size: $font_size_22;
            color: $color_333333;
            text-align: left;
            line-height: 1.5;
          }

          &:nth-child(2) {
            text-align: right;

            span {
              color: $color_999999;
              line-height: 1.5;
              display: block;

              &:nth-child(1) {
                font-size: $font_size_40;
                letter-spacing: 4.5px;
              }

              &:nth-child(2) {
                font-size: $font_size_12;
              }
            }
          }

          &:nth-child(3) {

          }

          &:nth-child(4) {
            p {
              color: $color_333333;
              font-size: $font_size_16;
              line-height: 2;
              text-indent: 2em;
              text-align: justify;
            }
          }
        }
      }
    }
  }
</style>
