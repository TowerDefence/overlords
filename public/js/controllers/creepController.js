
function CreepController() {
  this.creeps = [];
  this.numCreeps;
  this.wavePosition;
}

CreepController.prototype.generateWave = function(numCreeps) {
  this.numCreeps = numCreeps;
  for (var i = 0; i <= numCreeps; i++) {
    var creep = new Creep();
    this.creeps.push(creep);
  }
}

CreepController.prototype.creepsHaveCollided = function(objectPos,objectRadius) {
  for (var i = 0; i <= this.numCreeps; i++) {
    var currentCreep = this.creeps[i];
    if (currentCreep.hasCollided(objectPos,objectRadius) {
      //temp hardcoded damage
      currentCreep.getShot(1);
    }
  }
}

CreepController.prototype.moveCreeps = function() {
  for (var i = 0; i <= this.numCreeps; i++) {
    var currentCreep = this.creeps[i];
    currentCreep.move();
  }
  this.wavePosition = this.creeps[0].position.x;
}


CreepController.prototype.removeDead = function() {
  for (var i = 0; i <= this.numCreeps; i++) {
    var currentCreep = this.creeps[i];
    if (!currentCreep.isAlive()) {
      //this.creeps.splice( i, 1 );
      //this.numCreeps -= 1;
      creeps[i].$element.remove();
    };
  }

}

//temporary game controller logic
// $(document).ready(function() {
//   var creepController = new CreepController();
//   creepController.generateWave(10);
//   var creepView = new CreepView();
//   creepView.renderWave(creepController.creeps);

//   var myVar = setInterval(function() { timeDelay() }, 300);

//   function timeDelay() {
//     //creepController.removeDead();
//     creepController.moveCreeps();
//     creepView.moveCreeps(creepController.creeps);
//     if (creepController.wavePosition >= 100) {
//       myStopFunction();
//     }
//   }

//   function myStopFunction() {
//     clearInterval(myVar);
//   }


// });
