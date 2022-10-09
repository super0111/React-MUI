const express = require("express");
const Router = express.Router();
const dotenv = require("dotenv");
const mysqlConnection = require("../../config/DBConnection");

dotenv.config();

Router.post("/newCampaign", (req, res) => {
  let requestData = req.body;

  let emailpresent;
  emailpresent = `SELECT * FROM newCampain WHERE email = "${requestData.email}"`;

  mysqlConnection.query(emailpresent, async (err, rows, fields) => {

    const sql = `INSERT INTO newCampaign (name, description) VALUES ("${requestData.name}", "${requestData.description}")`;

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