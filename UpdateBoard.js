class UpdateBoard{

  updateCell(c, e){

    if((this.isAlive(c) && (this.liveEnvironmentProportion(e) >= 4))
    || this.isAlive(c) && (this.liveEnvironmentProportion(e) <= 2)){
      this.kill(c)
      }
      else if(!this.isAlive(c) && (this.liveEnvironmentProportion(e) == 3)){
        this.birth(c)
      }
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
