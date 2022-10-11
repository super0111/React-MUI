const express = require("express");
var server = express();
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const fileUpload = require('express-fileupload');

server.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  next();
});

server.use(bodyparser.json());
server.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
const env = process.env;

// // config
const PORT = env.PORT || env.BACKEND_SERVER_PORT;

// routes
server.get('/', (req, res, next) => {
    res.send('Welcome to EnableMint Backend API');
});

server.use(fileUpload());
server.use(express.static('public'));
server.use("/api/authRoutes/", require("./routes/api/authRoutes"));
server.use("/api/sendMail/", require("./routes/api/sendMail"));
server.use("/api/dashboardRoutes/", require("./routes/api/dashboardRoutes"));
server.use("/api/file/", require("./routes/api/file"));


// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

server.listen(PORT, () =>
  console.log(`Express server is runnig at port no : http://127.0.0.1:${PORT}`)
);