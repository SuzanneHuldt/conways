'use strict';

class UpdateBoard{
  updateBoard(board){
    var x = 0;
    var y = 0;
    board[y][x]
    // for x in board
    //this.updateCell(x, this.extractEnvironment(x, board))
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
    console.log(board)
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
