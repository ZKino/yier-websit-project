<template>
  <div class="contact">

    <!--    banner-->
    <div class="banner">
      <img src="../../assets/imgs/banner_contact.png" alt="">
    </div>

    <!--    表单区域-->
    <div class="contact-form">
      <div class="contact-form-wrap flex w1440">
        <div class="bg" :style="backgroundImage">
          <div class="text">
            <p><img src="../../assets/imgs/contact_img.png" alt=""></p>
            <p>CONTACT US</p>
            <p>选择忆尔科技</p>
            <p>为你提升产品系统全方位服务</p>
            <p>咨询热线</p>
            <p>181-1312-7675</p>
          </div>
        </div>
        <div class="form">
          <p>合作意向表</p>
          <p class="input-item">
            <img src="../../assets/imgs/name.png" alt="">
            <input type="text" placeholder="姓名"></p>
          <p class="input-item">
            <img src="../../assets/imgs/phone.png" alt="">
            <input type="text" placeholder="电话">
          </p>
          <p class="input-item">
            <img src="../../assets/imgs/product_pype.png" alt="">
            <input type="text" placeholder="请选择产品服务类型">
          </p>
          <p class="textarea-item">
            <img src="../../assets/imgs/messages.png" alt="">
            <textarea name="" id="" cols="30" rows="10" placeholder="留言内容、需求描述"></textarea>
          </p>
          <p class="btn">
            <button>提交需求</button>
          </p>
        </div>
        <div class="contact-type flex">
          <div class="qrcode">
            <img src="../../assets/imgs/qrcode.png" alt="">
            <p>扫一扫关注忆尔</p>
          </div>
          <div class="more">
            <img src="../../assets/imgs/biankuang.png" alt="">
            <p>了解更多</p>
            <p>know more about</p>
          </div>
        </div>
      </div>
    </div>

    <!--    地图区域-->
    <div class="app-map">
      <baidu-map
        class="map w1200"
        ak="5L0uXyZxe5ABCoI4IwZRrXXjf1Y1BDOI"
        :center="center"
        :zoom="zoom"
        @ready="handler"
      >
        <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
        <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-navigation>
        <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
        <bm-copyright
          anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
          :copyright="[{id: 1, content: 'Copyright Message', bounds: {ne: {lng: 104.101207, lat: 30.655604}, sw:{lng: 0, lat: 0}}}, {id: 2, content: '<a>四川软赢金桥网络科技有限公司</a>'}]">
        </bm-copyright>
        <bm-marker :position="{lng: center.lng, lat: center.lat}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
          <bm-label
            content="地址：成都市武侯区天府二街<br/>138号（蜀都中心二期）"
            :labelStyle="{color: '#FFFFFF', fontSize : '14px', backgroundColor: '#0878F6', border: 'none', borderRadius: '10px', padding: '20px 10px', opacity: '0.8'}"
            :offset="{width: -85, height: -100}"/>
        </bm-marker>
      </baidu-map>
    </div>

    <!--    地图下面的联系信息区域-->
    <div class="contact-info">

    </div>

  </div>
</template>

<script>
  import {BaiduMap, BmScale, BmMarker, BmLabel, BmNavigation, BmMapType, BmCopyright} from 'vue-baidu-map'

  export default {
    name: "Contact",
    components: {
      BaiduMap,
      BmScale,
      BmMarker,
      BmLabel,
      BmNavigation,
      BmMapType,
      BmCopyright
    },
    data() {
      return {
        formData: {
          bg_img: require('../../assets/imgs/contact_bg.png'),
          qrcode: require('../../assets/imgs/qrcode.png')
        },
        center: {lng: 104.101207, lat: 30.655604},
        zoom: 15
      }
    },
    methods: {
      handler({BMap, map}) {
        this.center.lng = 104.0721871656
        this.center.lat = 30.5578505517
        this.zoom = 15
      }
    },
    computed: {
      backgroundImage() {
        return "background-image: url(" + this.formData.bg_img + ")"
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/pulic";

  .contact-form {
    background-color: $color_f5f5f5;
    padding: 60px 0 120px 0;

    .contact-form-wrap {
      margin: 0;

      .bg {
        width: 728px;
        height: 520px;
        background-repeat: no-repeat;
        background-size: 100% 100%;

        .text {
          width: 52%;
          height: 100%;
          float: right;
          color: $color_ffffff;

          p:nth-child(1) {
          }

          p:nth-child(2) {
            font-size: 50px;
            margin-top: 40px;
            font-weight: bold;
          }

          p:nth-child(3) {
            font-size: 48px;
            margin-top: 70px;
          }

          p:nth-child(4) {
            font-size: $font_size_22;
            margin-top: 10px;
          }

          p:nth-child(5) {
            font-size: $font_size_22;
            margin-top: 34px;
          }

          p:nth-child(6) {
            font-size: $font_size_34;
            margin-top: 10px;
          }
        }
      }

      .form {
        margin-left: 80px;
        margin-right: 40px;
        width: 366px;
        position: relative;

        p:nth-child(1) {
          color: $color_333333;
          font-size: $font_size_28;
          margin-bottom: 20px;
        }

        .input-item {
          position: relative;
          margin-bottom: 12px;

          img {
            position: absolute;
            top: 50%;
            left: 19px;
            transform: translateY(-50%);
          }
        }

        .input-item input[type='text'] {
          width: 100%;
          height: 46px;
          border: 1px solid #e7e7e7;
          font-size: 14px;
          color: $color_999999;
          padding: 0 10px 0 47px;
          box-sizing: border-box;
        }

        .textarea-item {
          position: relative;

          img {
            position: absolute;
            top: 9px;
            left: 18px;
          }

          textarea {
            width: 100%;
            height: 240px;
            font-size: 14px;
            color: $color_999999;
            border: 1px solid #e7e7e7;
            padding: 10px 10px 10px 47px;
            box-sizing: border-box;
          }
        }

        .btn {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;

          button {
            width: 100%;
            height: 46px;
            background-color: $color_0A84FF;
            color: $color_ffffff;
            font-size: $font_size_20;
            outline: none;
            border-radius: 3px;
          }
        }
      }

      .contact-type {
        width: 277px;
        flex-direction: column;
        justify-content: space-between;

        .qrcode {
          background-color: $color_0A84FF;
          text-align: center;
          padding: 24px;
          box-sizing: border-box;

          p {
            font-size: 32px;
            color: $color_ffffff;
            margin-top: 18px;
          }
        }

        .more {
          background-color: $color_0A84FF;
          position: relative;
          height: 137px;
          cursor: pointer;

          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          p {
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            color: $color_ffffff;
          }

          p:nth-child(2) {
            font-size: 32px;
            top: 45%;
          }

          p:nth-child(3) {
            font-size: 15px;
            top: 63%;
          }
        }
      }
    }
  }

  .app-map {
    margin-top: 60px;
    .map {
      height: 680px;
    }
  }
</style>
