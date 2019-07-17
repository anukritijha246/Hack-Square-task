const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: String,
    category: String,
    name: String,
    brand:String,
    price: {type:Number, default: 0},
    discount:{type:Number, default: 0},
    instock:{type:Boolean,default:false},
});

var Product=module.exports = mongoose.model("product", ProductSchema);
