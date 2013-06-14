var yql=require('../yql');
var {test, context, assert} = require('sjs:test/suite');

context {||
  test("query") {||
    var rv = yql.query("select * from html where url=@url and xpath='//h1'",
                      {url:"http://www.stratifiedjs.org"});
    rv.results.h1.content .. assert.eq("Stratified");
  }

  test("getFile") {||
    var file = yql.getFile("http://stratifiedjs.org/presentations/OSCON2010/");
    file.indexOf("Alexander Fritze") .. assert.notEq(-1);
  }

}.ignoreLeaks('_oni_jsonpcb');
