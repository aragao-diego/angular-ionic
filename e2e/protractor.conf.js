exports.config = {

  allScriptsTimeout: 99999,

  specs: [
    './**/*.js'
  ],

  capabilities: {
    //'browserName': 'phantomjs',
    //'phantomjs.binary.path': require('phantomjs-prebuilt').path
    'browserName': 'chrome'
    //'browserName': 'firefox'
    //'chromeOptions': {args: ['--disable-extensions']},
  },

/*
multiCapabilities: [
  {
    'browserName': 'chrome'
    //seleniumAddress: 'http://172.24.128.158:4444/wd/hub'
  },
  {
    'browserName': 'firefox'
    //seleniumAddress: 'http://172.24.128.158:4444/wd/hub'
  },
  //{'browserName': 'phantomjs'}
],
*/


  //baseUrl: 'http://172.24.34.216:9011/',
  //baseUrl: 'http://localhost:9011/',
  //baseUrl: 'http://172.24.129.192:9080/autenticacao/',

  seleniumAddress: 'http://172.24.128.158:4444/wd/hub',
  //directConnect: true,

  framework: 'jasmine',

  onPrepare: function() {
    var SpecReporter = require('jasmine-spec-reporter');
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));


    var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
    jasmine.getEnv().addReporter(
       new Jasmine2HtmlReporter({
           savePath: './e2e/reports/',
           filePrefix: 'report',
           consolidate: true,
           consolidateAll: true
       })
   );

 },

  plugins: [
  ],

  //webdriverManagerUpdate: true,

  jasmineNodeOpts: {
    defaultTimeoutInterval: 999999
  }

};
