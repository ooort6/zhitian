<template>
    <div class="headerBar">
        <div class="layout">
            <!-- <div class="logo"><h1 @click="$router.push({name: 'home'})">MEIZU</h1></div> -->
            <div class="logo"><img @click="$router.push({name: 'home'})" src="@/static/image/4.png" alt="" ></div>
             <!-- <div class="zhuce"> -->
              <!-- <Button type="primary"  @click="$router.push({name:'regist'})">立即注册</Button> -->
            <!-- </div> -->
            <!-- <div class="person"> -->
              <!-- <span><Icon  type="md-person"/>
                <h2 v-if="hasLogin == undefined"  @click="$router.push({name:'login'})">登录</h2>
                <h2 v-else @click="logout">退出</h2>
              </span> -->
              <!-- <span  class="carIcon" @click="goToCart">
                <Badge :count="1" type="error" :offset="[20,-3]">
                  <Icon type="md-cart" />
                </Badge>
              </span> -->
            <!-- </div> -->
          
            <div class="nav">
               <Menu mode="horizontal" :theme="'light'" >
                    <MenuItem class="nav-item" name="home" :to="{name:'home'}" >
                        <!-- <Icon type="ios-paper" /> -->
                        首页
                    </MenuItem>
                   
                    <MenuItem class="nav-item" name="programme" :to="{name:'programme'}">
                    产品与解决方案
                    
                    </MenuItem>
                    <MenuItem class="nav-item" name="success" :to="{name:'success'}">
                        <!-- <Icon type="ios-people" /> -->
                        成功案例
                    </MenuItem>
                    <MenuItem class="nav-item" name="cooperation" :to="{name:'cooperation'}">
                        <!-- <Icon type="ios-people" /> -->
                        合作发展
                    </MenuItem>
                    <MenuItem class="nav-item" name="aboutUs" :to="{name:'aboutUs'}">
                        <!-- <Icon type="ios-people" /> -->
                        关于我们
                    </MenuItem>
                    <MenuItem class="nav-item" name="formDemo" :to="{name:'formDemo'}">
                        <!-- <Icon type="ios-people" /> -->
                        资料中心
                    </MenuItem>
                
                </Menu>
            </div>
        </div>
    </div>
</template>
<script>
import {loginOut } from "@/api/user"; 
export default {
    name:'headerBar',
    data(){
      return{
        hasLogin:'',
      }
    },
    mounted(){
      this.hasLogin = localStorage.getItem('userId')
    },
    methods:{
      goToCart(){
        this.$router.push({name:"cart"})
      },
      async logout(){
        const res = await loginOut()  
        if(res.status == 0){
          localStorage.clear()
          this.$router.push({name:'login'})
        }
      }
    }
}
</script>
<style lang="scss" scoped>
.headerBar{
    width: 100%;
    background: #fff;
    position:fixed;
    border-bottom: 1px solid #eee;
    z-index: 999;
    box-sizing: border-box;
    box-shadow:0px 5px 5px 0px rgba(200,200,200,0.4);

    .layout{
        overflow: hidden;
        width: 1240px;
        margin: 0 400px;
        .logo{
          height: 69px;
          float: left;
          line-height: 69px;
          img{
            height: 55.2px;
            width: 156px;
            margin-top: 10px;
            display: block;
            &:hover{
            transition: all 0.8s linear;
            // cursor: pointer;
            }
          }
          h1{
            font-size: 40px;
            letter-spacing: 1px;
            color:#2d8cf0;
            &:hover{
              color:#333;
              transition: all 0.8s linear;
              cursor: pointer;
            }
          }
        }
        .person{
          float: right;
          height: 69px;
          font-size: 24px;
          line-height: 69px;
          width: 85px;
          .carIcon:hover{
            color: #2d8cf0;
            cursor: pointer;
          }
          h2{
            display: inline-block;
            font-size: 14px;
            color:#333;
            margin-right:30px;
            &:hover{
              cursor: pointer;
              color: #2d8cf0;
            }
          }
        }
        .zhuce{
          float: right;
          height: 69px;
          font-size: 24px;
          line-height: 69px;
          width: 120px;
        }
        .nav{
          margin-left: 10%;
          float: left;
          height: 69px; 
        }
       .ivu-menu-horizontal{
        // background: red;
        border: none;
        }
        // .ivu-menu .ivu-menu-light .ivu-menu-horizontal{
        //   background: red;
        // }

        .ivu-menu-horizontal.ivu-menu-light:after{
          background: none;
        }
        .nav-item{
          color: #172A88;
          float: left;
          display: block;
          margin-right: 13px;
          font-size: 18px;
          margin-top:1%;
          border: none;
        }
        .nav-item1{
           display: block;
            margin-right: 13px;
        }
          .nav-item .ivu-menu-item .ivu-menu-item-active .ivu-menu-item-selected{
          border-bottom:none;

      }
      .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover{
          color: #2d8cf0;
          border-bottom:1px solid #2d8cf0; 

      }
    }
}
</style>

