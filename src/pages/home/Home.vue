<template>
  <div class="home">

    <!--    轮播区域-->
    <el-carousel height="600px">
      <el-carousel-item v-for="item in swiperLists" :key="item.id">
        <img :src="item.img_url" alt="">
      </el-carousel-item>
    </el-carousel>

    <!--    漂浮区域-->
    <el-row>
      <el-col :span="24">
        <div class="floating flex">
          <Increment
            class="floating-wrap"
            :incrementData="incrementData"/>
        </div>
      </el-col>
    </el-row>

    <!--    忆尔科技-->
    <SubTitle :title="yier_tech.title" :sub_title="yier_tech.sub_title"/>
    <el-row>
      <el-col :span="24">
        <div class="tab w1440" :style="backgroundImg(mouseEnter_index)">
          <ul>
            <li v-for="(v, i) in yier_tech.content" :key="v.id" @mouseenter="handlerMouseenter(i)"
                :class="mouseEnter_index === i ? 'active' : ''">
              <img :src="mouseEnter_index === i ? v.icon : v.icon_c" alt="">
              <h4>{{ v.title }}</h4>
              <div><span v-for="i in v.content_arr">{{ i }}</span></div>
            </li>
          </ul>
          <button class="tab_btn">查看案例</button>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import Increment from '../../components/increment'
  import SubTitle from '../../components/subtitle'

  export default {
    name: "Home",
    components: {
      Increment,
      SubTitle
    },
    data() {
      return {
        swiperLists: [
          {id: 1, img_url: require('@/assets/imgs/banner1.png')},
          {id: 2, img_url: require('@/assets/imgs/banner1.png')},
          {id: 3, img_url: require('@/assets/imgs/banner1.png')}
        ],
        incrementData: {
          title: '专注服务 · 客户至上 · 诚信第一',
          bg_color: '#ffffff',
          title_color: '#000000',
          num_color: '#0A84FF',
          desc_color: '#666666',
          increment_num: [
            {start_num: 0, end_num: 1240, desc: '项目经验'},
            {start_num: 2, end_num: 10, desc: '团队经验'},
            {start_num: 3, end_num: 26, desc: '行业经验'},
            {start_num: 4, end_num: 1000, desc: '客户选择'}
          ]
        },
        yier_tech: {
          title: '忆尔科技',
          sub_title: '专注品牌策略设计 · 建立系统品牌体系 · 转化品牌商业价值 ',
          bg_img: [
            require('../../assets/imgs/tech_bg_0.png'),
            require('../../assets/imgs/tech_bg_1.png'),
            require('../../assets/imgs/tech_bg_2.png'),
            require('../../assets/imgs/tech_bg_3.png'),
            require('../../assets/imgs/tech_bg_4.png')
          ],
          content: [
            {
              id: 1,
              icon: require('@/assets/imgs/icon_1.png'),
              icon_c: require('@/assets/imgs/icon_1_.png'),
              title: '平面设计',
              content_arr: ['LOGO', '品牌VI', '创意广告', '包装设计', '书籍画册', '名片卡片', '海报招贴']
            },
            {
              id: 2,
              icon: require('@/assets/imgs/icon_2.png'),
              icon_c: require('@/assets/imgs/icon_2_.png'),
              title: 'UI设计',
              content_arr: ['APP', '网页', '插画', '淘宝店铺', '详情页', 'H5', 'ICON', 'BANNER']
            },
            {
              id: 3,
              icon: require('@/assets/imgs/icon_3.png'),
              icon_c: require('@/assets/imgs/icon_3_.png'),
              title: '程序开发',
              content_arr: ['APP系统', 'OA系统', '网页开发', '小程序', '公众号功能扩展等']
            },
            {
              id: 4,
              icon: require('@/assets/imgs/icon_4.png'),
              icon_c: require('@/assets/imgs/icon_4_.png'),
              title: '影视制作',
              content_arr: ['影视广告', '企业宣传片', '产品专题片城市宣传片', 'MTV', '影视剧', '三维建筑动画', '三维']
            },
            {
              id: 5,
              icon: require('@/assets/imgs/icon_5.png'),
              icon_c: require('@/assets/imgs/icon_5_.png'),
              title: '广告制作',
              content_arr: ['广告喷绘', '灯箱广告', '展厅布置', '纸质印刷']
            }
          ]
        },
        mouseEnter_index: 0, // 鼠标移入标记
      }
    },
    methods: {
      handlerMouseenter(i) {
        this.mouseEnter_index = i
      },
      backgroundImg(index) {
        return 'backgroundImage:' + 'url(' + this.yier_tech.bg_img[index] + ')'
      }
    },
  }
</script>

<style lang="scss">
  .home {
    .el-carousel {
      .el-carousel__indicators {
        margin-bottom: 35px;
      }
    }
  }
</style>

<style scoped lang="scss">
  .home {
    margin-top: 86px;
    background-color: #f5f5f5;

    .floating {
      position: relative;
      height: 280px;

      .floating-wrap {
        position: absolute;
        z-index: 999;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .tab {
      height: 724px;
      background-repeat: no-repeat;
      margin-top: 20px;
      margin-bottom: 40px;
      position: relative;

      ul {
        width: 348px;
        position: absolute;
        top: 4px;
        left: 4px;
        bottom: 4px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        li {
          width: 348px;
          height: 140px;
          background-color: #ffffff;
          position: relative;

          &.active {
            background-color: #1489FF;

            h4 {
              color: #ffffff;
            }

            span {
              color: #ffffff;

              &::after {
                background-color: #ffffff;
              }
            }
          }

          img {
            width: 59px;
            height: 59px;
            position: absolute;
            top: 50%;
            left: 28px;
            transform: translateY(-50%);
          }

          h4 {
            font-size: 16px;
            font-weight: 400;
            color: #333333;
            position: absolute;
            top: 28px;
            left: 107px;
          }

          div {
            display: flex;
            flex-wrap: wrap;
            justify-content: start;
            position: absolute;
            top: 67px;
            left: 107px;

            span {
              font-size: 12px;
              font-weight: 300;
              color: #999999;
              line-height: 24px;
              margin-right: 20px;
              position: relative;

              &::after {
                content: '';
                display: block;
                height: 15px;
                width: 2px;
                background-color: #999999;
                position: absolute;
                top: 4px;
                right: -11px;
                bottom: 0;
              }

              &:last-child::after {
                background-color: transparent;
              }
            }
          }
        }
      }

      .tab_btn {
        position: absolute;
        right: 132px;
        bottom: 64px;
        cursor: pointer;
        width: 248px;
        height: 59px;
        background: #ffffff;
        border-radius: 20px;
        font-size: 26px;
        font-weight: 400;
        color: #000000;
        line-height: 24px;
        outline: none;
      }
    }
  }
</style>
