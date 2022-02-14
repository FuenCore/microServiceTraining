const express = require('express');
const debug = require('./debug');

const router = express.Router();

router.use('/debug', debug );

module.exports = router;