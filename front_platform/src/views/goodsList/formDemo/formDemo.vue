<template>
  <div class="formDemo">

    <Row>
      <i-col span="4" offset="7">
        <div class="i-col" :class="{active:shows==1}" @click="oneshow()">
          <span>资料下载</span>
        </div>
      </i-col>
      <i-col span="4">
        <div class="i-col" :class="{active:shows==2}" @click="twoshow()">
          <span>解决方案</span>
        </div>
      </i-col>
      <i-col span="4">
        <div class="i-col" :class="{active:shows==3}" @click="threeshow()">
          <span>第三方报告</span>
        </div>
      </i-col>
    </Row>
    <br>
<Row type="flex" justify="center">
  <Page class="page" :total="100" />
</Row>
   
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
  // width: 100%;
  // height: 100%;
  // background: red;
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

