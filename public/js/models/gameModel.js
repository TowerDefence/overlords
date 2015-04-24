function Game(){
  this.towers = [];
  this.bullets = [];
  this.creeps = [];
  this.towerController = new TowerController();
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
    var newCreep = {position: position, id: 1};
    this.creeps.push(newCreep);
  },
  fireBullets: function() {

    for(var i = 0; i < this.towers.length; i++){
      var tower = this.towers[i];
      tower.chooseClosestTarget(this.creeps);
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


