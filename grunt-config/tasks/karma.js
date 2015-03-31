module.exports = function(grunt) {
  var path = require('path');

  grunt.loadNpmTasks('grunt-karma');

  var argv = require('optimist').argv;

  var buildDir = require('../buildDir.js')();


  var generateFiles = function() {
    var filePatterns = [
        // 'src/lib/jquery-2.1.3.js',
        //'src/lib/angular.js',
        //'src/lib/angular-local-storage.js',
        //'src/lib/jasmine-jquery.js',
        //{pattern: 'dashboard/tests/spec/**/*.js', included: false},
        {pattern: 'Angular-Grunt-Boilerplate/target/build/webapp/**/*.*', included: false},
        {pattern: 'Angular-Grunt-Boilerplate/src/modules/**/*.jade', included: false},

        {
            pattern: 'Angular-Grunt-Boilerplate/src/modules/core/locale/*.json',
            served: true,
            included: false
        },
      ];

      var includePatterns = argv.i;
      if (includePatterns) {
          if (!Array.isArray(includePatterns)) {
              includePatterns = [includePatterns];
          }
          includePatterns.forEach(function(includePattern) {
              filePatterns.push(
                { pattern: 'Angular-Grunt-Boilerplate/tests/spec/**/*' + includePattern + '*.js', included: false }
              )
          });
      } else {
          filePatterns.push(
            { pattern: 'Angular-Grunt-Boilerplate/tests/spec/**/*.js', included: false }
          );
      }

      return filePatterns;
  };

  var getExcludeFiles = function() {
      var res = [];
      var excludePatterns = argv.x;
      if (excludePatterns) {
          if (!Array.isArray(excludePatterns)) {
              excludePatterns = [excludePatterns];
          }
          excludePatterns.forEach(function(excludePattern) {
              res.push(
                'Angular-Grunt-Boilerplate/tests/spec/**/*' + excludePattern + '*.js'
              )
          });
      }
      return res;
  };

  grunt.config('karma',{
    options: {
            basePath: '../',

            // web server port
            port: 9876,

            // browserNoActivityTimeout: 100000,

            client: {
              captureConsole: !!grunt.option("with-logs")
            },

            // enable / disable watching file and executing tests whenever any file changes
            autoWatch: true,

            browsers: ['PhantomJS'],

            exclude: getExcludeFiles(),

            files: [
              'Angular-Grunt-Boilerplate/target/build/webapp/app.js',
              'Angular-Grunt-Boilerplate/tests/spec/test.js',
            ],

            plugins : [
                'karma-jasmine',
                'karma-phantomjs-launcher',
            ],

            // frameworks to use
            // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
            // requirejs issue, "Disconnected (1 times), because no message in 10000 ms",see below:
            // http://stackoverflow.com/questions/23667102/disconnected-1-times-because-no-message-in-10000-ms-using-karma-jasmine
            frameworks: ['jasmine'],

            // test results reporter to use
            // possible values: 'dots', 'progress'
            // available reporters: https://npmjs.org/browse/keyword/karma-reporter
            // html - https://github.com/matthias-schuetz/karma-htmlfile-reporter
            reporters: ['progress'],
            
            colors: true,

    },

    daemon: {
        options: {
            singleRun: false
        }
    },

    run: {
        options: {
          singleRun: true
        }
    }
  });
};