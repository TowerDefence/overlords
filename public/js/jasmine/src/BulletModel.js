// var Victor = require('victor');

function Bullet(towerPosition, direction) {
  this.size = 1;
  this.position = towerPosition;
  this.direction = direction;
  this.damage = 1;
}


Bullet.prototype.updatePosition = function() {
  this.position = this.position.add(this.direction);
};
