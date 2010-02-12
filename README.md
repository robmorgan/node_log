Node_Log: Simple NodeJS Logger
==============================

A simple tcp logger that listens on a socket and writes log messages to STDOUT.

When used in conjunction with a web application, node_log provides realtime
logging.

Note: This software has not been tested in production.

Running
-------

Prequisites:

  1. [node.js](http://nodejs.org/)

Download the code

    git clone git://github.com/robmorgan/node_log

Run it!

    /usr/local/bin/node node_log.js

Now you can write log/debug messages to the node_log server.
I have developed an adapter for [Zend Framework](http://framework.zend.com/), you can find here:
[github.com/robmorgan/zfnode_log_adapter](http://github.com/robmorgan/zfnode_log_adapter/)

Author
------

Rob Morgan - [robmorgan.id.au](http://robmorgan.id.au/)