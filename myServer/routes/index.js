var express = require('express');
var router = express.Router();
const { execFile } = require("child_process");
const fs = require('fs')

router.get('/run-zx-script', (req, res) => {
  execFile('zx ./zxBtn.mjs', (error, stdout, stderr) => {
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
  execFile('zx ./zxBtn2.mjs', (error, stdout, stderr) => {
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
  execFile('zx ./cpuMemScript.mjs', (error, stdout, stderr) => {
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

router.get('/', function(req, res, next) {
  res.render('index', {title: 'EXPRESS'});
});

router.post('/convert', function(req, res, next) {
  var scrObject = req.body;
  var stdOutString = "";
  console.log(scrObject.scriptInput);

  // Convert the script input to a JSON string
  let scriptInputString = JSON.stringify(scrObject.scriptInput);

  console.log(scriptInputString);

  let command = `#!/usr/bin/env zx\nawait $\`scdl -l https://soundcloud.com/lildvrkie/genocide;\`;`;

  try {
    // Write the script input string to the zx file
    fs.writeFileSync('./convertScript.mjs', command)
    //file written successfully
  } catch (err) {
    console.error(err)
  }

  execFile('./convertScript.mjs', {maxBuffer: 1024*1024*500}, (error, stdout, stderr) => {
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
    //res.download('./convertScript.mjs');
  });
});



module.exports = router;