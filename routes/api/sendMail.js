const express = require("express");
const Router = express.Router();
require("dotenv").config();
const nodemailer = require('nodemailer');

Router.post("/sendMail", (req, res) => {
  const { email, message, name } = req.body;
  console.log("email", email, message, name)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'adonis0923dev@gmail.com',
      pass: 'pjxchuuunjqczlau',
    },
  });
  
  
  transporter.sendMail({
    from: `${name}`, // sender address
    to: `${email}`, // list of receivers
    subject: "", // Subject line
    html: `<b>${message}</b>`, // html body
  }).then(info => {
    console.log({info});
  }).catch(console.error);
});




module.exports = Router;






