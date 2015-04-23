// var Victor = require('victor');

function Bullet(towerPosition, direction, id) {
  this.id = id;
  this.size = 1;
  this.position = towerPosition.clone().normalize();
  this.direction = direction.clone().normalize();
  this.damage = 1;
  this.$div = {};

  setInterval(
    (function(self){
      return function(){self.updatePosition();}
    })(this),
   20);
}


Bullet.prototype.updatePosition = function() {
  this.position.add(this.direction);
  this.setDivPosition();

};

Bullet.prototype.setDivPosition = function(){
  this.$div.css("top", this.position.x);
  this.$div.css("left", this.position.y);
}

Bullet.prototype.generateBullet = function(){

  var $div = $("<div class='bullet'><img class='ruby' src='../ruby.png'></div>").attr('id', "bullet"+this.id);
  this.$div = $div;
  this.setDivPosition();
  return $div;

}

