<template>
  <div class="shouhou">
    <img src="../../../static/image/售后咨询.jpg" alt="">
    <span>
      产品购买与咨询
    </span>
    <div class="bottom1" >
          <Row  style="margin-bottom:4%">
        <Col span="6" offset="3" style="margin-right:3%">
            <Card  class="card" shadow>
                <p style="font-family:PingFang-SC-Bold;font-size:30px;color:#172A88;margin-bottom:20px;text-align:center;">即时在线咨询</p>
             <p style="color:#535353;font-size:18px; font-family:PingFang-SC-Regular;line-height:25px; ">免费即时在线咨询，为您解答常见售前问题服务时间：<br><br>9:00-12:00 14:00-18:00（工作日）
                        </p>
             <!-- <Button style="background:#1D2088;color:#f6f6f6;margin-top:15%;" >售前在线咨询</Button> -->

             <Button style="color:#172A88;margin-top:5%;" >售前在线咨询</Button>


            </Card>
        </Col>
        <Col span="6" style="margin-right:3%">
         <Card  class="card" shadow>
                <p style="font-family:PingFang-SC-Bold;font-size:30px;color:#172A88;text-align:center;margin-bottom:20px;">项目咨询</p>
             <p style="color:#535353;font-size:18px; font-family:PingFang-SC-Regular;line-height:25px ">免费一对一项目与解决方案咨询服务
               1个工作日内为您安排资深销售顾问
                        </p>
             <Button style="color:#172A88;margin-top:18%;" >立即咨询</Button>

            </Card>
        </Col>
           <Col span="6" >
           <Card  class="card" shadow>
                <p style="font-family:PingFang-SC-Bold;font-size:30px;color:#172A88;text-align:center;margin-bottom:20px;">电话咨询</p>
                <p style="color:#535353;font-size:18px; font-family:PingFang-SC-Regular;line-height:25px "> 全国统一售前服务热线，若遇线路繁忙，请选择 在线交谈 进行产品和服务咨询</p>
                <p style="color:#172A88;font-size:30px;margin-top:16%;font-weight:400;font-family:Impact;">021-2281-9090</p> 
            
            </Card>
        </Col>
    </Row>
     <span style="text-align: center;display:block;margin-bottom:3%">
      合作伙伴
    </span>
    <Row  style="margin-top:50px;">
        <Col span="9" offset="3" style="margin-left:294px">
            <Card  class="card1" shadow>
                <p style="font-family:PingFang-SC-Bold;font-size:30px;color:#172A88;margin-bottom:20px;text-align:center;">成为销售合作伙伴</p>
             <p style="color:#535353;font-size:18px; font-family:PingFang-SC-Regular;line-height:25px; ">智天渠道化市场战略以及全方位的渠道体系支持,期待与您携手
                        </p>
             <Button class="btn" style="color:#172A88;margin-top:10%;" >立即申请</Button>
             <!-- <Button style="background:#1D2088;color:#f6f6f6;margin-top:15%;" >立即申请</Button> -->


            </Card>
        </Col>
        <Col span="9" >
         <Card  class="card1" shadow>
                <p style="font-family:PingFang-SC-Bold;font-size:30px;color:#172A88;text-align:center;margin-bottom:20px;">成为供应合作伙伴</p>
             <p style="color:#535353;font-size:18px; font-family:PingFang-SC-Regular;line-height:25px ">致力于建设高效、互利共赢的供应商协作体系，与您共谋行业发展
                        </p>
             <Button style="color:#172A88;margin-top:10%;" >立即申请</Button>

            </Card>
        </Col>
         
    </Row>
    </div>
  </div>
</template>
<script>
export default {
    name:'shouhou',
    data() {
    return {
     
    };
  },
  mounted(){

  },

}
</script>
<style lang="scss" scoped>
  .shouhou{
       padding-top: 4%;
        // width: 200px;
        height: 100%;
        background: #f6f6f6;
        text-align: center;
        .btn{
          &:hover  {
            color:red;
            // background:#1D2088;
          
          }
        }
    img{
        width: 100%;
        margin-bottom: 60px;
    }
    span{
      font-family: "PingFang-SC-Medium";
      font-size: 40px;
      color: #12277F;
    }

    .bottom1{
      text-align: left;
      margin: 0 auto;
      margin-top: 60px;
      // width: 74.0625rem;
      height: 1018px;  
      background: #f6f6f6;
   .card{
     height: 241px;
      width: 416px;
      margin-right: 5%;
     }
      .card1{
     height: 224px;
      width: 602px;
     }

    }
  }
</style>

