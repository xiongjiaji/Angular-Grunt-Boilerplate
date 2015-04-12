module.exports = function(grunt) {
    var path = require('path');

    grunt.loadNpmTasks('grunt-karma');

    grunt.config('karma',{
        options: {
            basePath: './',

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
                'src/lib/jquery-2.1.3.js',
                'src/lib/angular.js',
                'src/lib/angular-local-storage.js',
                'src/lib/jasmine-jquery.js',
                //'src/app.js',
                {pattern: 'tests/test_main.js', included: true},
                {pattern: 'target/build/webapp/**/*.js', included: false},
                {pattern: 'src/lib/**/*.js', included: false},
                {pattern: 'src/modules/**/*.js', included: false},

                {pattern: 'src/**/*.jade', included: false},

                {
                    pattern: 'src/modules/core/locale/*.json',
                    served: true,
                    included: false
                },

                {pattern: 'tests/spec/test.js', included: false},
                {pattern: 'target/build/webapp/tmp/views/**/*.js', included: false},
            ],

            plugins : [
                'karma-jasmine',
                'karma-phantomjs-launcher',
                'karma-requirejs',
            ],

            // frameworks to use
            // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
            // requirejs issue, "Disconnected (1 times), because no message in 10000 ms",see below:
            // http://stackoverflow.com/questions/23667102/disconnected-1-times-because-no-message-in-10000-ms-using-karma-jasmine
            frameworks: ['jasmine', 'requirejs'],

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