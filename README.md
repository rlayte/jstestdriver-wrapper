### Install

    sudo npm install jstestdriver -g

*Make sure to install globally so you can use it from the command-line*

### Start test server

    jstestdriver start

This will assume `./jsTestDriver.conf` exists. To specify a different configuration file use the `--config` flag

    jsTestDriver start --config path/to/config

### Stop the server

    jstestdriver stop

### Run tests

    jstestdriver run

By default this will run all the tests. To specify specific test suites use the `--tests` flag.

    jstestdriver run --tests TestSuite

### Run commands

If you omit the `start`, `stop`, and `run` keywords then it will default to the standard jar file allowing you to perform any native commands. e.g.

    jstestdriver --port 9876 --browser firefoxpath

This can be done after any of the above commands as well. e.g.

    jstestdriver run --runnerMode DEBUG
