<template>
  <div class="success2">
    <img src="../../../static/image/cgal.jpg" alt>
    <div class="content_1" >
      <span class="content_2">上海电信</span>
      <div class="title_1">
          <div class="title_header"></div>
          <div class="title_6" @click="$router.push({name: 'success'})">
 <img class="title_3" src="../../../static/image/right.png" alt="">

          <div class="title_2">
              <span class="title_5">政府</span>
          </div>
          </div>
             
          <div class="title_6" @click="$router.push({name: 'success1'})">
 <img class="title_3" src="../../../static/image/right.png" alt="">

          <div class="title_2">
              <span class="title_5">企业</span>
          </div>
          </div>
           <div class="title_6" @click="$router.push({name: 'success2'})">
 <img class="title_3" src="../../../static/image/down.png" alt="">

          <div class="title_2">
              <span class="title_4">运营商</span>
          </div>
          </div>
           <div class="title_6" @click="$router.push({name: 'success3'})">
 <img class="title_3" src="../../../static/image/right.png" alt="">

          <div class="title_2">
              <span class="title_5">教育</span>
          </div>
          </div>
      </div>
      <div class="content_6">
        <span class="content_3">实施背景:</span>
        <div class="content_4"></div>
        
                           

                        
        <p class="content_5">员工数量约8000人。网路出口带宽2000M</p>
        <p class="content_5">某内部员工在外网机房租用服务器空间并存储不良内容，被公安机关传唤。</p>
      </div>

      <div class="content_6">
        <span class="content_3">项目目标</span>
        <div class="content_4"></div>



        <p class="content_5">能及时发现网络内上传违规内容的行为，发出告警信息，</p>
        <p class="content_5">并提供相关证据辅助管理工作。</p>
      </div>

      <div class="content_6">
        <span class="content_3">系统上线</span>
        <div class="content_4"></div>
        <p class="content_5">2014年1月，上线后发现网内数个用户利用网络发送不良信息，及时通过短信预警管理人员。</p>
        <p class="content_5">管理人员通过相关管理措施，对相关人员进行劝诫。</p>
      </div>

      <div class="content_6">
        <span class="content_3">运行效果</span>
        <div class="content_4"></div>
        <p class="content_5">本系统为管理人员提供了必要的技术管理手段，</p>
        <p class="content_5">通过行政管理与宣传相结合，网内传输不良内容的行为基本杜绝</p>
      </div>

      <span class="content_7">相关产品</span>
      <img class="content_8" src="../../../static/image/right1.png" alt="">
    <span class="content_9">网络内容审核系统</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "success2",
  data() {
    return {};
  },
  mounted() {}
  // methods(){

  // }
};
</script>
<style lang="scss" scoped>
.success2 {
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
