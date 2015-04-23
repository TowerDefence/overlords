$(document).ready(function() {
  var location = new Victor(50,50);
  view = new View() //global on purpose!
  var towerControl = new TowerController();
  var bulletControl = new BulletController();

  var tower = towerControl.placeTower(location);
  // bulletControl.shootBullet(location, new Victor(100,100));

});
