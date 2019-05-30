const express = require('express')
const router = express.Router()
// 数据模型
const User = require('../models/user');

// 登陆接口
router.post('/login', async (req, res) => {
    let {userName, userPwd} = req.body;
    const doc = await User.findOne({userName, userPwd});
    try {
        if (doc) {
            const {userId, name, avatar} = doc
            res.cookie("userId", userId, {
                path: '/',
                maxAge: 1000 * 60 * 60
            });
            res.json({
                status: '0',
                msg: '登陆成功',
                result: {
                    name,
                    avatar,
                    userId
                }
            })
        } else {
            res.json({
                status: '1',
                msg: '账号或者密码错误',
                result: ''
            })
        }
    } catch (err) {
        res.json({
            status: '1',
            msg: err.message,
            result: ''
        })
    }
})

// 登出登陆
router.post('/loginOut', (req, res) => {
    res.cookie("userId", "", {
        path: "/login",
        maxAge: -1
    });
    res.json({
        status: "0",
        msg: '',
        result: ''
    })
})

// 注册账号
router.post('/register', async (req, res) => {
    const {userName, userPwd} = req.body;
    try {
        const doc = await User.findOne({userName})
        if (doc) {
            res.json({
                status: '1',
                msg: '账号已存在!',
                result: ''
            })
        } else {
            let r1 = Math.floor(Math.random() * 10);
            let r2 = Math.floor(Math.random() * 10);
            let userId = `${r1}${(Date.parse(new Date())) / 1000}${r2}`
            // 可以注册
            User.insertMany({
                avatar: 'http://osc9sqdxe.bkt.clouddn.com/default-user-avatar.png',
                name: '皮皮虾',
                cartList: [],
                orderList: [],
                addressList: [],
                userName,
                userId,
                userPwd
            })
            res.json({
                status: '0',
                msg: '注册成功',
                result: {
                    userName,
                    userId,
                    name
                }
            })
        }
    } catch (err) {
        res.json({
            status: '2',
            msg: err.message,
            result: ''
        })
    }
})


// 获取用户信息
router.post('/userInfo', async (req, res) => {
    const {userId} = req.cookies
    if (userId) {
        let {name, avatar} = await  User.findOne({userId})
        res.json({
            status: 0,
            msg: 'suc',
            result: {
                name,
                avatar
            }
        })
    } else {
        res.json({
            status: 1,
            msg: '未登录',
            result: ''
        })
    }
})

// 获取购物车
router.post('/cartList', async (req, res) => {
    const {userId} = req.cookies;
    if (userId) {
        // 去查用户名下的
        const userDoc = await User.findOne({userId});
        if (userDoc) {
            const {cartList} = userDoc
            res.json({
                status: '0',
                msg: "suc",
                count: cartList.length,
                result: cartList
            })
        } else {
            res.json({
                status: 0,
                msg: "用户不存在",
                result: ''
            })
        }

    } else {
        res.json({
            status: '0',
            msg: '未登录',
            result: ''
        })
    }
})
// 修改数量
router.post('/cartEdit', function (req, res) {
    let userId = req.cookies.userId,
        productId = req.body.productId,
        productNum = req.body.productNum > 10 ? 10 : req.body.productNum,
        checked = req.body.checked;
    if (userId) {
        User.update({
            "userId": userId,
            "cartList.productId": productId
        }, {
            "cartList.$.productNum": productNum,
            "cartList.$.checked": checked,
        }, (err, doc) => {
            if (err) {
                res.json({
                    status: '1',
                    msg: err.message,
                    result: ''
                });
            } else {
                res.json({
                    status: '0',
                    msg: '',
                    result: 'suc'
                });
            }
        })
    }

})

// 删除购物车
router.post('/cartDel', function (req, res) {
    let userId = req.cookies.userId,
        productId = req.body.productId;
    User.update({
        userId
    }, {
        $pull: {
            'cartList': {
                'productId': productId
            }
        }
    }, function (err, doc) {
        if (err) {
            res.json({
                status: '1',
                msg: err.message,
                result: ''
            });
        } else {
            res.json({
                status: '0',
                msg: '',
                result: 'suc'
            });
        }
    })
})
module.exports = router