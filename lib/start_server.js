var exec = require('child_process').exec
  , path = require('path')


console.log(__dirname)

exec('java -jar ' + path.join(__dirname, 'jstestdriver.jar') + ' --port 3232')
