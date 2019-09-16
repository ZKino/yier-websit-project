<template>
  <div class="industry">
    <h1>industry</h1>

    <!--    分页-->
    <Pagination @currentChange="currentChange" />
  </div>
</template>

<script>
  import Pagination from "./Pagination";
  export default {
    name: "industry",
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
