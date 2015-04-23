// var Victor = require('victor');

function Bullet(towerPosition, direction) {
  this.size = 1;
  this.position = towerPosition.clone();
  this.direction = direction.clone();
  this.damage = 1;
  console.log(this.position);
}


Bullet.prototype.updatePosition = function() {
  this.position.add(this.direction);
  console.log(this.position);
};
