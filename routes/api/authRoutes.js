const express = require("express");
const Router = express.Router();
const bcrypt = require('bcrypt');
var jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const mysqlConnection = require("../../config/DBConnection");

dotenv.config();

Router.get("/signIn", async (req, res) => {
  mysqlConnection.query("SELECT * from usres", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    }
  });
});

Router.post("/signIn", async (req, res) => {
  const data = req.body;

  let getUser;
  getUser = `SELECT * FROM users WHERE email = "${data.email}"`;
  
  mysqlConnection.query(getUser, async (err, rows, fields) => {
    let userInfo = Object.values(JSON.parse(JSON.stringify(rows)));

    if(userInfo[0].userActive === 0) {
      return res.status(401).json({ error: "Please signUp correctly" });
    }

    if (userInfo.length && userInfo[0]) {

      const validPassword = await bcrypt.compare(
        data.password,
        userInfo[0].password
      );

      var response = bcrypt.compareSync(data.password, userInfo[0].password);
      console.log("responseresponse", response)

      const user = userInfo[0];
      if (data.password === userInfo[0].password) {
      // if (response) {
        const token = jwt.sign(
          { user_id: user.id, email: user.email, type: data.type },
          process.env.TOKEN_SECRET,
          {
            expiresIn: "2h",
          }
        );

        res.status(200).json({
          status: "success",
          token,
          name: user.name,
          email: user.email,
          id: user.id,
          userType: data.type,
        });
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
    } else {
      res.status(401).json({ error: "User does not exist" });
    }
  });
});

Router.get("/signUp", (req, res) => {
  mysqlConnection.query("SELECT * from usres", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    }
  });
});

Router.post("/signUpFlow1", (req, res) => {
  let requestData = req.body;

  console.log("requestData", requestData)
  let emailpresent;
  emailpresent = `SELECT * FROM users WHERE email = "${requestData.email}"`;

  mysqlConnection.query(emailpresent, async (err, rows, fields) => {
    if (rows.length >= 1) {
      return res.status(400).json({ data: rows, error: "Email already present" });
    }

    // const salt = await bcrypt.genSalt(10);
    // // now we set user password to hashed password
    // requestData.password = await bcrypt.hash(requestData.password, salt);
    const password = bcrypt.hashSync(requestData.password, 10);

    const sql = `INSERT INTO users (email, password) VALUES ("${requestData.email}", "${password}")`;

    await mysqlConnection.query(sql, (err, rows) => {

      const token = jwt.sign(
        { email: requestData.email },
        process.env.TOKEN_SECRET,
        {
          expiresIn: "2h",
        }
      );
      if (!err) {
        return res.status(200).json({
          status: "success",
          token: token,
          email: requestData.email,
        });
      }
      res.send(err);
    });
  });
});

Router.post("/signUpFlow2", (req, res) => {
  let requestData = req.body;
  const emailpresent = `SELECT * FROM users WHERE email = "${requestData.email}"`;

  mysqlConnection.query(emailpresent, async (err, rows, fields) => {
    if (rows.length < 1) {
      return res.status(400).json({ error: "This Email isnot exist" });
    }
    
    const sql = `UPDATE users SET 
      firstname = "${requestData.values.firstName}", 
      lastname = "${requestData.values.lastName}" ,
      companyName = "${requestData.values.companyName}" ,
      jobTitle = "${requestData.values.jobTitle}"
    WHERE email = '${requestData.email}'`;

    await mysqlConnection.query(sql, (err, rows) => {
      if (!err) {
        return res.status(200).json({
          status: "success",
        });
      }
      res.send(err);
    });
  });
});

Router.post("/signUpFlow3", (req, res) => {
  let requestData = req.body;
  const emailpresent = `SELECT * FROM users WHERE email = "${requestData.email}"`;

  mysqlConnection.query(emailpresent, async (err, rows, fields) => {
    if (rows.length < 1) {
      return res.status(400).json({ error: "This Email isnot exist" });
    }
    
    const sql = `UPDATE users SET plan = "${requestData.selectedPlan}" WHERE email = '${requestData.email}'`;

    await mysqlConnection.query(sql, (err, rows) => {
      if (!err) {
        return res.status(200).json({
          status: "success",
        });
      }
      res.send(err);
    });
  });
});

Router.post("/signUpFlow4", (req, res) => {
  let requestData = req.body;

  console.log("requestsdatat", requestData)
  const emailpresent = `SELECT * FROM users WHERE email = "${requestData.email}"`;

  mysqlConnection.query(emailpresent, async (err, rows, fields) => {
    if (rows.length < 1) {
      return res.status(400).json({ error: "This Email isnot exist" });
    }
    
    const sql = `UPDATE users SET 
      cardNumber = "${requestData.values.cardNumber}",
      cardDate = "${requestData.values.cardDate}",
      cvv = "${requestData.values.cvv}",
      cardHolder = "${requestData.values.cardHolder}",
      postalCode = "${requestData.values.postalCode}",
      userActive = 1
    WHERE email = '${requestData.email}'`;

    await mysqlConnection.query(sql, (err, rows) => {
      if (!err) {
        return res.status(200).json({
          status: "success",
        });
      }
      res.send(err);
    });
  });
});

module.exports = Router;
