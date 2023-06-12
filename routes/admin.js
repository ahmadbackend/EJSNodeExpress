const path = require('path');

const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();
//router.set('view engine','ejs');

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product',{title:'products',
path:'/admin/add-product',
activeShop:true,
productCss:'true'

});
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
