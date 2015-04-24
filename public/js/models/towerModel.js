
function TowerModel(position, id){

  this.id = id
  this.$element = $("<div class='tower' src=''> </div>")
  this.position = position.clone();
  this.range = 100;
  this.radius = 5;
  this.fireRateMs = 1000;
  this.closestTarget = {position: new Victor(Infinity, Infinity)};
  this.hp = 5;
  this.gun = new BulletController();

  setInterval(
    (function(self){
      return function(){self.fireAtTargetIfInRange();}
    })(this)

    , this.fireRateMs);
}

TowerModel.prototype = {
  isInRange: function(target){
    return this.rangeToTarget(target)  < this.range;
  },

  rangeToTarget: function(target){
    return target.position.subtract(this.position).length();
  },

  chooseClosestTarget: function(targets){
    // for(var i = 0; i < targets.length; i++) {
    //   var target = targets[i];
    //   if(this.rangeToTarget(target) < this.rangeToTarget(this.closestTarget)){
    //     this.closestTarget = target;
    //   }
    // }
    // return this.closestTarget;
    for (var targetKey in targets) {
      console.log("targets")
      console.log(targets);
      if (targets.hasOwnProperty(targetKey)){
        console.log("target key")
        console.log(targetKey);
        var target = targets[targetKey];
        console.log("target")
        console.log(target);
        if(this.rangeToTarget(target) < this.rangeToTarget(this.closestTarget)){
          this.closestTarget = target;
        }
      }
    }
  },

  fireAtTargetIfInRange: function(){
    console.log("in fire at target")
    if(this.isInRange(this.closestTarget)){
                console.log("in fire if")
      return this.gun.shootBullet(this.postion, this.closestTarget.position);

    }
  },

  isDead: function(){
    return this.hp <= 0;
  },

  generateTower: function(){
    var $div = $("<div class='tower'><img class='towerImage' src='./public/images/ben-cropped.png'></div>").attr('id', "tower"+this.id);
    $div.css("top", this.position.x);
    $div.css("left", this.position.y);
    return $div;
  }

}


