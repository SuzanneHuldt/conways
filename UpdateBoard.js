'use strict';


class UpdateBoard{
  updateBoard(board){
    var updatedBoard = board.slice[0];
    for(var y = 0; y < board.length; y++){
      for(var x = 0; x < board[0].length; x++){
        var cell_address = [y,x];
        var cell = board[y,x];
        return this.updateCell(cell, this.extractEnvironment(cell_address, board), cell_address, updatedBoard);
      }
    }
    return updatedBoard;
  }
  updateCell(c, e, cell_address, updatedBoard){
    if((this.isAlive(c) && (this.liveEnvironmentProportion(e) >= 4))
    || this.isAlive(c) && (this.liveEnvironmentProportion(e) <= 2)){
      this.kill(cell_address, updatedBoard)
      }
      else if(!this.isAlive(c) && (this.liveEnvironmentProportion(e) == 3)){
        this.birth(cell_address, updatedBoard)
      }
  }

  extractEnvironment(cell_address, board){
    var x = cell_address[1];
    var y = cell_address[0];
    var environment = [];
    environment.push(board[(x+1)][y+1])
    environment.push(board[(x+1)][y-1])
    environment.push(board[(x-1)][y+1])
    environment.push(board[(x-1)][y-1])
    environment.push(board[(x)][y+1])
    environment.push(board[(x)][y-1])
    environment.push(board[(x+1)][y])
    environment.push(board[(x-1)][y])
    return environment;
  }

  liveEnvironmentProportion(e){
    var result = [];
    e.forEach(function(x){
      if(this.isAlive(x)){
        result.push(x)
      }
    });
    return result.length
  }

  isAlive(cell){
    return cell == 1
  }

  kill(cell_address, updatedBoard){
    var x = cell_address[1];
    var y = cell_address[0];
    updatedBoard[y,x] = 0
  }

  birth(cell_address, updatedBoard){
    var x = cell_address[1];
    var y = cell_address[0];
    updatedBoard[y,x] = 1
  }

}
module.exports = UpdateBoard;
