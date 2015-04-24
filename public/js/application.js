$(document).ready(function() {
  // var location = new Victor(50,50);
  // view = new View(); //global on purpose!
  // var towerControl = new TowerController();
  // var bulletControl = new BulletController();

  // var tower = towerControl.placeTower(location);
  // bulletControl.shootBullet(location, new Victor(100,100));

  game = new Game();
  game.placeTower(new Victor(100,100));
  game.placeCreep(new Victor(110,110));
  game.runGame();


});

// function eachKeyInObject(obj, func){
//   for(key in obj){
//     if(obj.hasOwnProperty(key)){
//       var value = obj[key];
//       func(value);
//     }
//   }
// }


