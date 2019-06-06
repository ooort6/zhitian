<template>
  <div>
    <BackTop :height="0" :right="3" :bottom="655">
      <div class="top">
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
    <div id="dg" class="top" style=" bottom: 545px;" @click="$router.push({name: 'shouqian'})">
      <img
        src="../../static/image/售前咨询 (1).png"
        style=" position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"
        alt
      >
      <span style="color:#333333;font-size:1px;display:block; margin-top:70%">
        售前咨询
      </span>
    </div>
    <div id="dg" class="top" style=" bottom: 490px;" @click="$router.push({name: 'shouhou'})"> 
      <img
        src="../../static/image/售后咨询.png"
        style=" position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"
        alt
      >
      <span style="color:#333333;font-size:1px;display:block; margin-top:70%">
        售后咨询
      </span>
    </div>
    <div id="dg" class="top" style=" bottom: 435px;" @click="$router.push({name: 'hezuoform'})">
      <img
        src="../../static/image/合作.png"
        style=" position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"
        alt
      >
      <span style="color:#333333;font-size:1px;display:block; margin-top:70%">
        申请合作
      </span>
    </div>
    <div id="dg" class="top" style=" bottom: 380px;" @click="$router.push({name: 'formDemo'})">
      <img
        src="../../static/image/资料中心.png"
        style=" position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"
        alt
      >
      <span style="color:#333333;font-size:1px;display:block; margin-top:70%">
        资料中心
      </span>
    </div>
    <div id="dg" class="top" style=" bottom: 325px;" @click="$router.push({name: 'shouhou'})" >
    <!-- <div id="dg" class="top" style=" bottom: 325px;"  @click="instance('success')"> -->

      <img
        src="../../static/image/联系我们.png"
        style=" position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"
        alt
      >
      <span style="color:#333333;font-size:1px;display:block; margin-top:70%">
        联系我们
      </span>
    </div>
    <!-- <div id="dg" class="top1" style=" bottom: 270px; ">
      <img
        src="../../static/image/取消.png"
        style=" position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"
        alt
      >

    </div> -->
  </div>
</template>
<script>
export default {
  name: "backTop",
  methods: {
            instance (type) {
                const title = '电话号码';
                const content = '<p>xxxxxxxxx</p>';
                switch (type) {
                    case 'success':
                        this.$Modal.success({
                            title: title,
                            content: content
                        });
                        break;
                }
            }
        }
};
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
