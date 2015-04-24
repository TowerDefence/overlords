function CreepView() {

}

CreepView.prototype.renderWave = function(creeps) {
  // $(".creep").remove();
  $container = $("#game");
  for (var i = 0; i < creeps.length; i++) {
    var x = creeps[i].position.x;
    var y = creeps[i].position.y;
    var $currentCreep = creeps[i].$element;
    $currentCreep.css({
      "top": y+"%",
      "left": x
    })
    $container.append($currentCreep);
  }
}

CreepView.prototype.moveCreeps= function(creeps) {
  for (var i = 0; i < creeps.length; i++) {
    var x = creeps[i].position.x;
    var y = creeps[i].position.y;

    var $currentCreep = creeps[i].$element;
    $currentCreep.css({
      "top": y+"%",
      "left": x
    })
  }
}

// $(...)[index]      // gives you the DOM element at index
// $(...).get(index)  // gives you the DOM element at index
// $(...).eq(index)   // gives you the jQuery object of element at index
