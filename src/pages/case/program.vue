<template>
  <div class="program">
    <div class="program-wrap flex">
      <div
        v-for="v in programData" :key="v.id">
        <List  :listData="v"/>
      </div>
    </div>
  </div>
</template>

<script>
  import List from "./List";
  export default {
    name: "program",
    components: {
      List
    },
    data () {
      return {
        programData: [
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
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/pulic';
  .program {
    .program-wrap {
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
