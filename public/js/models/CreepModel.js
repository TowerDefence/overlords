
function Creep() {
  this.generatePosition();
  this.speed = new Victor(5,0);
  this.radius = 10;
  this.lives = 1;
  this.$element = $('<div class="creep"></div>');
}

Creep.prototype.generatePosition = function() {
  var x = Math.floor((Math.random() * 2) + 1);
  var y = Math.floor((Math.random() * 100) + 1);
  this.position = new Victor(x,y)
}

Creep.prototype.move = function() {
  this.position = this.position.add(this.speed)
}

Creep.prototype.getShot = function(damage) {
  this.lives -= damage;
}

Creep.prototype.hasCollided = function(objectPos,objectRadius) {
  var distance = this.position.clone().subtract(objectPos).length();

  if ((distance - this.radius - objectRadius) <= 0) {
    return true;
  }
  else {
    return false;
  }
}

Creep.prototype.isAlive = function() {
  return (this.lives > 0);
}
