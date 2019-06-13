<template>
  <div class="home">
    <div class="banner">
      <Carousel
        autoplay
        :autoplay-speed="6000"
        arrow="always"
        trigger="hover"
        loop
        radius-dot
        easing
      >
        <CarouselItem>
          <div class="demo-carousel">
            <img src="../../static/image/首图.jpg" alt>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img src="@/static/image/轮播图2.png" alt>
          </div>
        </CarouselItem>
      </Carousel>
    </div>
    <!--轮播 -->
    <!-- 主体 -->
    <div class="index-container">
      <!-- one -->
      <div class="index-phone-center">
        <div class="section-box section-phone-box">
          <div class="section-title" style="margin-top:-40px"></div>
          <div class="section-box-adv" style="background:#fff">
            <Row :gutter="16" style="width:1200px;margin:0 auto;margin-top:2%">
              <Col span="8">
                <Card :bordered="false" style="height:268px;padding-top:30px; cursor: pointer;">
                  <div style="text-align:center;position:relative" @click="$router.push({name: 'xinxisafe'})">
                    <img src="@/static/image/微信图片_20190604151034.png" style="position:absolute;top:40%; color:#00366F;font-size:24px; left:32%" alt="">
                    <!-- <span class="adv-font-title" style="position:absolute;top:40%; color:#00366F;font-size:24px; left:35%">信息安全</span> -->
                    <img src="@/static/image/1.png">
                    <br>
                    <span class="adv-font">查看详情</span>
                    <span class="adv-img"></span>
                  </div>
                </Card>
              </Col>
              <Col span="8">
                <Card :bordered="false" style="height:268px;padding-top:30px; cursor: pointer;">
                  <div style="text-align:center;position:relative" @click="$router.push({name: 'yewusafe'})">
                    <img src="@/static/image/微信图片_20190604151039.png" style="position:absolute;top:40%; color:#00366F;font-size:24px; left:34%" alt="">

                     <!-- <span class="adv-font-title" style="position:absolute;top:40%; color:#00366F;font-size:24px; left:35%">业务安全</span> -->
                    <img src="@/static/image/2.png">
                    <span class="adv-font">查看详情</span>
                    <span class="adv-img"></span>
                  </div>
                </Card>
              </Col>
              <Col span="8">
                <Card :bordered="false" style="height:268px;padding-top:30px; cursor: pointer;">
                  <div style="text-align:center;position:relative" @click="$router.push({name: 'yunyingsafe'})">
                    <img src="@/static/image/微信图片_20190604151042.png" style="position:absolute;top:40%; color:#00366F;font-size:24px; left:30%" alt="">

                     <!-- <span class="adv-font-title" style="position:absolute;top:40%; color:#00366F;font-size:24px; left:30%">企业运营安全</span> -->
                    <img src="@/static/image/3.png">
                    <span class="adv-font">查看详情</span>
                    <span class="adv-img"></span>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div style="width:100%;height:200px;margin-top:50px;margin-bottom:50px">
        <img src="../../static/image/保护网.png" alt style="width:100%">
      </div>

      <div class="case">
        <header>
          <img src="../../static/image/案例展示.png" data-src>
        </header>
        <content>
          <article>
            <div class="title">
              政府
              <p class="line"></p>
            </div>
            <div>
              <img src="../image/图层 226.png" alt="not find image">
              <footer>
                <span>查看详情</span>
                <a href>
                  <img src="../image/查看详情2.png" alt="not find image">
                </a>
              </footer>
            </div>
          </article>
          <article>
            <div class="title">
              企业
              <p class="line"></p>
            </div>
            <div>
              <img src="../image/图层 228.png" alt="not find image">
              <footer>
                <span>查看详情</span>
                <a href>
                  <img src="../image/查看详情2.png" alt="not find image">
                </a>
              </footer>
            </div>
          </article>
          <article>
            <div class="title">
              金融
              <p class="line"></p>
            </div>
            <div>
              <img src="../image/图层 230.png" alt="not find image">
              <footer>
                <span>查看详情</span>
                <a href>
                  <img src="../image/查看详情2.png" alt="not find image">
                </a>
              </footer>
            </div>
          </article>
          <article>
            <div class="title">
              教育
              <p class="line"></p>
            </div>
            <div>
              <img src="../image/图层 232.png" alt="not find image">
              <footer>
                <span>查看详情</span>
                <a href>
                  <img src="../image/查看详情2.png" alt="not find image">
                </a>
              </footer>
            </div>
          </article>
        </content>
      </div>

      <div class="partner">
        <header>
          <img src="../../static/image/合作客户.png" alt="not find image">
        </header>
        <img class="partner-img" src="../../static/image/5.png" alt>
      </div>
      <div class="aboutUs">
        <header>
          <img src="../../static/image/关于我们.png" alt="not find image">
        </header>
        <content>
          <p>上海智天信息科技有限公司成立于2012年。2015年通过工信部软件企业评审。 公司业务主要集中于安全领域，拥有完整地安全产品线。经过近10年的发展，公司业务范围不断扩大，业界知名度不断提升。目前，公司客户群体主要集中在政府、事业单位以及大型企业。</p>
          <p>在信息系统安全防护方面，提供网络层的恶意代码防护系统，采用领先的DGA以及智能学习算法，使APT检测能力达到业界领先水平。防止企业信息系统被植入木马病毒而成为黑客不法工具，或者机密信息被窃取等。</p>
          <p>在业务安全方面，提供网络内容审核系统，采用智天自有的文本快速匹配算法以及图形分析算法，实现文本、图片以及视频内容审核。防止内部人员滥用网络，对外发送敏感文件或不良内容。</p>
          <p>在企业运营安全管理方面，提供安全管理平台，对人、物、环境进行全方位安全管理。引入人工智能技术，实现事前预警，事中记录，事后分析形成新的智能判断规则的持续优化能力。</p>

          <!-- <pre>上海智天信息科技有限公司成立于2012年。2015年通过工信部软件企业评审。公司业务主要集中于安全领域，拥有完整地安全产品线。经过近10年的发展，公司业务范围不断扩大，业界知名度不断提升。目前，公司客户群体主要集中在政府、事业单位以及大型企业。</pre>
            <pre>在信息系统安全防护方面，提供网络层的恶意代码防护系统，采用领先的DGA以及智能学习算法，使APT检测能力达到业界领先水平。防止企业信息系统被植入木马病毒而成为黑客不法工具，或者机密信息被窃取等。</pre>
            <pre>在业务安全方面，提供网络内容审核系统，采用智天自有的文本快速匹配算法以及图形分析算法，实现文本、图片以及视频内容审核。防止内部人员滥用网络，对外发送敏感文件或不良内容。</pre>
          <pre>在企业运营安全管理方面，提供安全管理平台，对人、物、环境进行全方位安全管理。引入人工智能技术，实现事前预警，事中记录，事后分析形成新的智能判断规则的持续优化能力。</pre>-->
        </content>
      </div>
      <!-- 智能配件 -->
      <!-- <div class="box-img-black"></div> -->

      <!-- 生活周边 -->
    </div>
  

    <!-- <BackTop :height="400" :right="0" :bottom="648" >
        <div class="top"
      
        
        >
            <img
        src="../../static/image/TOP.png"
        style=" position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"
        alt
      >
        </div>
    </BackTop>
    
    <BackTop :height="400" :right="0" :bottom="593" >
        <div class="top"
        >
            <img
        src="../../static/image/TOP.png"
        style=" position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"
        alt
      >
        </div>
    </BackTop>-->
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "home",
  data() {
    return {
      num: 5,
      isnode: false
    };
  },
  mounted() {

    if (1) {
      this.$store.dispatch("footerStatus/getNewNum", this.num);
      // console.log(this.num)
      this.$store.dispatch("footerStatus/hideFooter");
    } else {
      this.$store.dispatch("footerStatus/showFooter");
    }
    // console.log(this.a);
    // console.log(this.$store.state.showFooter)
  },
  computed: {
    //  ...mapState({  //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
    //        isShow:state=>state.footerStatus.showFooter //注意这些与上面的区别就是state.footerStatus,
    //                                                     //里面定义的showFooter是指footerStatus.js里state的showFooter
    //     }),
    ...mapGetters("footerStatus", {
      //footerStatus指的是modules文件夹下的footerStatus.js模块
      isShow: "isShow", //第一个isShow是我自定义的只要对应template里v-if="isShow"就行，
      a: "getChangedNum" //第二个isShow是对应的footerStatus.js里的getters里的isShow
    })
  },
  watch: {},
  methods: {
   
    
    // phoneDetails(item){
    // 	this.$router.push({name:'details', query:{main_id:item.main_id}})
    // },
    // headsetDetails(item){
    // 	this.$router.push({name:'details', query:{main_id:item.main_id}})
    // },
    // partDeatils(item){
    // 	this.$router.push({name:'details', query:{main_id:item.main_id}})
    // },
    // arroundDetails(item){
    // 	this.$router.push({name:'details', query:{main_id:item.main_id}})
    // },
    // async _getphonelist(){ // 手机
    // 	const res = await getphonelist()
    // 	if(res.status == 0){
    // 		this.phonelist = res.result
    // 	}
    // },
    // async _getheadsetList(){ // 声学
    // 	const res = await getheadsetlist()
    // 	if(res.status == 0){
    // 		this.headsetlist = res.result
    // 	}
    // },
    // async _getpartlist(){ // 配件
    // 	const res = await getpartlist()
    // 	if(res.status == 0){
    // 		this.partlist = res.result
    // 	}
    // },
    // async _getarroundlist(){ // 生活周边
    // 	const res = await getarroundlist()
    // 	if(res.status == 0){
    // 		this.arroundlist = res.result
    // 	}
    // },
  }
};
</script>
<style lang="scss" scoped>
.ivu-carousel > .ivu-carousel-arrow {
  background-color: #fff;
}
.home {
  padding-top: 4%;
  background: #fff;
  .banner {
    width: 100%;

    img {
      display: block;
      width: 100%;
      height: 500px;
    }
  }
  .index-adv-center {
    margin-bottom: 50px;
  }
  .ivu-card {
    // position: relative;
    // overflow: hidden;
    img {
      // width: 100%;
      // height: 100%;
      // display: block;
      // transition: all 2s;
      // position: absolute;
      // top: 63px;
      // left: 95px;
    }
    :hover {
      // width: 80%;
      // height: 80%;
    }
  }

  .section-box {
    margin-bottom: 0px;
    .box-img {
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;
      background-repeat: no-repeat;
      background-position: center;
    }

    a {
      position: relative;
    }
    .section-title {
      padding-top: 20px;

      font-size: 30px;
      text-align: center;
      margin-bottom: 10px;
      h3 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        font-size: 16px;
        color: #888;
        margin-bottom: 18px;
      }
    }

    .section-box-adv {
      height: 350px;
      padding-bottom: 45px;
      background-color: #fff;
      border-bottom: 1px solid #fff;
      overflow: hidden;
      .ivu-card {
      }
      // .ivu-card {
      //   position: relative;
      //   &:hover {
      //     cursor: pointer;
      //     opacity: 0.9;
      //     position: relative;
      //     animation: mymove 1s linear 0s infinite alternate;
      //     -webkit-animation: mymove 1s linear 0s infinite alternate;
      //   }
      //   @keyframes mymove {
      //     from {
      //       bottom: 0px;
      //     }
      //     to {
      //       bottom: 20px;
      //     }
      //   }

      //   @-webkit-keyframes mymove /*Safari and Chrome*/ {
      //     from {
      //       bottom: 0px;
      //     }
      //     to {
      //       bottom: 20px;
      //     }
      //   }
      // }
      .adv-font {
        color: #172a88;
        font-family: "PingFang-SC-Medium";
        font-size: 16px;
        float: left;
        margin-top: 3%;
        margin-left: 8%;
        cursor: pointer;
      }
      .adv-img {
        width: 21.5px;
        height: 21.5px;
        display: block;
        float: right;
        margin-right: 10%;
        margin-top: 3%;
        background: url("../../static/image/查看详情.png");
        cursor: pointer;
      }
      p {
        text-align: left;
        margin-left: 120px;
        font-size: 14px;
        color: #888;
        margin-bottom: 18px;
      }
      i {
        display: block;
        text-align: center;
        font-size: 14px;
        color: #888;
        margin-bottom: 18px;
      }
      h2 {
        font-size: 18px;
        margin: 18px;
        color: #20273c;
        margin-bottom: 8px;
      }
      .box-img {
        width: 100%;
      }
      ul {
        overflow: hidden;
        width: 1240px;
        margin: auto;
        li {
          text-align: center;
          float: left;
          position: relative;
          width: 25%;
          padding-top: 45px;
          .box-img {
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;
            background-repeat: no-repeat;
            background-position: center;
          }
          .phone_wraper {
            position: relative;
            img {
              height: 130px;
              &:hover {
                cursor: pointer;
                opacity: 0.9;
                position: relative;
                animation: mymove 1s linear 0s infinite alternate;
                -webkit-animation: mymove 1s linear 0s infinite alternate;
              }
              @keyframes mymove {
                from {
                  bottom: 0px;
                }
                to {
                  bottom: 20px;
                }
              }

              @-webkit-keyframes mymove /*Safari and Chrome*/ {
                from {
                  bottom: 0px;
                }
                to {
                  bottom: 20px;
                }
              }
            }

            em {
              font-style: normal;
              display: block;
              color: #333;
              font-size: 20px;
            }
            p {
              font-size: 14px;
              color: #999;
            }
          }
        }
        .last {
          margin-right: 0;
        }
      }
    }
  }

  .case {
    width: 100%;
    height: 660px;
    padding-top: 30px;
    border-bottom: 2px solid rgba(232, 232, 232, 1);
  }
  .case header {
    width: 100%;
    height: 68px;
    margin: 0 0 61px 0;
  }

  .case header img {
    display: block;
    margin: 0 auto;
  }

  .case content {
    overflow: hidden;
  }

  .case article {
    width: 280px;
    height: 365px;
    margin-right: 15px;
    padding: 0 15px 15px 15px;
    float: left;
    cursor: pointer;
    transition: all 0.8s;
    box-shadow: 0px 5px 5px RGBA(230, 235, 241, 1);
  }

  .case article:nth-child(1) {
    margin-left: 380px;
  }

  .case article:nth-child(2n) {
    margin-top: 30px;
  }

  .case article:nth-child(2n):hover {
    margin-top: 0px;
  }

  .case article:nth-child(2n-1):hover {
    // background: red;
    margin-top: 30px;
  }

  .case article .title {
    width: 100px;
    margin: 0 auto;
    text-align: center;
    font-size: 24px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(23, 42, 136, 1);
  }

  .case article .title .line {
    display: block;
    width: 100px;
    height: 3px;
    background-image: url(../image/矩形5.png);
    margin-bottom: 11px;
  }

  .case article footer {
    width: 245px;
    height: 25px;
    line-height: 15px;
    margin-top: 11px;
    padding: 4px;
    background: rgba(23, 42, 136, 1);
  }

  .case article footer span {
    font-size: 16px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }

  .case article footer a {
    float: right;
    margin-top: -2px;
  }

  .partner {
    width: 100%;
    height: 520px;
    padding-top: 66px;
    margin: 0 auto;
  }

  .partner header {
    width: 100%;
    height: 68px;
    margin: 0 0 58px 0;
  }
  .partner .partner-img {
    margin-left: 437px;
  }

  .partner content {
    width: 80px;
    height: 200px;
    background: red;
    // margin: 0 auto;
  }

  .partner header img {
    display: block;
    margin: 0 auto;
  }

  .aboutUs {
    width: 100%;
    height: 640px;
    background: url(../image/关于我们底图.png);
    padding-top: 48px;
  }

  .aboutUs header {
    width: 100%;
    height: 68px;
    margin: 0 0 20px 0;
  }

  .aboutUs header img {
    display: block;
    margin: 0 auto;
  }

  .aboutUs content {
    display: block;
    margin: 0 auto;
    width: 1106px;
    height: 430px;
    // background: red;
  }

  .aboutUs content p {
    text-indent: 2em;
    font-size: 20px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(23, 42, 136, 1);
    line-height: 48px;
  }

  .box-img-black {
    height: 200px;
    background: url("../../static/image/choose-bottom-bg.png") 50% 50%;
  }
  .index-container {
    margin-top: 50px;
    background: #fff;
  }

}
</style>


