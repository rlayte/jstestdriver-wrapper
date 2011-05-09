Install

    sudo npm install jstestdriver -g

Start test server

    jstestdriver start [ --config path/to/config ]

If you leave out the `config` flag it will default to `./jsTestDriver.conf`

Run tests

    jstestdriver run [ --tests path/to/tests ]

If you leave out the `tests` flag it will run all tests by default.

Stop the server

    jstestdriver stop

Run an arbitrary command

    jstestdriver <commands>

This can be done after any of the above commands as well. E.g.

    jstestdriver run --runnerMode DEBUG
