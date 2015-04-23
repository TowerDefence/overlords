function TowerController(location, id){
  this.idCount = 0;

}

TowerController.prototype = {
  placeTower: function(location){
    var model = new TowerModel(location, this.idCount++);//this needs bullet defined first
    $towerElement  = model.generateTower();
    view.addTower($towerElement);
    return model;
  }


}
