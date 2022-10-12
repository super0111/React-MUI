const express = require("express");
const Router = express.Router();
require("dotenv").config();
const nodemailer = require('nodemailer');

Router.post("/sendFeedback", (req, res) => {
  const { email, message, name } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'adonis0923dev@gmail.com',
      user: process.env.EMAIL,
      pass: process.env.password,
    },
  });
  
  
  transporter.sendMail({
    from: `${name} from Enablimint`, // sender
    to: `${email}`, // list of receivers
    subject: "Revieved mail for Enablimint", // Subject line
    html: `<b>${message}</b>`, // html body
  }).then(info => {
    if(info) {
      return res.status(200).json({status: "success"});
    }
  }).catch(console.error);
});

Router.post("/sendContactSales", (req, res) => {
  const { firstname, lastname, email, phone, company, website, heading, message } = req.body;
  console.log("firstname, lastname, email, phone, company, website, heading, message", firstname, lastname, email, phone, company, website, heading, message)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'adonis0923dev@gmail.com',
      pass: 'pjxchuuunjqczlau',
    },
  });
  
  transporter.sendMail({
    from: `${firstname} ${" "} ${lastname}`, // sender
    to: `${email}`, // list of receivers
    subject: `${heading}`, // Subject line
    html: `
      <div>
        <b>Name: ${firstname}${lastname}</b>
        <b>Phone Number: ${phone}</b>
        <b>Company: ${company}</b>
        <b>Website: ${website}</b>
        <br>
        <b>Message: </b>
        <b>${message}</b>
      </div>
    `, // html body
  }).then(info => {
    if(info) {
      return res.status(200).json({status: "success"});
    }
  }).catch(console.error);
});

Router.post("/sendCancellation", (req, res) => {
  const { name, email, cancellReason } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'adonis0923dev@gmail.com',
      user: process.env.EMAIL,
      pass: process.env.password,
    },
  });
  
  
  transporter.sendMail({
    from: `${name} From Enablimint`, // sender
    to: `${email}`, // list of receivers
    subject: "You Revieved mail for cancellation of Enablimint", // Subject line
    html: `<b>${cancellReason}</b>`, // html body
  }).then(info => {
    if(info) {
      return res.status(200).json({message: "success"});
    } else return res.status(500).json({error: "Something got wrong, try again"});
  }).catch(console.error);
});

module.exports = Router;






