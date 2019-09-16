<template>
  <div class="product">
    <h1>product</h1>

    <!--    分页-->
    <Pagination @currentChange="currentChange" />
  </div>
</template>

<script>
  import Pagination from "./Pagination";
  export default {
    name: "product",
    components: {
      Pagination
    },
    methods: {
      currentChange () {
        console.log('翻页')
      }
    }
  }
</script>

<style scoped>

</style>
