function Game(){
  this.towers = [];
  this.bullets = {};
  this.creeps = {};
  this.towerController = new TowerController();
  view = new View();
}

Game.prototype = {
  spawnTowers : function(num){
    for (var i = 0; i < num; i++){
      var location = new Victor(Math.random() * 400, Math.random() * 400);
      var newTower = this.towerController.placeTower(location);
      this.towers[newTower.id] = newTower;
    }
  },

  placeCreep: function(location) {
    var locClone = location.clone()
    var newCreep = {position: locClone, id: 1};
    this.creeps[newCreep.id] = newCreep;
  },

  placeTower: function(location) {
    var newTower = this.towerController.placeTower(location);
    this.towers[newTower.id] = newTower;
  },

  fireBullets: function() {

    for (var towerKey in this.towers) {
        if (this.towers.hasOwnProperty(towerKey)) {
          var tower = this.towers[towerKey];
          tower.chooseClosestTarget(this.creeps)
          var bullet = tower.fireAtTargetIfInRange();
          console.log("bullet:", bullet)
          this.bullets[bullet.id] = bullet;
        }
    }
    // eachKeyInObject(this.towers, function(tower){
    //   tower.chooseClosestTarget(this.creeps);
    //   console.log(this)
    //   var bullet = tower.fireAtTargetIfInRange();
    //   this.bullets[bullet.id] = bullet;
    // })


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


