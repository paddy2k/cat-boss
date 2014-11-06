var assert = require('assert')
  , Cat = require('../cat-compiled.js').Cat;



describe('Cat prototype', function(){
  it('should be a function', function(){
    assert.equal(typeof Cat, 'function')
  })
})

var bossCat = new Cat();
describe('Boss cat:', function(){
  it('should exist', function(){
    assert.equal(!!bossCat, true)
  })

  it('should be called \"Simon\"', function(){
    assert.equal(bossCat.name, 'Simon')
  })

  it('should be able to meow', function(){
    assert.equal(bossCat.meow(), 'MROW')
  })

  it('should be able to eat', function(){
    assert.equal(bossCat.eat(), 'nom nom nom')
  })

  it('should destroy the house', function(){
    console.log(window['Object']);
    bossCat.destroyTheHouse();
    console.log(window['Object']);

    assert.equal(bossCat.eat(), 'nom nom nom')
  })

  it('should sleep', function(){
    bossCat.sleep(function(){
       expect(undefined).to.be.defined;
       done(); // async
   });
  })
})