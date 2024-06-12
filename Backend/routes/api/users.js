const express = require("express");
const backupDatabase = require("./scripts/backup");
const restoreDatabase = require("./scripts/restore");
const path = require("path");

const router = express.Router();

router.post("/backup", (req, res) => {
  backupDatabase((error, message) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(message);
    }
  });
});

router.post("/restore", (req, res) => {
  const { backupFile } = req.body;
  restoreDatabase(
    path.join(__dirname, `../backups/${backupFile}`),
    (error, message) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.send(message);
      }
    }
  );
});

module.exports = router;
