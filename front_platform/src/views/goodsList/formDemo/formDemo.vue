<template>
  <div class="formDemo">
    <div class="content">

   
    <Row>
      <i-col span="6" offset="2">
        <div class="i-col" :class="{active:shows==1}" @click="oneshow()">
          <span>资料下载</span>
        </div>
      </i-col>
      <i-col span="6" offset="1">
        <div class="i-col" :class="{active:shows==2}" @click="twoshow()">
          <span>解决方案</span>
        </div>
      </i-col>
      <i-col span="6" offset="1">
        <div class="i-col" :class="{active:shows==3}" @click="threeshow()">
          <span>第三方报告</span>
        </div>
      </i-col>
    </Row>
    <br>
    <ul>
      <li v-for="item in items" v-bind:key="item.id">
          <span class="jiantou"></span>
          <span class="ztext">智天科技宣传手册</span>
          <img class="zimg" src="@/static/image/下载.png" alt="">
          <span class="zdate">{{date}}</span>

      </li>
     

    </ul>
<Row type="flex" justify="center">
  <Page class="page" :total="100" />
</Row>
    </div>
  </div>
</template>

<script>
export default {
  name: "formDemo",
  data() {
    return {
      color1: "#D8D8D8",
      color2: "#F2F2F2",
      shows: 1,
      date:"2019-6-4",
      items:[{id:1},{id:2},{id:3}]
    };
  },
  methods: {
   
    oneshow() {
      this.shows=1
    },
    twoshow() {
      this.shows=2
    },
    threeshow() {
      this.shows=3
    }
  }
};
</script>

<style lang="scss" scoped>
.formDemo {
  // position: absolute;
  padding-top: 5%;
  width: 100%;
  height: 100%;
  background: #f6f6f6;
  .content{
    width: 60%;
    height: 100%;
    padding: 30px;
    margin:0 auto;
    background: #fff
  
  }
    ul{

      margin-top: 2%; 
      margin-bottom: 2%; 
      // width: 
      margin-left: 8%;
        li{
            height: 54px;
            width: 90%;
            background: #F2F2F2;
            margin-bottom: 1%;
            .jiantou{
                width: 7px;
                height: 7px;
                border-top: 2px solid #828282;
                border-right: 2px solid #828282;
                transform: rotate(45deg);
                margin-left: 20px;
            }
            .ztext{
              margin-left: 8%;
               margin-top: -0.5%; 
            }
            .zdate{
              float: right;
              margin-top: -3%;
              margin-right:10%;
              
            }
            .zimg{
              display: block;
              float: right;
              margin-top: -1.8%;
              margin-right:4%;


            }
        }
    }
  .i-col {
    text-align: center;

    margin-right: 1%;
    background: #F2F2F2;
    width: 254px;
    height: 54px;
  }
  span {
    display: block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    font-family: "PingFang-SC-Medium";
    font-size: 18px;
    color: #7E7E7E;
    cursor: pointer;
  }
  .active {
    background: #d8d8d8;
  }
  .page{
    
  }
}
</style>

