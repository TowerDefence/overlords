var Victor = require('victor');

function Bullet(towerPosition, direction) {
  this.size = 10;
  this.position = towerPosition;
  this.direction = direction;
  this.damage = 1;
  console.log(this.position)
  console.log(this.direction)
}

Bullet.prototype.moveSpeed = function() {

};


Bullet.prototype.updatePosition = function() {
  console.log(towerPosition + direction)
};


var towerPosition = new Victor(8,8).normalize();
var direction = new Victor(9,8).normalize();
var bullet = new Bullet(towerPosition, direction)
bullet.updatePosition
