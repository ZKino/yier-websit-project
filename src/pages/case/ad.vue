<template>
  <div class="ad">
    <div class="ad-wrap flex">
      <div
        v-for="v in adData" :key="v.id">
        <List  :listData="v"/>
      </div>
    </div>
  </div>
</template>

<script>
  import List from "./List";
  export default {
    name: "ad",
    components: {
      List
    },
    data () {
      return {
        adData: [
          {
            id: 0,
            img_url: require('../../assets/imgs/case_list_1.png'),
            slogan: 'LOGO制作',
            title: '公司1的LOGO制作'
          },
          {
            id: 1,
            img_url: require('../../assets/imgs/case_list_1.png'),
            slogan: 'LOGO制作',
            title: '公司2的LOGO制作'
          }
          ,
          {
            id: 2,
            img_url: require('../../assets/imgs/case_list_1.png'),
            slogan: 'LOGO制作',
            title: '公司3的LOGO制作'
          }
          ,
          {
            id: 3,
            img_url: require('../../assets/imgs/case_list_1.png'),
            slogan: 'LOGO制作',
            title: '公司4的LOGO制作'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/pulic';
  .ad {
    .ad-wrap {
      justify-content: flex-start;
      flex-wrap: wrap;
      div {
        width: 20%;
        border: 1px solid transparent;
        box-sizing: border-box;
      }
    }
  }
</style>
