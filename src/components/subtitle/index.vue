<template>
  <div class="subtitle">
    <h3>{{ title }}</h3>
    <h4 v-if="sub_title">{{ sub_title }}</h4>
  </div>
</template>

<script>
  export default {
    name: "index",
    props: {
      title: {
        type: String,
        default: function () {
          return '主标题'
        }
      },
      sub_title: {
        type: String
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/pulic";

  .subtitle {
    text-align: center;
    padding: 50px 0;

    h3 {
      color: $color_333333;
      font-size: $font-size_34;
    }

    h4 {
      color: $color_333333;
      font-size: $font_size_20;
      margin-top: 19px;
    }
  }

</style>
