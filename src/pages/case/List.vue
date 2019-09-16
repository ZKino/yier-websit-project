<template>
  <div class="list">
    <div class="list-top">
      <img :src="listData.img_url" alt="">
      <div class="mask">-{{ listData.slogan }}-</div>
    </div>
    <div class="list-bottom">{{ listData.title }}</div>
  </div>
</template>

<script>
  export default {
    name: "List",
    props: {
      listData: {
        type: Object,
        default: function () {
          return {
            id: 0,
            img_url: require('../../assets/imgs/case_list_1.png'),
            slogan: '默认标语',
            title: '默认标题'
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .list {
    width: 100%!important;
    &:hover .list-bottom {
      background-color: #0A84FF;
      color: #ffffff;
    }

    &:hover .list-top .mask {
      display: block;
    }

    .list-top {
      position: relative;

      img {
        width: 100%;
        height: 100%;
        vertical-align: bottom;
      }

      .mask {
        width: 100%;
        height: 100%;
        line-height: 333px;
        text-align: center;
        font-size: 18px;
        background-color: rgba(0, 0, 0, 0.52);
        color: #ffffff;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: none;
      }
    }

    .list-bottom {
      line-height: 48px;
      font-size: 14px;
      color: #333333;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
