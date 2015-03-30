#AngularJS Sample Project using Grunt / RequireJS

This project is a Angular-Grunt-RequireJS boilerplate.

Grunt is used to automate your dev pipeline including copy files / uglify files / require modules / unit test.

RequireJS is a great lib that makes modular programming possible and easy.

Node.js is used to provide a proxy server to 

##How To
###Precondition
- Node.js is installed.
- Grunt is installed golobally:
```bash
$ sudo npm install -g grunt-cli
```

###Install Node.js packages
Make sure you're in the project's root directory, then:
```bash
$ sudo npm install
```

###Build the Project
We have two target in out Grunt Task: dev / production.
Production target minifies the files.

It's easy to build the project. One command line is enough.
To build dev target:
```bash
$ grunt default
```

To build product target:
```bash
$ grunt production
```
###Running
A simple proxy server is provided using Node.js.
Run the server, parameter in [] is optional:
```bash
$ node node/app [--host <host> --port <port>]
```

###Grunt Watch
Grunt Watch task will trigger auto-rebuild when source code changes
```bash
$ grunt watch
```