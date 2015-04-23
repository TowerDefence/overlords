// var Victor = require('victor');

function Bullet(towerPosition, direction, id) {
  this.id = id
  this.size = 1;
  this.position = towerPosition.clone().normalize();
  this.direction = direction.clone().normalize();
  this.damage = 1;
}


Bullet.prototype.updatePosition = function() {
  this.position.add(this.direction);
};

Bullet.prototype.generateBullet = function(){

  var $div = $("<div class='bullet' id="+this.id+"><img class='ruby' src='../ruby.png'></div>").attr('id', "bullet"+id);
  $div.css("top", this.position.x);
  $div.css("left", this.position.y);
  return $div;

}

