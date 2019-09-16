<template>
  <div class="development">
    <h1>development</h1>

    <!--    分页-->
    <Pagination @currentChange="currentChange" />
  </div>
</template>

<script>
  import Pagination from "./Pagination";
  export default {
    name: "development",
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
