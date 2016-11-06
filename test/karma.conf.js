module.exports = function(config){
    if(process.argv[3] && process.argv[3] !== ''){
        var arg = process.argv[3].split('--')[1];

        var suites = arg.split('=');
        if(suites[0]=='suite'){
            suite = suites[1];
        }else {
            suite = '';
        }
    }else {
        suite = '';
    }


    config.set({

        basePath : '../app/',

        files : [
            "bower_components/angular/angular.js",
            "bower_components/angular-animate/angular-animate.js",
            "bower_components/angular-aria/angular-aria.js",
            "bower_components/angular-material/angular-material.js",
            "bower_components/angular-ui-router/release/angular-ui-router.js",
            "bower_components/oclazyload/dist/ocLazyLoad.js",
            "bower_components/angular-translate/angular-translate.min.js",
            "bower_components/angular-translate-loader-url/angular-translate-loader-url.min.js",
            "bower_components/angular-translate-loader-partial/angular-translate-loader-partial.min.js",
            "bower_components/angular-material-icons/angular-material-icons.min.js",
            "bower_components/angular-breadcrumb/release/angular-breadcrumb.js",
            "bower_components/lodash/lodash.min.js",
            "bower_components/restangular/dist/restangular.min.js",
            "bower_components/angular-mocks/angular-mocks.js",

            { pattern: '*-module.js', watched: true, included: true, served: true},

            { pattern: 'modules/*/*-module.js', watched: true, included: true, served: true},
            { pattern: 'modules/*/filters/*-directive.js', watched: true, included: true, served: true},
            { pattern: 'modules/*/directives/*-directive.js', watched: true, included: true, served: true},
            { pattern: 'modules/*/services/*-service.js', watched: true, included: true, served: true},



            { pattern: 'modules/*/*/*-module.js', watched: true, included: true, served: true},
            { pattern: 'modules/**/*/routes/*-routes.js', watched: true, included: true, served: true},
            { pattern: 'modules/**/*/controllers/*-controller.js', watched: true, included: true, served: true},
            { pattern: 'modules/*/*/directives/*-directive.js', watched: true, included: true, served: true},
            { pattern: 'modules/*/*/services/*-service.js', watched: true, included: true, served: true},

            { pattern: 'modules/*/*/tests/'+ suite +'*-test.js', watched: true, included: true, served: true}

        ],

        autoWatch : true,

        frameworks: [
            'jasmine',
            'jasmine-matchers'
        ],

        //browsers : ['Chrome', 'PhantomJS'],
        browsers : ['PhantomJS2'],

        singleRun: true,

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-jasmine-matchers',
            'karma-phantomjs2-launcher'
            //'karma-junit-reporter'
        ],

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        proxies: {
            /*'/modules/': '/base/modules/',
            '/filters/': '/base/filters/',
            '/directives/': '/base/directives/'*/
        }

    });
};
