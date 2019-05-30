const mongoose = require('mongoose')
// 表模型
const produtSchema = new mongoose.Schema({
    "main_id":Number,
    "productName":String,
    "price": Number,
    "status": Number,
    "productDesc":String,
    "homeUrl":String,
    "product_details":[
        {
            "bigImg":String,
            "smallImg":String
        }
    ],
    "product_Type":[
        {
            "n_Id": Number,
            "n_value": String
        }
    ],
    "serviceDesc":[
        {
            "serImgUrl": String
        }
    ]
})
module.exports = mongoose.model('partlists', produtSchema)
// mongoose 自动为查询的表加上 s 