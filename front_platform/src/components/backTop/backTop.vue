<template>
<div>

        <BackTop :height='0' :right="3" :bottom="655" >
        <div class="top"
      
        
        >
            <img
        src="../../static/image/TOP.png"
        style=" position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"
        alt
      >
        </div>
    </BackTop>
 <div id="dg" class="top" style=" bottom: 600px; z-index:2">
      <img
        src="../../static/image/TOP.png"
        style=" position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"
        alt
      >
    </div>
      <div id="dg" class="top" style=" bottom: 545px;">
      <img
        src="../../static/image/售前咨询 (1).png"
        style=" position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"
        alt
      >
    </div>
    <div id="dg" class="top" style=" bottom: 490px;">
      <img
        src="../../static/image/售后咨询.png"
        style=" position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"
        alt
      >
    </div>
    <div id="dg" class="top" style=" bottom: 435px;">
      <img
        src="../../static/image/合作.png"
        style=" position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"
        alt
      >
    </div>
    <div id="dg" class="top" style=" bottom: 380px;">
      <img
        src="../../static/image/资料中心.png"
        style=" position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"
        alt
      >
    </div>
    <div id="dg" class="top" style=" bottom: 325px;">
      <img
        src="../../static/image/联系我们.png"
        style=" position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"
        alt
      >
    </div>
    <div id="dg" class="top1" style=" bottom: 270px; ">
      <img
        src="../../static/image/取消.png"
        style=" position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"
        alt
      >
    </div>
</div>
     

</template>
<script>
export default {
    name:'backTop'
}
</script>
<style lang="scss" scoped>
      .top {
    z-index: 9999;
    text-align: center;
    position: fixed;
    right: 3px;
    background: #fff;
    // border-radious: 2px;
    border-radius: 2px;
    border: 1px solid #d7d7d7;
    border-bottom: none;

    width: 55px;
    height: 55px;
    cursor: pointer;

  }
   .top1 {
    z-index: 9999;
    text-align: center;
    position: fixed;
    right: 3px;
    background: #fff;
    // border-radious: 2px;
    border-radius: 2px;
    border: 1px solid #d7d7d7;
    // border-bottom: none;

    width: 55px;
    height: 55px;
    cursor: pointer;

  }
</style>
