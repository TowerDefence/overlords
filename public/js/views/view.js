function View(){

}

View.prototype = {
  addTower: function($tower){
    $("#game").append($tower);
  },
  removeTower: function(id){
    $("button"+id).remove();
  },
  addBullet: function(){
    $('#'+bulletsCounter).css("top", bullet.position.x);
    $('#'+bulletsCounter).css("left", bullet.position.y);
  }
};
