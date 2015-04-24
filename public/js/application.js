$(document).ready(function() {
  // var location = new Victor(50,50);
  // view = new View(); //global on purpose!
  // var towerControl = new TowerController();
  // var bulletControl = new BulletController();

  // var tower = towerControl.placeTower(location);
  // bulletControl.shootBullet(location, new Victor(100,100));

  // game = new Game();
  // game.placeTower(new Victor(100,100));
  // game.placeCreep(new Victor(110,110));
  // game.runGame();

    var creepController = new CreepController();
    creepController.generateWave(10);
    var creepView = new CreepView();
    creepView.renderWave(creepController.creeps);

    var myVar = setInterval(function() { timeDelay() }, 300);

    function timeDelay() {
      //creepController.removeDead();
      creepController.moveCreeps();
      creepView.moveCreeps(creepController.creeps);
      if (creepController.wavePosition >= 2000) {
        myStopFunction();
      }
    }

    function myStopFunction() {
      clearInterval(myVar);
    }

    var counter = 0

      $('html').click(function(e){
        e.preventDefault();
        counter++

        $('#game').append("<div class='bullet' id="+counter+"><img class='ruby' src='public/images/ruby.png'></div>")

        var towerPosition = new Victor(Math.floor((Math.random() * 800) + 1),Math.floor((Math.random() * 800) + 1));
        var direction = new Victor(Math.floor((Math.random() * 10) + 1),Math.floor((Math.random() * 10) + 1));
        var bullet = new Bullet(towerPosition,direction)
        var bulletsCounter = counter
          $('#'+bulletsCounter).css("top", bullet.position.x);
          $('#'+bulletsCounter).css("left", bullet.position.y);
          setInterval(function(){
          bullet.updatePosition();

          $('#'+bulletsCounter).css("top", bullet.position.x);
          $('#'+bulletsCounter).css("left", bullet.position.y);
         }, 10);
      });

});

// function eachKeyInObject(obj, func){
//   for(key in obj){
//     if(obj.hasOwnProperty(key)){
//       var value = obj[key];
//       func(value);
//     }
//   }
// }


