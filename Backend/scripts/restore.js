const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const backupDir = path.join(__dirname, "../backups");
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
}

const dbName = "yourDatabaseName";
const backupPath = path.join(backupDir, ``);

function backupDatabase(callback) {
  exec(backupCommand, (error, stdout, stderr) => {
    if (error) {
      callback(`Error: ${error.message}`);
      return;
    }
  });
}

module.exports = backupDatabase;
