// var Victor = require('victor');

function Bullet(towerPosition, direction) {
  this.size = 1;
  this.position = towerPosition.clone().normalize();
  this.direction = direction.clone().normalize();
  this.damage = 1;
}


Bullet.prototype.updatePosition = function() {
  this.position.add(this.direction);
};

Bullet.prototype.generateBullet = function(id){

  var $div = $("<div class='bullet' id="+id+"><img class='ruby' src='../ruby.png'></div>").attr('id', "bullet"+id);
  $div.css("top", this.position.x);
  $div.css("left", this.position.y);
  return $div;

}

