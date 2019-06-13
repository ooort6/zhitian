<template>
  <div class="success3">
    <img src="../../../static/image/cgal.jpg" alt>
    <div class="content_1" >
      <span class="content_2">崇明区教育局</span>
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
 <img class="title_3" src="../../../static/image/right.png"  alt="">

          <div class="title_2">
              <span class="title_5">运营商</span>
          </div>
          </div>
           <div class="title_6" @click="$router.push({name: 'success3'})">
 <img class="title_3" src="../../../static/image/down.png"  alt="">

          <div class="title_2">
              <span class="title_4">教育</span>
          </div>
          </div>
      </div>
      <div class="content_6">
        <span class="content_3">实施背景:</span>
        <div class="content_4"></div>
        <p class="content_5">教育部发文要求做好各中小学的安全工作。</p>
        <p class="content_5">上海市教委要求各区教育局完成安全管理中心建设工作。</p>
        <p class="content_5">某区教育局无专门安全管理信息系统。</p>
        <p class="content_5">安全工作处理效率、管理手段、安全责任到位方面存在较多问题。</p>

      </div>

      <div class="content_6">
        <span class="content_3">项目目标</span>
        <div class="content_4"></div>
        <p class="content_5">安全管理工作信息化。安全资产、危险隐患动态管理。安全工作考核量化和科学化。</p>
        <p class="content_5">良好的可扩充性，与已有系统对接。开放接口，方便后续建设安防系统接入，避免信息孤岛。</p>
      </div>

      <div class="content_6">
        <span class="content_3">系统上线</span>
        <div class="content_4"></div>
        <p class="content_5">实现安全管理工作相关公文流转、隐患上报、隐患处置工作闭环。</p>
        <p class="content_5">日常安全巡检工作制度化，工作任务内容明确。使用移动APP执行巡检任务，数据上报及时。</p>
      </div>

      <div class="content_6">
        <span class="content_3">运行效果</span>
        <div class="content_4"></div>

                            

                        
        <p class="content_5">系统完成安全工作的分析统计，实现安全工作的智能预警及处理。</p>
        <p class="content_5">基于地理信息的管理界面以及图形化统计界面，直观易懂，管理便捷高效。</p>
      </div>

      <span class="content_7">相关产品</span>
      <img class="content_8" src="../../../static/image/right1.png" alt="">
    <span class="content_9">安全管理平台</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "success3",
  data() {
    return {};
  },
  mounted() {}
  // methods(){

  // }
};
</script>
<style lang="scss" scoped>
.success3 {
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
