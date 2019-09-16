<template>
  <div class="design">
    <h1>design</h1>

    <!--    分页-->
    <Pagination @currentChange="currentChange" />
  </div>
</template>

<script>
  import Pagination from "./Pagination";
  export default {
    name: "design",
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
