<template>
  <div class="programme">
<img src="../../../static/image/解决方案1.png" alt="">
    <Row :gutter="16"  justify="space-around" class="card" style="padding:20px">
      <div class="title">
          <div class="title-center">
             <div class="greencircle"></div>
            <span>智天产品</span>
              <div class="bluecircle"></div>
          </div>


      </div>
        <i-col class="i-col" span="5" offset="4" style="margin-right:18px">
            <Card shadow>
            <img src="../../../static/image/图.png" alt="">
                <p>恶意代码防护</p>
            </Card>
        </i-col>
        <i-col class="i-col" span="5"  style="margin-right:18px">
            <Card shadow>
            <img src="../../../static/image/图.png" alt="">
                <p>智能DNS</p>
            </Card>
        </i-col>
          <i-col class="i-col" span="5"  style="margin-right:18px">
             <Card shadow>
            <img src="../../../static/image/图.png" alt="">
                <p>网络流量分析及管理系统 </p>
            </Card>
        </i-col>
          <i-col class="i-col" span="5"   >
             <Card shadow>
            <img src="../../../static/image/图.png" alt="">
                <p>网络内容审核系统</p>
            </Card>
        </i-col>
        
        <br>


         <i-col class="i-col" span="5" offset="6" style="margin-right:18px">
            <Card shadow>
            <img src="../../../static/image/图.png" alt="">
                <p>综合控制系统</p>
            </Card>
        </i-col>
        <i-col class="i-col" span="5"  style="margin-right:18px">
            <Card shadow>
            <img src="../../../static/image/图.png" alt="">
                <p>安全管理平台 </p>
            </Card>
        </i-col>
          <i-col class="i-col" span="5"  style="margin-right:18px">
             <Card shadow>
            <img src="../../../static/image/图.png" alt="">
                <p>三维全景GIS系统  </p>
            </Card>
        </i-col>
    </Row>
    
  </div>
</template>
<script>
export default {
    name:'programme',
    data() {
    return {
     
    };
  },
  mounted(){

  },

}
</script>
<style lang="scss" scoped>
  .programme{
    // width: 100%;
    // height: 1000px;
    // position: relative;
  }
  .i-col{
    width: 290px;
    height: 270px;
    text-align: center;
    font-family: "PingFang-SC-Medium";
    font-size:24px;
    color:#003672;
     cursor: pointer;
  }
  .card{
    height: 989px;
    background: url('../../../static/image/解决方案bg.png');
    // background-image: url('../../../static/image/解决方案.png')
    // position: absolute;
    // bottom: 5%;
    .title{
      margin: 0 auto;
      height: 200px;
      .title-center{
        width: 313px;
        height: 93px;
        font-family: "PingFang-SC-Medium";
        font-size: 48px;
        color: #003672;
        border-bottom: 2px solid #003672;
        text-align: center;
        margin: 0 auto;
   
    .greencircle {
      position: absolute;
      margin-top:  35px;
      width: 12px;
      height: 12px;
      background: #003672;
      border-radius: 50%;
      border: 1px solid #003672;
    }
    .bluecircle{
      position: absolute;
      right: 41.8%;
      margin-top:  -35px;
      // margin-right: 5%;
      // float: right;
      width: 12px;
      height: 12px;
      background: #003672;
      border-radius: 50%;
      border: 1px solid #003672;
    }
    
 
      }
    }
  }
</style>


