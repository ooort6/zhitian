<template>
  <div class="success1">
    <img src="../../../static/image/cgal.jpg" alt>
    <div class="content_1" >
      <span class="content_2">上海信产通信服务有限公司</span>
      <div class="title_1">
          <div class="title_header"></div>
          <div class="title_6" @click="$router.push({name: 'success'})">
 <img class="title_3" src="../../../static/image/right.png" alt="">

          <div class="title_2">
              <span class="title_5">政府</span>
          </div>
          </div>
             
          <div class="title_6" @click="$router.push({name: 'success1'})">
 <img class="title_3" src="../../../static/image/down.png" alt="">

          <div class="title_2">
              <span class="title_4">企业</span>
          </div>
          </div>
           <div class="title_6" @click="$router.push({name: 'success2'})">
 <img class="title_3" src="../../../static/image/right.png" alt="">

          <div class="title_2">
              <span class="title_5">运营商</span>
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
        <p class="content_5"> 业务内容繁多，建立体验式营销场馆。</p>
        <p class="content_5">为实现沉浸式业务体验场景，现场使用大量传感器、智能设备以及媒体播放设备。</p>
      </div>

      <div class="content_6">
        <span class="content_3">项目目标</span>
        <div class="content_4"></div>

                            

                        
        <p class="content_5">精简现场设备操作人员，体现运营商在IT技术领域的先进性。</p>
        <p class="content_5">能根据业务体验者所属行业不同，快速调度全馆所有设备的内容。</p>
      </div>

      <div class="content_6">
        <span class="content_3">系统上线</span>
        <div class="content_4"></div>

                           

                        
        <p class="content_5"> 采用物联网、设备接口调用、嵌入式系统开发等，实现馆内全部电器设备统一接入及控制。实现全场一人操作。</p>
        <p class="content_5">开发智能设备专用AGENT，采用服务器统一管理全部演示内容，实现全馆内容一键切换。</p>
      </div>

      <div class="content_6">
        <span class="content_3">运行效果</span>
        <div class="content_4"></div>

                            


                        
        <p class="content_5">系统运行稳定可靠，未出现过软件BUG导致系统控制失败的故障。</p>
        <p class="content_5">系统良好的可扩展性，新设备类型可方便接入系统。</p>
        <p class="content_5">降低系统操作维护成本，全馆近千台设备仅需一人操作。</p>

      </div>

      <span class="content_7">相关产品</span>
      <img class="content_8" src="../../../static/image/right1.png" alt="">
    <span class="content_9">综合控制系统</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "success1",
  data() {
    return {};
  },
  mounted() {}
  // methods(){

  // }
};
</script>
<style lang="scss" scoped>
.success1 {
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
