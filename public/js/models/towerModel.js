
function Tower(position){
  this.position = position;
  this.range = 10;
}

Tower.prototype = {
  isInRange: function(targetPosition){
    return targetPosition.subtract(this.position).length() < this.range;
  }



}


