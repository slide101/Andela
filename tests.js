'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sumofprimes.js');

describe("This function calculates the sum of prime numbers", function() {
  it("it should return 17 with an input of 10", function() {
    assert(
      lib.sumofprimes(10) == 17 
      );
  });
  it("it should return undefined for unknown values", function() {
    assert(
      lib.sumofprimes(n) == "undefined"
    );
  });
  it("it should return 0 with negative numbers ", function() {
    assert(
      lib.sumofprimes(-n) == 0
    ); 
  });

  it("it should return 0 with the number zero ", function() {
    assert(
      lib.sumofprimes(0) == 0
    ); 
  });
 
 it("it should return undefined with the number strings ", function() {
    assert(
      lib.sumofprimes('hello') == "undefined"
    ); 
  });

 it("it should return zero with no argument ", function() {
    assert(
      lib.sumofprimes() == 0
    ); 
  });
    
   it("it should return undefined with a complex number", function() {
    assert(
      lib.sumofprimes(n) == "undefined"
    ); 
  });
     it("it should return undefined with an input of an array", function() {
    assert(
      lib.sumofprimes(array[]) == "undefined"
    ); 
  });
     it("it should return 0 with a boolen ", function() {
    assert(
      lib.sumofprimes(True) == 0
    ); 
  });
     it("it should return 1060 with an input of 100 ", function() {
    assert(
      lib.sumofprimes(100) == 1060
    ); 
  });
    
});