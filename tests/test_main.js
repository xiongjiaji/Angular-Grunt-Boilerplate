var testMain = function() {

var allTestFiles = [];
var TEST_REGEXP = /test\.js$/;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

console.log("allTestFiles");

requirejs.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  // example of using shim, to load non AMD libraries (such as underscore and jquery)
  paths: {
    "main":"src/modules/main/js",
    "core":"src/modules/core/js",
    "angular": "src/lib/angular",
    "angular-animate": "src/lib/angular-animate",
    "angular-cookies": "src/lib/angular-cookies",
    "angular-csp": "src/lib/angular-csp",
    "angular-loader": "src/lib/angular-loader",
    "angular-local-storage": "src/lib/angular-local-storage",
    "angular-messages": "src/lib/angular-messages",
    "angular-mocks": "src/lib/angular-mocks",
    "angular-resource": "src/lib/angular-resource",
    "angular-route": "src/lib/angular-route",
    "angular-sanitize": "src/lib/angular-sanitize",
    "angular-scenario": "src/lib/angular-scenario",
    "angular-touch": "src/lib/angular-touch",
    "angular-ui-bootstrap": "src/lib/ui-bootstrap-tpls-0.12.1",
    "angular-ui-router": "src/lib/angular-ui-router",
    "d3": "src/lib/d3",
    "jade": "src/lib/jade",
    "jquery": "src/lib/jquery-2.1.3",
    "lodash": "src/lib/lodash",
    "views/core/page-not-found": "target/build/webapp/tmp/views/core/page-not-found",
    "views/core/loading-dots": "target/build/webapp/tmp/views/core/loading-dots",
    "views/main/home/home": "target/build/webapp/tmp/views/main/home/home",
    "polyglot": "src/lib/polyglot",
  },

  shim: {
        jquery: {
            exports: 'jQuery'
        },
        lodash: {
            exports: '_'
        },
        angular: {
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-cookies': {
            deps: ['angular']
        },
        'angular-csp': {
            deps: ['angular']
        },
        'angular-loader': {
            deps: ['angular']
        },
        'angular-local-storage': {
            deps: ['angular']
        },
        'angular-mocks': {
            deps: ['angular']
        },
        'angular-messages': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },        
        'angular-route': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'angular-scenario': {
            deps: ['angular']
        },
        'angular-touch': {
            deps: ['angular']
        },
        'angular-ui-bootstrap': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        },                
        'd3': {
            exports: 'd3'
        },
        polyglot: {
            exports: 'Polyglot'
        }
    },

  // dynamically load all test files
  deps: ['tests/spec/test'],

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
};

testMain();