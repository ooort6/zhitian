<template>
  <div class="programme">
    <div class="inimg">
      <span class="ztext" style="margin-left:2%" @click="$router.push({name: 'product_1'})" >
        恶意代码防护
      </span>
      <span class="zborder" ></span>
       <span class="ztext" @click="$router.push({name: 'product_2'})" >
        智能DNS
      </span>
        <span class="zborder"></span>
       <span class="ztext" @click="$router.push({name: 'product_3'})" >
        网络流量分析及管理系统 
      </span>
        <span class="zborder"></span>
       <span class="ztext" @click="$router.push({name: 'product_4'})" >
        网络内容审核系统
      </span>
        <span class="zborder"></span>
       <span class="ztext" @click="$router.push({name: 'product_5'})" >
        综合控制系统
      </span>
        <span class="zborder"></span>
       <span class="ztext" @click="$router.push({name: 'product_6'})" >
        安全管理平台 
      </span>
        <span class="zborder"></span>
       <span class="ztext" @click="$router.push({name: 'product_7'})" >
        三维全景GIS系统 
      </span>
    </div>
<img src="../../../static/image/解决方案1.png" alt="">
    <Row :gutter="16"  justify="space-around" class="card" style="padding:20px">
      <div class="title">
          <div class="title-center">
             <div class="greencircle"></div>
            <span>智天产品</span>
              <div class="bluecircle"></div>
          </div>


      </div>
        <i-col class="i-col" span="5" offset="4" style="margin-right:18px" >
          <div @click="$router.push({name: 'product_1'})">
             <Card shadow >
            <img src="../../../static/image/图.png" alt="">
                <p>恶意代码防护</p>
            </Card>
          </div>
         
        </i-col>
        <i-col class="i-col" span="5"  style="margin-right:18px">
           <div @click="$router.push({name: 'product_2'})">
            <Card shadow>
            <img src="../../../static/image/图.png" alt="">
                <p>智能DNS</p>
            </Card>
           </div>
        </i-col>
          <i-col class="i-col" span="5"  style="margin-right:18px">
           <div @click="$router.push({name: 'product_3'})">

             <Card shadow>
            <img src="../../../static/image/图.png" alt="">
                <p>网络流量分析及管理系统 </p>
            </Card>
           </div>
        </i-col>
          <i-col class="i-col" span="5"   >
           <div @click="$router.push({name: 'product_4'})">

             <Card shadow>
            <img src="../../../static/image/图.png" alt="">
                <p>网络内容审核系统</p>
            </Card>
           </div>
        </i-col>
        
        <br>


         <i-col class="i-col" span="5" offset="6" style="margin-right:18px">
           <div @click="$router.push({name: 'product_5'})">

            <Card shadow>
            <img src="../../../static/image/图.png" alt="">
                <p>综合控制系统</p>
            </Card>
           </div>
        </i-col>
        <i-col class="i-col" span="5"  style="margin-right:18px">
           <div @click="$router.push({name: 'product_6'})">

            <Card shadow>
            <img src="../../../static/image/图.png" alt="">
                <p>安全管理平台 </p>
            </Card>
           </div>
        </i-col>
          <i-col class="i-col" span="5"  style="margin-right:18px">
           <div @click="$router.push({name: 'product_7'})">

             <Card shadow>
            <img src="../../../static/image/图.png" alt="">
                <p>三维全景GIS系统  </p>
            </Card>
           </div>
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
 
    width: 100%;
    // height: 1000px;
    // position: relative;
    img{
      width: 100%;
    }
       .inimg{
         height: 5%;
         width: 100%;
        //  margin-left:10%;
         position: absolute;
         background:rgba(3,8,142,0.5);
          padding-top: 0.5%;
          padding-left:7%;
         top: 78%;
        //  z-index: 999;
        .ztext{
        width:111px;
                    height:17px;
                    font-size:18px;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    padding:20px;
                    color:#fff;
                    z-index:999;
                    cursor: pointer;
                   margin-right:2%;
        }
        .zborder{
          height: 50px;
                   margin-right:2%;

          border-right:1px solid #6ED5F9;
        }
       }
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


