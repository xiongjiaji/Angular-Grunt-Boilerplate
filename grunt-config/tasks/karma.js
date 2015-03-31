module.exports = function(grunt) {
  var path = require('path');

  grunt.loadNpmTasks('grunt-karma');

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

            exclude: [],

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