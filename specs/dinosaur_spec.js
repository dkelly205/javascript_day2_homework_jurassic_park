var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){

  var dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur("Tyrannosaurus", 2);
  })

  it('should have a type', function(){
    assert.strictEqual(dinosaur.type, "Tyrannosaurus");
  })

  it('should have a number of offspring', function(){
    assert.strictEqual(dinosaur.numberOfOffSpring, 2);
  })


});
