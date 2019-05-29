<template>
    <div class="details">
        <main class="wrapper page-sku">
            <div class="fast-nav ">
                <div class="-container">
                    <ul class="-ulist">
                        <li class="-item">
                            <a class="-link" >概述</a>
                        </li>
                        <li class="-item">
                            <a class="-link">参数</a>
                        </li>
                        <li class="-item">
                            <a class="-link">常见问题</a>
                        </li>
                    </ul>
                    <span class="-name">{{detailsInfo.productName}}</span>
                </div>
            </div>
            <section class="container">
                <div class="preview">
                    <div class="preview_current_img">
                        <img :src="current_img" alt="">
                    </div>
                    <ul class="preview-list">
                        <li class="img-item" v-for="(item,index) in detailsInfo.product_details" :key="index" @click="setCurrentImg(item)">
                            <img :src="item.smallImg" alt="">
                        </li>
                    </ul>
                </div>
                <div class="property">
                    <div class="property-hd">
                        <h1>{{detailsInfo.productName}}</h1>
                        <p class="mod-info active">{{detailsInfo.productDesc}}</p>
                    </div>
                    <div class="property-sell">
                       <div class="property-sell-price clearfix">
                            <div class="mod-price">
                                <small>¥</small>
                                <span class="vm-money">{{detailsInfo.price}}</span>
                            </div>
                            <div class="mod-original" style="display:block;"></div>
                        </div>
                    </div>
                    <div class="property-service">
                        <div class="row-wrap">
                            <span>支&nbsp;&nbsp;持</span>
                            <em>顺丰发货</em><em>7天无理由退货</em>
                        </div>
                        <div class="row-wrap">
                            <span>配送服务</span>
                            <Cascader style="display:inline-block" :data="data" v-model="value2"></Cascader>
                        </div>
                        <div class="row-wrap">
                            <span>颜色分类</span>
                            <Tag type="dot" closable>白色</Tag>
                            <Tag type="dot" closable>黑色</Tag>
                        </div>
                        <div class="row-wrap">
                            <span>内存容量</span>
                            <Tag type="dot" closable 
                            v-for="(item,index) in detailsInfo.product_storage" 
                            :key="index">{{item.s_value}}</Tag>
                        </div>
                    </div>
                    <div class="btn-group">
                        <Button type="primary"  size="large">立即购买</Button>
                        <Button type="primary"  size="large" @click="addCart">加入购物车</Button>
                        <!-- <Button type="primary" v-if="detailsInfo.status == 2" disabled size="large">已售完</Button> -->
                    </div>
                </div>
            </section>
            <section class="container details">
                <Tabs value="name1">
                    <TabPane label="商品详情" name="name1">
                        <img v-for="(item,index) in detailsInfo.serviceDesc" :src="item.serImgUrl" :key="index">
                    </TabPane>
                    <TabPane label="规格参数" name="name2">规格参数</TabPane>
                    <TabPane label="常见问题" name="name3">常见问题</TabPane>
                </Tabs>
            </section>
        </main>
    </div>
</template>
<script>
import {getdetailsById,addCart} from '@/api/goods'
export default {
    data () {
        return {
            current_img:"",// 当前详情数据的展示图
            detailsInfo:{},
            value2: ['jiangsu', 'suzhou', 'zhuozhengyuan'],
            data: [{
                value: 'beijing',
                label: '北京',
                children: [
                    {
                        value: 'gugong',
                        label: '故宫'
                    },
                    {
                        value: 'tiantan',
                        label: '天坛'
                    },
                    {
                        value: 'wangfujing',
                        label: '王府井'
                    }
                ]
            }, {
                value: 'jiangsu',
                label: '江苏',
                children: [
                    {
                        value: 'nanjing',
                        label: '南京',
                        children: [
                            {
                                value: 'fuzimiao',
                                label: '夫子庙',
                            }
                        ]
                    },
                    {
                        value: 'suzhou',
                        label: '苏州',
                        children: [
                            {
                                value: 'zhuozhengyuan',
                                label: '拙政园',
                            },
                            {
                                value: 'shizilin',
                                label: '狮子林',
                            }
                        ]
                    }
                ],
            }]
        }
    },
    mounted(){
        this._getdetailsById(this.$route.query.main_id)
    },
    methods:{
        setCurrentImg(item){ // 点击浏览图片
            this.current_img = item.bigImg
        },
        addCart(){
            this._addCart(this.$route.query.main_id)
        },
        async _addCart(main_id){
            const res= await addCart({main_id})
            if(res.status == 0){
                console.log(res)
                this.$Message.success(res.msg);
            }else{
                this.$Message.error(res.msg);
            }
        },
        async _getdetailsById(id){
            this.$Spin.show()
            const res = await getdetailsById(id)
            if(res.status == 0){
                setTimeout(()=>{
                    this.detailsInfo = res.result
                    this.current_img = res.result.product_details[0].bigImg
                    this.$Spin.hide()
                },2000)
            }
        },
    }
    
}
</script>

