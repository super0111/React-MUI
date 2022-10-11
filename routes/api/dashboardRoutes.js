const express = require("express");
const Router = express.Router();
const dotenv = require("dotenv");
const mysqlConnection = require("../../config/DBConnection");

dotenv.config();

Router.get("/getCampaigns/:id", async (req, res) => {
  const email = req.params.id;
  let getCampaigns;
  getCampaigns = `SELECT * FROM campaigns WHERE email = "${email}"`;
  mysqlConnection.query(getCampaigns, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    }
  });
});

Router.post("/newCampaign", (req, res) => {
  let requestData = req.body;
  const sql = `INSERT INTO campaigns (email, name, description) VALUES ("${requestData.email}", "${requestData.name}", "${requestData.description}")`;
  
  mysqlConnection.query(sql, (err, rows) => {
    const data = `SELECT * FROM campaigns WHERE email = "${requestData.email}"`;
    mysqlConnection.query(data, (err, rows) => {
      if (!err) {
        return res.status(200).json({
          message: "success",
          data: rows,
        });
      }
      res.send(err);
    });
  });
});

Router.get("/getUploadWebsite/:id", async (req, res) => {
  const email = req.params.id;
  let getUploadwebsite;
  getUploadwebsite = `SELECT * FROM workflowwebsites WHERE email = "${email}"`;
  mysqlConnection.query(getUploadwebsite, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    }
  });
});

Router.post("/uploadWebsite", (req, res) => {
  const date = new Date();
  const {
    email,
    cookieValue1,
    cookieValue2,
    cookieValue3,
    comapnyNumber,
    comapnyMapping,
    launchSchedule,
    notification,
    fileName,
    cvFile,
  } = req.body;

  const sql = `INSERT INTO workflowwebsites (email, cookieValue1, cookieValue2, cookieValue3, comapnyNumber, comapnyMapping, launchSchedule, notification, cvFile, fileName, update_date ) VALUES (
    "${email}", "${cookieValue1}", "${cookieValue2}", "${cookieValue3}", "${comapnyNumber}", "${comapnyMapping}", "${launchSchedule}", "${notification}", "${cvFile}", "${fileName}", "${date}"
  )`;
  
  mysqlConnection.query(sql, (err, rows) => {
    const data = `SELECT * FROM workflowwebsites WHERE email = "${email}"`;
    mysqlConnection.query(data, (err, rows) => {
      if (!err) {
        return res.status(200).json({
          message: "success",
          data: rows,
        });
      }
      res.send(err);
    });
  });
});

module.exports = Router;