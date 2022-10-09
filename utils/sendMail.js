const env = require("dotenv");
env.config();
const options = {
  // user: process.env.email,
  // pass: process.env.pass
  user: 'adonis0923dev@gmail.com',
  pass: 'ok2866431'
};

const send = require("gmail-send")(options);

function sendMail(req, res, next) {
  const { email, message, name } = req.body;
  console.log("req body", req.body)
  options.to = email;
  options.subject = message;
  options.text = name;

  send(options, (err, response, full) => {
    if (err) {
      return res.json({ err: err });
    }
    if (response) {
      console.log("response", response)
      return  res.status(200).json({ status: "success" });
    }
  });
}

module.exports = sendMail;
