var exec = require('child_process').exec
  , path = require('path')


exec('java -jar ' + path.join(__dirname, 'jstestdriver.jar') + ' --port ' + process.argv[2])
