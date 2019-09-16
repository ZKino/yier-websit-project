<template>
  <el-pagination
    background
    layout="prev, pager, next"
    prev-text="上一页"
    next-text="下一页"
    @current-change="currentChange"
    :page-size="pageSize"
    :total="total">
  </el-pagination>
</template>

<script>
  export default {
    name: "Pagination",
    data () {
      return {
        pageSize: 5, // 每页显示条目个数
        total: 10, // 总条目数
      }
    },
    methods: {
      currentChange () {
        this.$emit('currentChange')
      }
    }
  }
</script>

<style scoped lang="scss">
.el-pagination {
  padding: 60px 0 80px 0;
  text-align: center;
}
</style>
