const express = require('express');
const passport = require('passport');
const { getProduct, deleteProduct, addProduct, updateProduct, getbyIDProduct } = require('../Controllers/ProduitController');

const router = express.Router();
router.post('/product', passport.authenticate('bearer', { session: false }), addProduct);
router.get('/product', passport.authenticate('bearer', { session: false }), getProduct);
router.get('/product/:id', passport.authenticate('bearer', { session: false }), getbyIDProduct)
router.put('/product/:id', passport.authenticate('bearer', { session: false }), updateProduct)
router.delete('/product/:id', passport.authenticate('bearer', { session: false }), deleteProduct)

module.exports = router