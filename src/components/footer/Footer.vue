<template>
  <footer class="footer">
    <el-row>
      <el-col :span="24">
        <div class="footer-content w1200">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="footer-content-item">
                <h3>产品与服务</h3>
                <p>平面设计</p>
                <p>UI设计</p>
                <p>程序开发</p>
                <p>影视制作</p>
                <p>广告制作</p>
                <p class="small">服务条款</p>
                <p class="small">服务协议</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="footer-content-item">
                <h3>联系我们</h3>
                <div class="block">
                  <img src="../../assets/imgs/icon_qq.png" alt="">
                  <span>客服QQ</span>
                  <p>544256493</p>
                </div>
                <div class="block">
                  <img src="../../assets/imgs/icon_email.png" alt="">
                  <span>电子邮箱地址</span>
                  <p>544256493@qq.com</p>
                </div>
                <div class="block">
                  <img src="../../assets/imgs/icon_address.png" alt="">
                  <span>地址</span>
                  <p>成都市郫都区蜀都万达14栋25楼</p>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="footer-content-item">
                <h3>微信公众号</h3>
                <img class="qr-code" src="../../assets/imgs/qrcode.png" alt="">
              </div>
            </el-col>
            <el-col :span="6">
              <div class="footer-content-item">
                <h3>服务热线</h3>
                <p class="hot-line">18113127675</p>
                <p class="server-time">周一至周六08:30-19:00</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" style="background-color: #34333D">
        <div class="footer-copy-right w1200">
          <p>忆尔当竭尽全力为您服务，若服务中有任何不满均可联系忆尔!</p>
          <p>Copyright © 2002-2015 版权所有 备案号： 蜀ICP备17036143号-2 四川忆尔科技有限公司</p>
        </div>
      </el-col>
    </el-row>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped lang="scss">
  .footer {
    background-color: #3E3D49;
    padding-top: 50px;

    .footer-content {
      .footer-content-item {
        color: #ffffff;

        h3 {
          font-size: 20px;
          padding: 15px 0;
          margin-bottom: 20px;
          position: relative;

          &::after {
            content: '';
            width: 42px;
            height: 2px;
            display: block;
            background-color: #0AABFF;
            position: absolute;
            bottom: 0;
            left: 0;
          }
        }

        p {
          font-size: 14px;
          padding: 10px 0;
          cursor: pointer;
        }

        p.small {
          font-size: 14px;
          color: #7D7B92;
        }

        .block {
          background-color: #474652;
          width: 250px;
          height: 80px;
          padding: 10px;
          box-sizing: border-box;
          margin-bottom: 10px;

          img {
            width: 24px;
            height: 24px;
            display: inline-block;
            vertical-align: middle;
          }

          span {
            color: #75728C;
            font-size: 16px;
          }

          p {
            margin-left: 30px;
          }
        }

        .qr-code {
          width: 150px;
          height: 150px;
          background-color: red;
          display: block;
        }

        .hot-line {
          color: #0AABFF;
          font-size: 34px;
          font-weight: bold;
        }

        .server-time {
          color: #999999;
        }
      }

    }

    .footer-copy-right {
      p {
        text-align: center;
        color: #6A696E;
        font-size: 12px;
        padding: 10px 0;
      }
    }
  }
</style>
