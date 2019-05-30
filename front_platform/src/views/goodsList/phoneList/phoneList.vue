<template>
<!--手机列表 -->
  <div class="phoneList">
    <div class="banner">
      <Carousel arrow="always"  trigger="hover" loop radius-dot>
        <CarouselItem>
          <div class="demo-carousel">
            <img src="@/static/image/banner7.jpg" alt>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img src="@/static/image/banner5.jpg" alt>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img src="@/static/image/banner7.jpg" alt>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img src="@/static/image/banner1.jpg" alt>
          </div>
        </CarouselItem>
      </Carousel>
    </div>
    <main>
      <div class="layout">
        <h1 class="title">
          <span id="title-category">手机</span>
          <ul class="title-filter">
            <li>
              <span>推荐</span>
            </li>
            <li>
              <span>新品</span>
            </li>
            <li>
              <span>价格</span>
            </li>
          </ul>
        </h1>
        <ul class="goodlist">
          <li class="goods-box" v-for="(item,index) in phonelist" :key="index">
            <span class="box-img">
              <img class="goods-img"  :src="item.homeUrl" >
              <span class="box-info">
                <span class="goods-name">{{item.productName}}</span>
                <span class="goods-desc">{{item.praductDesc}}</span>
                <span class="goods-price">
                  <i>￥</i>{{item.price}}
                  <em></em>
                </span>
              </span>
              <span class="product-sign blue">新品</span>
            </span>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>
<script>
import {getphonelist} from '@/api/goods'
export default {
  name: "phoneList",
  data() {
    return {
      phonelist:[],
    };
  },
  mounted() {
    this._getphonelist()
  },
  methods: {
    phoneDetails(item){
			this.$router.push({name:'details', query:{main_id:item.main_id}})
		},
    async _getphonelist(){
			const res = await getphonelist()
			if(res.status == 0){
				this.phonelist = res.result
			}
		}
  },
};
</script>
<style lang="scss" scoped>
.phoneList {
  padding-top: 60px;
  width: 100%;
  .banner {
    width: 100%;
    img {
      display: block;
      width: 100%;
      height: 600px;
    }
  }
  main {
    width: 100%;
    background: #f4f4f4;
    .layout {
      width: 1240px;
      margin: auto;
      overflow: hidden;
      .title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 87px;
        margin-bottom: 25px;
        font-size: 30px;
        font-weight: 400;
        line-height: 1;
        .title-category {
          color: #515151;
        }
        .title-filter {
          position: relative;
          display: flex;
          justify-content: space-between;
          margin: 0;
          li {
            font-size: 16px;
            margin: 0 20px;
            width: 50px;
            transition: all 0.3s linear;
            &:hover {
              cursor: pointer;
              color: #00c3f5;
            }
          }
        }
      }
      .goodlist {
        width: 101%;
        display: flex;
        flex-wrap: wrap;
        .goods-box {
          width: 303px;
          height: 375px;
          text-align: center;
          position: relative;
          margin: 5px;
          background-color: #fff;
          overflow: hidden;
          transition: all 0.3s ease;
          .section-item-box {
            height: 100%;
            display: block;
            position: relative;
            .serction-item-goods {
              position: relative;
              display: block;
              width: 100%;
              height: 100%;
              text-align: center;
              background-repeat: no-repeat;
              background-position: center;
              img {
                height: 230px;
                margin-top: 30px;
              }
            }
          }
          &:hover {
            cursor: pointer;
            transition: all 0.3s linear;
            box-shadow: 2px 4px 5px #ccc;
            transform: translateY(-4px);
          }
        }
        .box-info {
          position: absolute;
          z-index: 10;
          top: 270px;
          left: 0;
          width: 100%;
          text-align: center;
          span {
            display: block;
          }
          .goods-name {
            color: #333;
            font-size: 16px;
            margin-bottom: 2px;
          }
          .goods-desc {
            color: #999;
            font-size: 14px;
          }
          .goods-price {
            position: relative;
            display: inline-block;
            color: #c00;
            font-size: 22px;
            padding-left: 14px;
            i {
              position: absolute;
              left: 0;
              font-size: 14px;
              bottom: 3px;
            }
          }
        }
        .goods-img {
          height: 230px;
          margin-top: 30px;
        }
        .product-sign {
          position: absolute;
          top: 30px;
          left: 30px;
          display: block;
          background-image: linear-gradient(120deg,#ff3149,#ff64a6);
          width: 60px;
          height: 60px;
          line-height: 60px;
          color: #fff;
          font-size: 16px;
          text-align: center;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>

