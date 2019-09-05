<template>
  <div class="increment" :style="{backgroundColor: incrementData.bg_color}">
    <p class="title" :style="{color: incrementData.title_color}">{{ incrementData.title }}</p>
    <slot></slot>
    <ul class="increment-num flex">
      <li v-for="(item, index) in incrementData.increment_num" :key="item.end_num">
        <span :style="{color: incrementData.num_color}">{{ item.start_num }} <i>+</i> </span>
        <span :style="{color: incrementData.desc_color}">{{ item.desc }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "index",
    props: {
      incrementData: {
        type: Object,
        default: function () {
          return {
            title: '标题',
            bg_color: '#ffffff',
            title_color: '#000000',
            num_color: '#000000',
            desc_color: '#000000',
            increment_num: [
              {start_num: 0, end_num: 120, desc: '描述1'},
              {start_num: 2, end_num: 80, desc: '描述2'},
              {start_num: 3, end_num: 100, desc: '描述3'},
              {start_num: 4, end_num: 56, desc: '描述4'}
            ]
          }
        }
      }
    },
    methods: {
      increment () {
        this.incrementData.increment_num.forEach((v, i) => {
          // console.log(v)
          // console.log(i)
          // let start_num = v.start_num
          // let end_num = v.end_num
          let timer = setInterval(() => {
            v.start_num++
            if (v.start_num >= v.end_num) {
              clearInterval(timer)
            }
          }, 60)
        })
      }
    },
    created() {
      this.increment()
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/pulic";

  .increment {
    width: 1440px;
    height: 280px;
    box-sizing: border-box;
    padding: 40px;
    border-radius: 6px;

    .title {
      text-align: center;
      color: $color_000000;
      font-size: $font_size_28;
    }
    .increment-num {
      margin-top: 65px;
      justify-content: space-around;
      li {
        span {
          display: block;
        }
        & span:nth-child(1) {
          text-align: center;
          font-size: 56px;
          i {
            font-size: $font_size_28;
            vertical-align: top;
          }
        }
        & span:nth-child(2) {
          font-size: $font_size_28;
          letter-spacing: 16px;
          margin-top: 10px;
        }
      }
    }
  }
</style>
