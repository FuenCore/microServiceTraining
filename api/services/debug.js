const express           = require('express');
const router            = express.Router();
const connection        = require('../config');

router.get( '/', ( req, res ) => {
    connection.query('SELECT * FROM debug', ( err, result ) => {
        if(  err ) {
            res.status(500).send(err);
        } else {
            res.json( result );
            console.log( result );
        }
    })
})

module.exports = router;