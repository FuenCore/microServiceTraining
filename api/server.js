const express       = require("express");
const app           = express();
const $PORT         = 5000;
const connection    = require('./config');
const api           = require('./services');
const bodyParser    = require('body-parser');

app.all( "*", ( req, res, next ) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
} );

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use("/api", api);

app.listen( $PORT, ( err ) => {
    if( err ) {
        throw new Error(`Serveur qui déconne ... : ${err}` )
    }
    else {
        console.log(`Serveur lancé sur le port ${$PORT} chef !`)
    }
} )