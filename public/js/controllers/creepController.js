
function CreepController() {
  this.creeps = [];
  this.numCreeps;
}

CreepController.prototype.generateWave = function(numCreeps) {
  this.numCreeps = numCreeps;
  for (var i = 0; i <= numCreeps; i++) {
    creep = new Creep();
    creep.generatePostion();
    this.creeps.push(creep);
  }
}

CreepController.prototype.moveCreeps = function() {
  for (var i = 0; i <= this.numCreeps; i++) {
    var currentCreep = this.creeps[i];
    currentCreep.move();
  }
}


CreepController.prototype.removeDead = function() {
  for (var i = 0; i <= this.numCreeps; i++) {
    var currentCreep = this.creeps[i];
    if (!currentCreep.isAlive()) {
      this.creeps.splice( i, 1 );
      this.numCreeps -= 1;
    };
  }

}

//temporary game controller logic
$(document).ready(function() {
  var creepController = new CreepController();
  creepController.generateWave(10);
  var creepView = new CreepView();
  creepView.renderWave(creepController.creeps);

  var i = 0;
  while (i < 500){
    var func = function() {
      creepController.removeDead();
      creepController.moveCreeps();
      creepView.renderWave(creepController.creeps);
    }
    i++;
    setTimeout(func, 1000);
  }
});
