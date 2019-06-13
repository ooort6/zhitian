<template>
  <div class="success">
    <img src="../../../static/image/cgal.jpg" alt>
    <div class="content_1" >
      <span class="content_2">静安区政府</span>
      <div class="title_1">
          <div class="title_header"></div>
          <div class="title_6">
 <img class="title_3" src="../../../static/image/down.png" alt="">

          <div class="title_2">
              <span class="title_4">政府</span>
          </div>
          </div>
             
          <div class="title_6">
 <img class="title_3" src="../../../static/image/right.png" alt="">

          <div class="title_2">
              <span class="title_5">企业</span>
          </div>
          </div>
           <div class="title_6">
 <img class="title_3" src="../../../static/image/right.png" alt="">

          <div class="title_2">
              <span class="title_5">运营商</span>
          </div>
          </div>
           <div class="title_6">
 <img class="title_3" src="../../../static/image/right.png" alt="">

          <div class="title_2">
              <span class="title_5">教育</span>
          </div>
          </div>
      </div>
      <div class="content_6">
        <span class="content_3">实施背景:</span>
        <div class="content_4"></div>
        <p class="content_5">拥有主机约2000台，20多台服务器。</p>
        <p class="content_5">由国内知名安全公司的专业维护团队进行网络安全及运行维护。</p>
      </div>

      <div class="content_6">
        <span class="content_3">项目目标</span>
        <div class="content_4"></div>

        <p class="content_5">验证网络是否安全。是否存在僵尸网络病毒。</p>
        <p class="content_5">如果存在病毒，提供相关杀毒软件进行查杀。</p>
      </div>

      <div class="content_6">
        <span class="content_3">系统上线</span>
        <div class="content_4"></div>

        <p class="content_5">2013年1月上线当月即检测出约6%主机及1台DNS服务器已被木马/僵尸网络控制。证明网络存在安全风险。</p>
        <p class="content_5">提供病毒验证及查杀工具，培训专业维护团队进行应急处置。快速消除木马/僵尸网络。</p>
      </div>

      <div class="content_6">
        <span class="content_3">运行效果</span>
        <div class="content_4"></div>

        <p class="content_5">本系统为维护团队提供了必要的技术手段，及时发现中毒机器，减少网络安全风险。</p>
        <p class="content_5">系统一处部署，全网防护。操作简单，安全可靠，成本降低，效率提升优势明显。</p>
      </div>

      <span class="content_7">相关产品</span>
      <img class="content_8" src="../../../static/image/right1.png" alt="">
    <span class="content_9">恶意代码防护系统</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "success",
  data() {
    return {};
  },
  mounted() {}
  // methods(){

  // }
};
</script>
<style lang="scss" scoped>
.success {
  // width: 100%;
  height: 1500px;
  background: #fbfbfb;
  .content_1 {
    padding-left: 431px;
    padding-top: 108px;
    position: relative;
    // height: 1500px;
    // background: #FBFBFB;
    .content_2 {
      display: block;
      font-size: 30px;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(52, 65, 145, 1);
      margin-bottom: 53px;
    }
    .title_1{
        width: 420px;
        height: 314px;
        // background: red;
        position: absolute;
        top: 108px;
        right: 400px;
        .title_header{
            padding-top: 5%;
            width:308px;
            height:1px;
            background:rgba(255,255,255,1);
            border-bottom:1px solid rgba(151,151,151,1);
        }
        .title_6{
            margin-bottom: 25px;
        }
           .title_3{
                margin-top: 12px;
                margin-right: 12px;
                float: left;
            }
        .title_2{
            margin-top: 12px;
                width: 280px;
                margin-left: 30px;
                border-bottom: 1px solid #979797;
         cursor: pointer;
            .title_4{
                // display: block;
              
                font-size:24px;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(23,42,136,1);
            }
              .title_5{
                // display: block;
              
           font-size:24px;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(98,98,98,1);
            }
        }
    }
    .content_3 {
      display: block;
      font-size: 20px;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(68, 68, 68, 1);
    }
    .content_4 {
      width: 81px;
      height: 1px;
      background: rgba(151, 151, 151, 1);
      margin-bottom: 15px;
    }
    .content_5 {
      font-size: 18px;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(68, 68, 68, 1);
    }
    .content_6 {
      margin-bottom: 44px;
    }
    .content_7{
        background: #172A88;
        width:87px;
height:35px;
display: block;
font-size:20px;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(255,255,255,1);
text-align: center;
vertical-align: middle;
float: left;
    }
    .content_8{
        float: left;
        margin-left: 18px;
        margin-top: 9px;
        margin-right: 15px;

    }
    .content_9{
        font-size:20px;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(88,88,88,1);
    }
  }
}
</style>
