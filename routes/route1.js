const express = require('express');
const router = express.Router();
module.exports = router ;
var multer = require('multer');
// Require the controllers
const controller = require('../Controller/product_controller');
const upload = multer({dest: './uploads'});//upload variable for storing profileimage,destination folder:uploads

//update product details api
router.post('/:pid/update_product_details/',upload.single('profileimage'),controller.update_product_details);
// delete product api
router.post('/:pid/delete_product_details/',controller.delete_product_details);
