
var express = require('express');
var multer = require('multer');//for product image handling
const Product=require('../models/product');
const Recover=require('../models/recover');


exports.update_product_details= function (req , res) {
  var x=req.params.pid;// unique product id is passed in the url
  var id = req.body.id;
    var name = req.body.name;
    var category = req.body.category;
    var brand = req.body.brand;
    var price = req.body.price;
    var discount = req.body.discount;
    var instock = req.body.instock;

    if (req.file) {
        console.log('Uploading File...');
        var profileimage = req.file.filename;
    } else {
        console.log('No File Uploaded...');
        var profileimage = 'noimage.jpg';
    }
  Product.updateOne({_id:x},{$set:{id:id,name:name,category:category,brand:brand,price:price,discount:discount,instock:instock}},function (err,product) {
      res.send("Product details updated");
    });
};



exports.delete_product_details= function (req , res) {
  var x=req.params.pid;// unique product id is passed in the url
  var id = req.body.id;
  let recover= new Recover(   // inserting id of product in the recover schema
      {
          id:req.body.id
      });
  recover.save(function(err){
      if(err){
          return next(err);
      }
  });
  Product.deleteOne({_id:x},function (err,product) {
      res.send("Product details deleted from product schema");
    });
};
