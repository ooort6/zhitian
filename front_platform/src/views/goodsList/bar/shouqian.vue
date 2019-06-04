<template>
  <div class="shouqian">
    <img src="../../../static/image/如何购买.png" alt="">
    <span>
      本页面仅受理售前的购买咨询，如需售后帮助，请点击 <a href="#" style="color:red">链接</a>
    </span>
    <div class="bottom1" >
          <Row  style="padding-left:40px">
        <Col span="7">
            <Card  shadow>
                <p style="font-family:PingFang-SC-Bold;font-size:30px;color:#172A88">在线交谈</p>
                <img style="width:84px;height:80px;margin-left:35%;margin-top:5%;opacity:0.5;" src="../../../static/image/在线交谈_jammy.png" alt="">
             <p style="color:#535353;font-size:18px; font-family:PingFang-SC-Regular;line-height:25px ">工作日 9:00-12:00 14:00-18:00客服代表一对一即时消息沟通</p>
             <Button style="background:#1D2088;color:#f6f6f6;margin-top:15%;" >立即在线交谈</Button>

            </Card>
        </Col>
        <Col span="7" offset="1">
         <Card  shadow>
                <p style="font-family:PingFang-SC-Bold;font-size:30px;color:#172A88">项目咨询</p>
                <img style="width:84px;height:80px;margin-left:35%;margin-top:5%;opacity:0.5;" src="../../../static/image/项目咨询.png" alt="">
             <p style="color:#535353;font-size:18px; font-family:PingFang-SC-Regular;line-height:25px ">免费一对一项目与解决方案咨询服务
               1个工作日内为您安排资深销售顾问
                        </p>
             <Button style="color:#172A88;margin-top:15%;" >填写咨询表单</Button>

            </Card>
        </Col>
           <Col span="7" offset="1">
           <Card  shadow>
                <p style="font-family:PingFang-SC-Bold;font-size:30px;color:#172A88">电话咨询</p>
                <img style="width:84px;height:80px;margin-left:35%;margin-top:5%;opacity:0.5;" src="../../../static/image/电话咨询.png" alt="">
                <p style="color:#535353;font-size:18px; font-family:PingFang-SC-Regular;line-height:25px "> 全国统一售前服务热线，若遇线路繁忙，请选择 在线交谈 进行产品和服务咨询</p>
                <p style="color:#172A88;font-size:30px;margin-top:5%">021-2281-9090</p> 
            
            </Card>
        </Col>
    </Row>
    </div>
  </div>
</template>
<script>
export default {
    name:'shouqian',
    data() {
    return {
     
    };
  },
  mounted(){

  },

}
</script>
<style lang="scss" scoped>
  .shouqian{
       padding-top: 4%;
        // width: 200px;
        height: 100%;
        background: #f6f6f6;
        text-align: center;
    img{
        width: 100%;
        margin-bottom: 60px;
    }
    span{
      font-family: "PingFang-SC-Regular";
      font-size: 18px;
      color: #919191;
    }

    .bottom1{
      text-align: left;
      margin: 0 auto;
      margin-top: 60px;
      width: 74.0625rem;
      height: 545px;
      background: #f6f6f6;
      .ivu-card{
        height: 381px;
   
      }
    }
  }
</style>

