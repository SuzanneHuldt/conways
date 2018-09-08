'use strict';

class UpdateBoard{
  updateBoard(board){
    for(var y = 0; y < board.length; y ++ 1){
      for(var x = 0; x < board[0].length; x ++ 1){
        var cell_address = [y,x];
        var cell = board[y,x];
        return this.updateCell(cell, this.extractEnvironment(cell_address, board));
      }
    }
  }
  updateCell(c, e){
    if((this.isAlive(c) && (this.liveEnvironmentProportion(e) >= 4))
    || this.isAlive(c) && (this.liveEnvironmentProportion(e) <= 2)){
      this.kill(c)
      }
      else if(!this.isAlive(c) && (this.liveEnvironmentProportion(e) == 3)){
        this.birth(c)
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

  kill(cell){
    cell = 0
  }

  birth(cell){
    cell = 1
  }

}
module.exports = UpdateBoard;
