function Game(){
  this.towers = [];
  this.bullets = [];
  this.creeps = [];
  this.towerController = new TowerController();
  this.creepController = new CreepController();
  view = new View();
}

Game.prototype = {
  spawnTowers : function(num){
    for (var i = 0; i < num; i++){
      var position = new Victor(Math.random() * 1000, Math.random() * 1000);
      this.placeTower(position);
    }
  },

  placeTower: function(position){
    var newTower = this.towerController.placeTower(position);
    this.towers.push(newTower);


  },

  placeCreep: function(position){
    // this.creeps.push(newCreep);

    // var creepController = new CreepController();
    // creepController.generateWave(10);
    // var creepView = new CreepView();
    // creepView.renderWave(creepController.creeps);

    // var myVar = setInterval(function() { timeDelay() }, 300);

    // function timeDelay() {
    //   //creepController.removeDead();
    //   creepController.moveCreeps();
    //   creepView.moveCreeps(creepController.creeps);
    //   if (creepController.wavePosition >= 2000) {
    //     myStopFunction();
    //   }
    // }

    // function myStopFunction() {
    //   clearInterval(myVar);
    // }
  },
  fireBullets: function() {

    for(var i = 0; i < this.towers.length; i++){
      var tower = this.towers[i];
      tower.chooseClosestTarget(this.creepController.creeps);
      var bullet = tower.fireAtTargetIfInRange();
      if(bullet){
        this.bullets.push(bullet);
      }
    }
  },

  runGame: function() {
    // towers fire bullets if target in range
    this.fireBullets();
    // bullets go into this.bullets
    // check if bullets/creeps die?
    // remove dead bullets/creeps
  }

};

// this.bullets.each { |bullet| bullet.isDead? ? bullet.delete && view.deleteBullet(id) <- delete.div : nil}

// isDead? if on screen


