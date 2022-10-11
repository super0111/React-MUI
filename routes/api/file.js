const config = require("../../config");
const express = require('express');
const router = express.Router();
// const server_url= 'http://localhost:8000/';

router.post('/', async (req, res) => {
  if(req.files != null) {
      let cvFile = req.files.file;
      cvFile.mv(`./public/${cvFile.name}`, function(err) {
          if (err) {
              console.log(err)
              return res.status(500).send(err);
          }
          res.json({file: `${config.server_url}${cvFile.name}`});
      });
  } else {
      res.json({file: null});
  }
})

module.exports = router;
