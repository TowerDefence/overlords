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
