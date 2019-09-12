<template>
  <div class="list flex w1200">
    <img :src="listData.img_url" alt="">
    <div class="list-text">
      <h5>{{ listData.title }}</h5>
      <p>
        {{ listData.sub_title }}
      </p>
      <a href="javascript:;" @click="navigationToDetail(listData.id)">查看更多&gt;&gt;</a>
    </div>
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
            img_url: require('../../assets/imgs/list_1.png'),
            title: '默认标题',
            sub_title: '默认副标题'
          }
        }
      }
    },
    methods: {
      navigationToDetail (id) {
        alert('跳转到详情页面id是'+id)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/pulic";

  .list {
    &:hover {
      -webkit-box-shadow: 0 3px 28px 0 rgba(65, 63, 63, 0.1);
      -o-box-shadow: 0 3px 28px 0 rgba(65, 63, 63, 0.1);
      -moz-box-shadow: 0 3px 28px 0 rgba(65, 63, 63, 0.1);
      box-shadow: 0 3px 28px 0 rgba(65, 63, 63, 0.1);
    }

    height: 244px;
    padding: 20px;
    box-sizing: border-box;

    img {
      width: 310px;
      height: 204px;
    }

    .list-text {
      flex: 1;
      margin-left: 39px;
      position: relative;

      h5 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        font-size: 18px;
        font-weight: 400;
        color: #333333;
        line-height: 3;
      }

      p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        font-size: 16px;
        font-weight: 300;
        color: #333333;
        line-height: 1.5;
      }

      a {
        position: absolute;
        right: 0;
        bottom: 6px;
        font-size: 14px;
        color: #333333;
      }
    }
  }
</style>
