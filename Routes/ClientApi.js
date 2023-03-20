const express = require('express');
const passport = require('passport');
const { getClient, updateClient, deleteClient } = require('../Controllers/ClientController');

const router = express.Router();

router.get('/client', passport.authenticate('bearer', { session: false }), getClient);
router.put('/client/:id', passport.authenticate('bearer', { session: false }), updateClient)
router.delete('/client/:id', passport.authenticate('bearer', { session: false }), deleteClient)

module.exports = router