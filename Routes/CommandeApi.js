const express = require('express');
const passport = require('passport');
const { addCommande, detailsCommande, listofCommands } = require('../Controllers/CommandeController');

const router = express.Router();
router.post('/command/:clientid/:productid', passport.authenticate('bearer', { session: false }), addCommande);
router.get('/command', passport.authenticate('bearer', { session: false }), listofCommands);
router.get('/command/:id', passport.authenticate('bearer', { session: false }), detailsCommande)

module.exports = router