var {test, assert, context} = require('sjs:test/suite');
var g = require('../google');
var logging = require('sjs:logging');

context {||
  test('search') {||
    var results = g.search("croczilla");
    results.responseData.results[0].url .. assert.ok();
  }

  test('search(., {start:4})') {||
    var results = g.search("croczilla", {start:4});
    results.responseData.results[0].url .. assert.ok();
  }

  test('siteSearch(., {start:4})') {||
    var results = g.siteSearch("news", "http://cnn.com", {start:4});
    logging.info(results);
    results.responseData.results[0].url .. assert.ok();
  }

  test('translate') {||
    var response = g.translate("hello", "de");
    if (!response.responseData) return response.responseDetails;
    response.responseData.translatedText .. assert.eq("Hallo");
  }.skip("translate is now a paid api");

  test('BROKEN: load') {||
    g.load("language", "1");
    google.language.isFontRenderingSupported("hi") .. assert.ok();
  }.skip();

}.ignoreLeaks('_oni_jsonpcb');
