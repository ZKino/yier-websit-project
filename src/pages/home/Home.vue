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

    <!--    成功案例-->
    <SubTitle :title="successCase.title" :sub_title="successCase.sub_title" style="background-color: #ffffff"/>
    <el-row>
      <el-col :span="24">
        <div class="sucess-case">
          <div class="sucess-case-tab">
            <ul>
              <li v-for="(v, i) in successCase.tab_list" :key="i">{{ v }}</li>
            </ul>
          </div>
          <div class="sucess-case-tab-content flex">
            <div
              class="list-item"
              v-for="(v, i) in successCase.content" :key="i">
              <List :list-data="v"/>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <!--    我的圈子-->
    <SubTitle :title="my_circle.title"/>
    <el-row>
      <el-col :span="24">
        <div class="my-circle">
          <div class="w1440 my-circle-content">
            <div class="my-circle-content-tab">
              <ul>
                <li v-for="v in my_circle.tab_list" :key="v">{{ v }}</li>
              </ul>
            </div>
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="my-circle-item-left">
                  <img class="my-circle-item-bg" src="../../assets/imgs/my_circle_item_bg.png" alt="">
                  <p>
                    <span>忆尔科技：上海沃尔沃签约品牌升级 达成合作协议</span>
                    <img src="../../assets/imgs/arrow_left.png" alt="">
                  </p>
                </div>
              </el-col>
              <el-col :span="16">
                <div class="my-circle-item-right">
                  <ul>
                    <li>
                      <div class="left-time">
                        <span>06</span>
                        <span>2019-04</span>
                      </div>
                      <div class="case-right">
                        <h4>【签约】四川忆尔科技有限公司APP开发项目</h4>
                        <h5>非常感谢四川忆尔科技有限公司的信任与大力支持，把企业的app重大项目交给我们忆尔科技有限公司</h5>
                        <img src="../../assets/imgs/arrow_left_o.png" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="left-time">
                        <span>06</span>
                        <span>2019-04</span>
                      </div>
                      <div class="case-right">
                        <h4>【签约】四川忆尔科技有限公司APP开发项目</h4>
                        <h5>非常感谢四川忆尔科技有限公司的信任与大力支持，把企业的app重大项目交给我们忆尔科技有限公司</h5>
                        <img src="../../assets/imgs/arrow_left_o.png" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="left-time">
                        <span>06</span>
                        <span>2019-04</span>
                      </div>
                      <div class="case-right">
                        <h4>【签约】四川忆尔科技有限公司APP开发项目</h4>
                        <h5>非常感谢四川忆尔科技有限公司的信任与大力支持，把企业的app重大项目交给我们忆尔科技有限公司</h5>
                        <img src="../../assets/imgs/arrow_left_o.png" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="left-time">
                        <span>06</span>
                        <span>2019-04</span>
                      </div>
                      <div class="case-right">
                        <h4>【签约】四川忆尔科技有限公司APP开发项目</h4>
                        <h5>非常感谢四川忆尔科技有限公司的信任与大力支持，把企业的app重大项目交给我们忆尔科技有限公司</h5>
                        <img src="../../assets/imgs/arrow_left_o.png" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="left-time">
                        <span>06</span>
                        <span>2019-04</span>
                      </div>
                      <div class="case-right">
                        <h4>【签约】四川忆尔科技有限公司APP开发项目</h4>
                        <h5>非常感谢四川忆尔科技有限公司的信任与大力支持，把企业的app重大项目交给我们忆尔科技有限公司</h5>
                        <img src="../../assets/imgs/arrow_left_o.png" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="left-time">
                        <span>06</span>
                        <span>2019-04</span>
                      </div>
                      <div class="case-right">
                        <h4>【签约】四川忆尔科技有限公司APP开发项目</h4>
                        <h5>非常感谢四川忆尔科技有限公司的信任与大力支持，把企业的app重大项目交给我们忆尔科技有限公司</h5>
                        <img src="../../assets/imgs/arrow_left_o.png" alt="">
                      </div>
                    </li>
                  </ul>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>

    <!--    表单-->
    <el-row>
      <el-col :span="24">
        <div class="the-form">
          <div class="the-form-qrcode">
            <img :src="the_form.qrcode" alt="">
            <p>{{ the_form.qrcode_text }}</p>
          </div>
          <div class="the-form-submit">
            <p>免费咨询服务</p>
            <input type="text" placeholder="公司名称"/>
            <input type="text" placeholder="您的姓名"/>
            <input type="text" placeholder="联系电话"/>
            <input type="text" placeholder="QQ号码"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="简单需求描述"></textarea>
            <button>提交免费咨询</button>
          </div>
        </div>
      </el-col>
    </el-row>

    <!--    底部标语-->
    <el-row>
      <el-col :span="24">
        <div class="slogan">
          <div class="w1200 slogan-content">
            <div class="slogan-content-item">
              <img src="../../assets/imgs/slogan_1.png" alt="">
              <h4>实力团队</h4>
              <h5>实力团队，服务有保障</h5>
            </div>
            <div class="slogan-content-item">
              <img src="../../assets/imgs/slogan_2.png" alt="">
              <h4>资深设计师</h4>
              <h5>从业23年，高级设计师</h5>
            </div>
            <div class="slogan-content-item">
              <img src="../../assets/imgs/slogan_3.png" alt="">
              <h4>经验丰富</h4>
              <h5>各行各业，项目经验丰富</h5>
            </div>
            <div class="slogan-content-item">
              <img src="../../assets/imgs/slogan_4.png" alt="">
              <h4>一对一服务</h4>
              <h5>项目洽谈，一对一服务</h5>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import Increment from '../../components/increment'
  import SubTitle from '../../components/subtitle'
  import List from "../case/List";

  export default {
    name: "Home",
    components: {
      Increment,
      SubTitle,
      List
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
        successCase: {
          title: '成功案例',
          sub_title: '您的眼光高度，决定您的品牌厚度!',
          tab_list: ['平面设计', 'UI设计', '程序开发', '影视制作', '广告制作'],
          content: [
            {
              id: 0,
              img_url: require('../../assets/imgs/case_1.png'),
              title: '四川忆尔科技有限公司',
              slogan: '-LOGO品牌设计-'
            },
            {
              id: 1,
              img_url: require('../../assets/imgs/case_2.png'),
              title: '四川忆尔科技有限公司',
              slogan: '-LOGO品牌设计-'
            },
            {
              id: 2,
              img_url: require('../../assets/imgs/case_3.png'),
              title: '四川忆尔科技有限公司',
              slogan: '-LOGO品牌设计-'
            },
            {
              id: 3,
              img_url: require('../../assets/imgs/case_3.png'),
              title: '四川忆尔科技有限公司',
              slogan: '-LOGO品牌设计-'
            },
            {
              id: 4,
              img_url: require('../../assets/imgs/case_4.png'),
              title: '四川忆尔科技有限公司',
              slogan: '-LOGO品牌设计-'
            },
            {
              id: 5,
              img_url: require('../../assets/imgs/case_5.png'),
              title: '四川忆尔科技有限公司',
              slogan: '-LOGO品牌设计-'
            },
            {
              id: 6,
              img_url: require('../../assets/imgs/case_6.png'),
              title: '四川忆尔科技有限公司',
              slogan: '-LOGO品牌设计-'
            },
            {
              id: 7,
              img_url: require('../../assets/imgs/case_7.png'),
              title: '四川忆尔科技有限公司',
              slogan: '-LOGO品牌设计-'
            },
            {
              id: 8,
              img_url: require('../../assets/imgs/case_8.png'),
              title: '四川忆尔科技有限公司',
              slogan: '-LOGO品牌设计-'
            },
            {
              id: 9,
              img_url: require('../../assets/imgs/case_9.png'),
              title: '四川忆尔科技有限公司',
              slogan: '-LOGO品牌设计-'
            }
          ]
        },
        my_circle: {
          title: '我的圈子',
          sub_title: '用我们专业的角度讲出你们的心声',
          tab_list: ['最新签约', '公司新闻', '品牌优化', '设计知识', '行业资讯']
        },
        the_form: {
          bg_url: require('../../assets/imgs/the_form_bg.png'),
          qrcode: require('../../assets/imgs/the_form_qrcode.png'),
          qrcode_text: '官网微信咨询'
        }
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
      .el-carousel__item {
        img {
          width: 100%;
        }
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

    .sucess-case {
      background-color: #ffffff;
      margin-bottom: 30px;

      .sucess-case-tab {
        ul {
          display: flex;
          justify-content: flex-end;
          padding: 20px 0;
          border-bottom: 1px solid #E6E1E1;

          li {
            padding: 0 20px;
            font-size: 18px;
            color: #999999;
          }
        }
      }

      .sucess-case-tab-content {
        justify-content: flex-start;
        flex-wrap: wrap;

        .list-item {
          width: 20%;
          border: 1px solid transparent;
          box-sizing: border-box;
        }
      }
    }

    .my-circle {
      .my-circle-content {
        .my-circle-content-tab {
          ul {
            padding: 36px 0 60px 0;
            display: flex;
            justify-content: center;

            li {
              color: #333333;
              font-size: 14px;
              padding: 8px 19px;
              background-color: #0A84FF;
              border-radius: 20px;
              margin: 0 30px;
            }
          }
        }

        .my-circle-item-left {
          width: 480px;
          height: 497px;
          background-color: red;
          position: relative;

          .my-circle-item-bg {
            width: 100%;
            height: 100%;
          }

          p {
            position: absolute;
            background-color: #ffffff;
            bottom: 10px;
            left: 10px;
            right: 10px;
            width: 460px;
            height: 100px;
            padding: 12px;
            box-sizing: border-box;

            span {
              color: #333333;
              font-size: 20px;
              line-height: 1.2;
              position: absolute;
              left: 30px;
              right: 100px;
              top: 50%;
              transform: translateY(-50%);
              text-align: left;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }

            img {
              width: 22px;
              height: 37px;
              position: absolute;
              right: 30px;
              top: 50%;
              transform: translateY(-50%);
              cursor: pointer;
            }
          }
        }

        .my-circle-item-right {
          height: 497px;

          ul {
            display: grid;
            grid-template-columns: 470px 470px;
            grid-template-rows: 159px 159px 159px;
            grid-row-gap: 10px;
            grid-column-gap: 10px;

            li {
              background-color: #ffffff;
              display: flex;

              &:hover {
                -moz-box-shadow: 0 18px 18px 0 rgba(153, 153, 153, 0.5);
                -o-box-shadow: 0 18px 18px 0 rgba(153, 153, 153, 0.5);
                -webkit-box-shadow: 0 18px 18px 0 rgba(153, 153, 153, 0.5);
                box-shadow: 0 18px 18px 0 rgba(153, 153, 153, 0.5);
              }

              &:hover .case-right h4 {
                color: #0A84FF;
              }

              .left-time {
                width: 94px;

                span:first-child {
                  font-size: 32px;
                  font-weight: 300;
                  color: #333333;
                  line-height: 79.5px;
                  display: block;
                  height: 79.5px;
                  position: relative;
                  text-align: center;

                  &::after {
                    content: '';
                    height: 1px;
                    width: 57px;
                    display: block;
                    background-color: #D9D9D9;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                  }
                }

                span:last-child {
                  font-size: 16px;
                  font-weight: 300;
                  color: #333333;
                  line-height: 79.5px;
                  display: block;
                  height: 79.5px;
                  text-align: center;
                }
              }

              .case-right {
                width: 375px;
                padding: 20px;
                box-sizing: border-box;
                border-left: 1px solid #D9D9D9;
                position: relative;


                h4 {
                  font-size: 16px;
                  font-weight: 300;
                  color: #333333;
                  line-height: 24px;
                  text-align: left;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 1;
                  overflow: hidden;
                }

                h5 {
                  font-size: 14px;
                  font-weight: 300;
                  color: #666666;
                  line-height: 24px;
                  text-align: left;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  overflow: hidden;
                }

                img {
                  position: absolute;
                  right: 20px;
                  bottom: 20px;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }

    .the-form {
      background: url("../../assets/imgs/the_form_bg.png") 100% 100% no-repeat;
      width: 100%;
      height: 619px;
      box-sizing: border-box;
      margin: 65px 0 65px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .the-form-qrcode {
        margin-right: 100px;
        img {
          width: 362px;
          height: 362px;
        }
        p {
          font-size:30px;
          font-weight:300;
          color:rgba(255,255,255,1);
          line-height:24px;
          margin-top: 30px;
          text-align: center;
        }
      }
      .the-form-submit {
        background-color: #ffffff;
        padding: 40px 30px;
        width: 930px;
        height: 520px;
        box-sizing: border-box;
        p {
          font-size:34px;
          font-weight:300;
          color:rgba(0,0,0,1);
          text-align: left;
          margin-bottom: 30px;
        }
        input {
          width:49%;
          height:66px;
          padding: 24px 19px;
          box-sizing: border-box;
          border:1px solid rgba(217,217,217,1);
          outline: none;
          font-size:18px;
          font-weight:300;
          color:rgba(102,102,102,1);
          margin-bottom: 10px;
        }
        textarea {
          width: 98.5%;
          height: 142px;
          padding: 24px 19px;
          box-sizing: border-box;
          border:1px solid rgba(217,217,217,1);
          outline: none;
          font-size:18px;
          font-weight:300;
          color:rgba(102,102,102,1);
          margin-bottom: 29px;
        }
        button {
          width:99%;
          height:66px;
          background:rgba(10,132,255,1);
          border-radius:10px;
          font-size:20px;
          font-weight:300;
          color:rgba(255,255,255,1);
          outline: none;
        }
      }
    }

    .slogan {
      background-color: #ffffff;
      height: 120px;
      .slogan-content {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        .slogan-content-item {
          width: 23%;
          position: relative;
          img {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
          }
          h4 {
            font-size:20px;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:30px;
            padding-left: 65px;
            text-align: left;
          }
          h5 {
            font-size:16px;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:24px;
            padding-left: 65px;
            text-align: left;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>
