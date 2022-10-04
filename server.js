// modules/packages
require('dotenv').config({ path: '.env' });
const express = require('express');

// init
const server = express();
const env = process.env;

// config
const PORT = env.PORT || env.BACKEND_SERVER_PORT;

// routes
server.get('/', (req, res, next) => {
    res.send('Welcome to EnableMint Backend API');
});

// run server
server.listen(PORT, () => {
    console.info(`EnableMint Backend API is listening to: http://127.0.0.1:${PORT}/`);
});
