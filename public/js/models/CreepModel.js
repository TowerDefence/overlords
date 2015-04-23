
function Creep() {
  this.position = new Victor(5,5);
  this.speed = new Victor(5,0);
  this.radius = 10;
  this.lives = 3;
  this.alive = true;
}

Creep.prototype.move = function() {
  this.position = this.position.add(this.speed)
}

Creep.prototype.getShot = function(damage) {
  this.lives = this.lives - damage;
  this.updateAlive();
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

Creep.prototype.updateAlive = function() {
  if (this.lives = 0) {
    this.alive = false;
  }
}
