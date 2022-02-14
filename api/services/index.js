const express           = require('express');
const debug             = require('./debug');
const user              = require('./user');

const router            = express.Router();

router.use( '/debug', debug );
router.use( '/user', user )

module.exports = router;