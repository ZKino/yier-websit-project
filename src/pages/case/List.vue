<template>
  <div class="list" @click="navigationToDetail(listData.id)">
    <div class="list-top">
      <img :src="listData.img_url" alt="">
      <div class="mask">
        <span>-{{ listData.slogan }}-</span>
      </div>
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
    },
    methods: {
      navigationToDetail (id) {
        window.open('/case/' + id, '_blank')
      }
    }
  }
</script>

<style scoped lang="scss">
  .list {
    cursor: pointer;
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
        background-color: rgba(0, 0, 0, 0.52);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: none;
        span {
          color: #ffffff;
          font-size: 18px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
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
