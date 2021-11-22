/**
 * Express Application
 */
const express = require('express');
const app = express();

// Middleware Import
const cors = require('cors');
const helmet = require('helmet');

// Views
app.set('views', __dirname + "/../public/errors/");
app.set('view engine', 'ejs')

// Middleware
app.use(cors("*"));
app.use(helmet({
    contentSecurityPolicy: false
}));
app.use(require('./lib/middleware').removeEnding)
app.use(express.static(require('path').join(__dirname, "../public/")));

// Errors
app.use(require('./lib/middleware').handler);

// listen
app.listen(8080, () => {
    console.log("fnafmc.net started.")
})