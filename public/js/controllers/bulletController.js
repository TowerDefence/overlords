function BulletController(){
  this.idCount = 0;
}

BulletController.prototype = {
  shootBullet: function(sourceLocation, targetLocation){
    var bullet = new Bullet(sourceLocation, targetLocation);
    $bulletElement  = model.generateBullet(this.idCount++);
    view.addBullet($bulletElement);
  }
}
