<template>
  <div class="design">
    <div class="design-wrap flex">
      <div
        v-for="v in designData" :key="v.id">
        <List  :listData="v"/>
      </div>
    </div>
  </div>
</template>

<script>
  import List from "./List";
  export default {
    name: "design",
    components: {
      List
    },
    data () {
      return {
        designData: [
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
          ,
          {
            id: 4,
            img_url: require('../../assets/imgs/case_list_1.png'),
            slogan: 'LOGO制作',
            title: '公司5的LOGO制作'
          }
          ,
          {
            id: 5,
            img_url: require('../../assets/imgs/case_list_1.png'),
            slogan: 'LOGO制作',
            title: '公司6的LOGO制作'
          },
          {
            id: 6,
            img_url: require('../../assets/imgs/case_list_1.png'),
            slogan: 'LOGO制作',
            title: '公司7的LOGO制作'
          },
          {
            id: 7,
            img_url: require('../../assets/imgs/case_list_1.png'),
            slogan: 'LOGO制作',
            title: '公司8LOGO制作'
          },
          {
            id: 8,
            img_url: require('../../assets/imgs/case_list_1.png'),
            slogan: 'LOGO制作',
            title: '公司9的LOGO制作'
          },
          {
            id: 9,
            img_url: require('../../assets/imgs/case_list_1.png'),
            slogan: 'LOGO制作',
            title: '公司10的LOGO制作'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
@import '../../assets/css/pulic';
  .design {
    .design-wrap {
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
</style>
