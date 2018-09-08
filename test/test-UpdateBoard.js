'use strict';
var chai = require('chai');
var expect = require('chai').expect;
var UpdateBoard = require('./../UpdateBoard.js');
var updateboard = new UpdateBoard;
const board = [[0,0,0,0,0,0],
 [0,6,2,7,0,0],
 [0,1,0,3,0,0],
 [0,5,4,8,0,0],
 [0,0,0,0,0,0],
 [0,0,0,0,0,0]];
const cell_address = [2,2];

xit('returns the 8 surrounding cells as an array', function(){
  expect(updateboard.extractEnvironment(cell_address, board)).to.equal([8,5,7,6,3,1,4,2])
});
