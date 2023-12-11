var express = require('express');
var router = express.Router();
const { exec } = require("child_process");
const fs = require('fs')
const path = require('path'); 

router.get('/run-zx-script', (req, res) => {
  exec('zx ./zxBtn.mjs', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    res.send(stdout);
  });
});

router.get('/run-zx-script2', (req, res) => {
  exec('zx ./zxBtn2.mjs', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    res.send(stdout);
  });
});

router.get('/run-zx-script3', (req, res) => {
  exec('zx ./cpuMemScript.mjs', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    res.send(stdout);
  });
});

router.get('myServer/routes/resetServerScript.mjs', (req, res, next) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(path.join(__dirname, 'resetServerScript.mjs'));
});

router.get('/', function(req, res, next) {
  res.render('index', {title: 'EXPRESS'});
});

router.post('/runScript', function(req, res, next) {
  var scrObject = req.body;
  var stdOutString = "";
  console.log(scrObject.scriptInput);
  try {
    fs.writeFileSync('./theZxScript.mjs', scrObject.scriptInput)
    //file written successfully
  } catch (err) {
    console.error(err)
  }

  exec('./theZxScript.mjs', (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    stdOutString = `${stdout}`;
    console.log(stdOutString);
    scrObject.scriptOutput = stdOutString;
    res.json(scrObject);
  });
});

module.exports = router;