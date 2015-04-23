
function Tower(position){
  this.position = position.clone();
  this.range = 10;
  this.closestTarget = {position: new Victor(Infinity, Infinity)};
}

Tower.prototype = {
  isInRange: function(target){
    return this.rangeToTarget(target)  < this.range;
  },

  rangeToTarget: function(target){
    return target.position.subtract(this.position).length();
  },

  chooseClosestTarget: function(targets){
    //go through all the targets. If it's distance is smaller than this.closestTarget, update this.closest target.
    for(var i = 0; i < targets.length; i++) {
      var target = targets[i];
      if(this.rangeToTarget(target) < this.rangeToTarget(this.closestTarget)){
        this.closestTarget = target;
      }
    }
    return this.closestTarget;
  }



}


