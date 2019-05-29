const express     = require('express');
const router      = express.Router()
const User        = require('../models/user')
const phonelists        = require('../models/phonelists')
const headsetlists        = require('../models/headsetlists')
const partlists        = require('../models/partlists')
const arroundlists    = require('../models/arroundlists')

// 手机列表
router.get('/phonelists', async (req, res, next) => {
    const doc = await phonelists.find()
    try{
        if(doc) {
            res.json({
                status:0,
                msg:"success",
                result:doc
            })
        }else{
            res.json({
                status:1,
                msg:"fail",
            })
        }
    } catch(err){
        res.json({
            status:1,
            msg: err.message,
        })
    }
})
// 耳机列表
router.get('/headsetlists', async (req, res, next) => {
    const doc = await headsetlists.find()
    try{
        if(doc) {
            res.json({
                status:0,
                msg:"success",
                result:doc
            })
        }else{
            res.json({
                status:1,
                msg:"fail",
            })
        }
    } catch(err){
        res.json({
            status:1,
            msg: err.message,
        })
    }
})
// 配件列表
router.get('/partlists', async (req, res, next) => {
    const doc = await partlists.find()
    try{
        if(doc) {
            res.json({
                status:0,
                msg:"success",
                result:doc
            })
        }else{
            res.json({
                status:1,
                msg:"fail",
            })
        }
    } catch(err){
        res.json({
            status:1,
            msg: err.message,
        })
    }
})
// 生活周边列表
router.get('/arroundlists', async (req, res, next) => {
    const doc = await arroundlists.find()
    try{
        if(doc) {
            res.json({
                status:0,
                msg:"success",
                result:doc
            })
        }else{
            res.json({
                status:1,
                msg:"fail",
            })
        }
    } catch(err){
        res.json({
            status:1,
            msg: err.message,
        })
    }
})


// 获取详情
router.get('/detailsById', async (req, res, next) => {
    const {main_id} = req.query
    if(main_id > 0 && main_id <10 ){
        let doc = await phonelists.findOne({main_id})
        try{
            if(doc) {
                res.json({
                    status:0,
                    msg:"success",
                    result:doc
                })
            }else{
                res.json({
                    status:1,
                    msg:"fail",
                })
            }
        } catch(err){
            res.json({
                status:1,
                msg: err.message,
            })
        }
    }else if (main_id > 10 && main_id <30 ){
        const doc = await headsetlists.findOne({main_id})
        try{
            if(doc) {
                res.json({
                    status:0,
                    msg:"success",
                    result:doc
                })
            }else{
                res.json({
                    status:1,
                    msg:"fail",
                })
            }
        } catch(err){
            res.json({
                status:1,
                msg: err.message,
            })
        }
    } else if(main_id > 30 && main_id < 50 ){
        const doc = await partlists.findOne({main_id})
        try{
            if(doc) {
                res.json({
                    status:0,
                    msg:"success",
                    result:doc
                })
            }else{
                res.json({
                    status:1,
                    msg:"fail",
                })
            }
        } catch(err){
            res.json({
                status:1,
                msg: err.message,
            })
        }
    }else {
        const doc = await arroundlists.findOne({main_id})
        try{
            if(doc) {
                res.json({
                    status:0,
                    msg:"success",
                    result:doc
                })
            }else{
                res.json({
                    status:1,
                    msg:"fail",
                })
            }
        } catch(err){
            res.json({
                status:1,
                msg: err.message,
            })
        }
    }
})


// 加入购物车
router.post('/addCart',  async (req, res) => {
    let userId = req.cookies.userId;
    let {main_id, productNum = 1 } = req.body
    if (userId) {
        try {
            const userDoc = await User.findOne({userId})
            if (userDoc) {
                // 商品是否存在
                let have = false;
                //  购物车有内容
                if (userDoc.cartList.length) {
                    // 遍历用户名下的购物车列表
                    for (let value of userDoc.cartList) {
                        // 找到该商品
                        if (value.main_id == main_id) {
                            have = true;
                            value.productNum += productNum;
                            break;
                        }
                    }
                }
                // 购物车无内容 或者 未找到商品 则直接添加
                if (!userDoc.cartList.length || !have) {
                    const goodsDoc = await phonelists.findOne({main_id})
                    let doc = {
                        "main_id": goodsDoc.main_id,
                        "homeUrl": goodsDoc.homeUrl,
                        "productName": goodsDoc.productName,
                        "status": goodsDoc.status,
                        "productDesc":goodsDoc.productDesc,
                        "productNum": goodsDoc.productNum,
                        "price": goodsDoc.price
                    };
                    userDoc.cartList.push(doc)
                }
                userDoc.save( ()=> {
                    // 保存成功
                    res.json({
                        status: 0,
                        msg: '加入成功',
                        result: 'suc'
                    })
                })

            } else {
                res.json({
                    status: 1,
                    msg: '用户不存在',
                    result: ''
                })
            }

        } catch (err) {
            res.json({
                status: 1,
                msg: err.message,
                result: ''
            })
        }

    } else {
        res.json({
            status: 1,
            msg: '用户未登录',
            result: ''
        })
    }
})
// 商品信息
router.get('/productDet', function (req, res) {
    let main_id = req.query.main_id
    phonelists.findOne({main_id}, (err, doc) => {
        if (err) {
            res.json({
                status: '1',
                msg: err.message,
                result: ''
            })
        } else {
            res.json({
                status: '1',
                msg: 'suc',
                result: doc
            })
        }
    })
})

module.exports = router