function CreepView() {

}

CreepView.prototype.renderWave = function(creeps) {
  $(".creep").remove();
  for (var i = 0; i < creeps.length; i++) {
    //var currentCreep = creeps[i];
    var x = creeps[i].position.x;
    var y = creeps[i].position.y;

    //var absolutePosition = ' style="top:'+x+'%;left:'+x+'%;'

    $("#game").append('<div class="creep"'+i+' style="top:'+y+'%;left:'+x+'px;"></div>');

  }
}
