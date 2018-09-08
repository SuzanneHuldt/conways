'use strict';
const express = require('express');
const app = express();
const UpdateBoard = require('./UpdateBoard.js');
const updateboard = new UpdateBoard;
var board = [];

app.get('/', function (req, res){
  res.send(updateboard.updateBoard());
  console.log(board);
});


app.listen(3000);