<style lang="scss" scoped>
.details{
    width: 100%;
    padding-top: 60px;
    min-width: 1240px;
    .page-sku {
        position: relative;
        padding-top: 66px;
        line-height: 1.5;
        .fast-nav{
            position:relative;
            top: 0;
            width: 100%;
            left: 0;
            z-index: 900;
            border-bottom: 1px solid #dedede;
            opacity: .9;
            background: #f6f8fb;
            display: block;
            .-container{
                width: 1240px;
                height: 70px;
                margin: 0 auto;
                position: relative;
                .-ulist {
                    float: right;
                    margin-top: 26px;
                    margin-right: -15px;
                    li{
                        float: left;
                        position: relative;
                        z-index: 1;
                        border-right: 1px solid #dedede;
                        .-link {
                            display: block;
                            padding: 0 20px;
                            line-height: 20px;
                            font-size: 16px;
                            color: #333;
                            text-decoration: none;
                            transition: color .3s;
                            &:hover{
                                color:#27b3ff;
                            }
                        }
                    }
                }
                .-name{
                    position: absolute;
                    left: 0;
                    top: 15px;
                    font-size: 26px;
                }
            }
            
        }
        .details{
            margin-top: 80px;
        }
        .container{
            margin: auto;
            margin-bottom: 40px;
            background: #fff;
            width: 1240px;
            overflow: hidden;
            margin-left: auto;
            margin-right: auto;
            .preview{
                float: left;
                width: 560px;
                margin-right: 40px;
                .preview_current_img{
                    vertical-align: top;
                    height: 560px;
                    width: 560px;
                    img{
                        width: 100%;
                    }
                }
                .preview-list{
                    width: 400px;
                    margin: auto;
                    height: 100px;
                    display: flex;
                    justify-content: space-around;
                    .img-item{
                        width: 100px;
                        padding: 10px;
                        margin: 0 5px;
                        box-sizing: border-box;
                        &:hover{
                            border: 1px dashed #27b3ff;
                            cursor: pointer;
                        }
                        img{
                            width: 100%;
                        }
                    }
                }
            }
            .property{
                position: relative;
                float: left;
                width: 500px;
                margin: 50px;
                font-size: 12px;
                padding-top: 25px;
                .property-hd{
                    position: relative;
                    padding-top: 30px;
                    margin-bottom: 12px;
                    h1{
                        margin-bottom: 4px;
                        font-size: 28px;
                        line-height: 1.2;
                        font-weight: 700;
                        color: #262626;
                    }
                    .mod-info{
                          font-size: 14px;
                          color: red;  
                    }
                }
                .property-sell{
                    position: relative;
                    background: #f4f6fa;
                    padding: 16px 0 12px;
                    .property-sell-price{
                        height: 36px;
                        overflow: hidden;
                        padding-left: 10px;
                        .mod-price{
                            margin-right: 8px;
                            line-height: 36px;
                            small{
                                font-size: 24px;
                                color: red;
                            }
                            .vm-money{
                                color: #e02b41;
                                font-size: 36px;
                                font-weight: 500;
                            }
                        }
                    }
                }
                .property-service{
                    border-bottom: 1px dashed #dedede;
                    padding: 18px 0;
                    .row-wrap{
                        margin: 15px;
                        padding: 0px 5px;
                        span{
                            margin-right: 10px;
                        }
                  }
                }
                .btn-group{
                    padding: 20px;
                    Button{
                        margin: 0 5px;
                    }
                }
            }
        }
    }
}
</style>
