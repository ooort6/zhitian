<template>
    <div class="cart">
        <div class="loginMsg" v-if="loginMsg">
            <div class="msg">
                <Icon style="color:#2d8cf0" type="ios-alert" />您还没有登录！登录后可显示您账号中已加入的商品哦~
                <Button type="primary" :to="{name:'login'}">去登录</Button>
                <span style="margin:0 20px;font-size:18px;" @click="loginMsg = false"><Icon type="ios-close-circle" /></span>
            </div>
        </div>
        <div class="layout">
            <Table :columns="columns7" :data="cartList"></Table>
            <div class="settlement">
                <span class="goodsCount"> 共{{total}}件商品</span>
                <span class="totalPrice">已优惠0.00元， 合计(不含运费)：￥<strong >3896.00</strong> </span>
                <span class="setPrice"><Button @click="modal = true" type="error">结算</Button></span>
                <Modal v-model="modal"  align="center" title="谢谢！！！">
                    <Card >
                        <div style="text-align:center">
                            <img src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png">
                            <h3>这个项目基于iviewUI库做的，支付尚未开发！</h3>
                        </div>
                    </Card>
                </Modal>
            </div>
        </div> 
    </div>
</template>
<script>
import {cartList} from "@/api/user"
  export default {
        data () {
            return {
                 data6: [
                    {
                        imgSrc: 'https://openfile.meizu.com/group1/M00/06/B7/Cgbj0VusSJ6AH_bMAAimBuNV0-4121.png120x120.jpg',
                        memo: '第一次购买魅族手机',
                        unitPrice: 1999,
                        count:1,
                        countPrice:1999
                    }
                 ],
                modal:false,
                loginMsg:true,
                cartList:[],// 购物车数据
                total:0,// 购物车数据总数
                columns7: [
                    {
                        title: '商品图',
                        key: 'homeUrl',
                        width: 200,
                        render: (h, params) => {
                            return h('img',{
                                attrs:{
                                    src: params.row.homeUrl, style: 'width: 100px;'
                                },
                            })
                        }
                    },
                    {
                        title: '商品描述',
                        key: 'productDesc',
                    },
                    {
                        title: '单价',
                        key: 'price',
                    },
                    {
                        title: '数量',
                        key: 'count',
                         render: (h, params) => {
                            return h('div', [
                                h('InputNumber', { props: { max:5, min:1, }}),
                            ]);
                        }
                    },
                    {
                        title: '小计',
                        key: 'price'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return  h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                       this.remove(params)
                                    }
                                }
                            }, '删除')
                        }
                    }
                ],
            }
        },
        mounted(){
            this._getCartList()
        },
        methods: {
            remove (params) {
                this.cartList.splice(this.cartList.indexOf(params), 1);
            },
            async _getCartList(){
                const res = await cartList()
                if(res.status == 0){
                    this.cartList = res.result
                    this.total = res.count
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.cart{
    padding-top:60px;
    width: 100%;
    .loginMsg{
        width: 100%;
        height: 60px;
        line-height: 60px;
        margin: 20px 0;
        text-align: center;
        background:rgba(0,165,245,.08);
        .msg{  
            font-size: 14px;
        }
    }
    .layout{
        padding-top: 10px;
        width: 1240px;
        margin: auto;
        .settlement{
            width: 100%;
            margin: 20px 0;
            height: 60px;
            line-height: 60px;
            background: rgba(0,165,245,.08);
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            .goodsCount{
                text-align: center;
                flex:3;
            }
            .totalPrice{
                flex:2;
                strong{
                    font-size: 16px;
                    font-weight: bold;
                    color:red;
                }
            }
            .setPrice{
                text-align: right;
                padding-right: 50px;
                flex:1;
            }
        }
    }
}
</style>
