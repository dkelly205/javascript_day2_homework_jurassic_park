var assert = require('assert');
var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js');

describe('Park', function(){
  var dinosaur;
  var dinosaur2;
  var dinosaur3;
  var dinosaur4;
  var dinosaur5;
  var park;

  beforeEach(function(){
    dinosaur = new Dinosaur("Tyrannosaurus", 2);
    dinosaur2 = new Dinosaur("Tyrannosaurus", 5);
    dinosaur3 = new Dinosaur("Velociraptor", 6);
    dinosaur4 = new Dinosaur("Triceratops",10);
    dinosaur5 = new Dinosaur("Triceratops",8);
    park = new Park("Jurassic Park");
  })

  it('should have a name', function(){
    assert.strictEqual(park.name, "Jurassic Park");
  })

  it('should start with empty enclosure', function(){
    assert.strictEqual(park.enclosure.length, 0);
  })

  it('should be able to add a dinosaur to enclosure', function(){
    park.addDinosaur(dinosaur);
    assert.strictEqual(park.enclosure.length, 1);
    assert.deepStrictEqual(park.enclosure, [dinosaur]);
  })

  it('should be able to remove dinosaur by type', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.removeDinosaurByType("Tyrannosaurus");
    assert.strictEqual(park.enclosure.length, 2);



  })
})
