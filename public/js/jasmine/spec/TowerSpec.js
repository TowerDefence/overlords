describe("Tower", function() {
  var tower;
  var position;
  beforeEach(function() {
    position = new Victor(0,0);
    tower = new TowerModel(position, 1);
  });

  it("should be defined", function() {
    expect(tower).toBeDefined();
  });

  describe("isInRange", function() {

    it("returns true if creep is in range ", function() {
      var inRangeTarget = {position: tower.position};
      expect(tower.isInRange(inRangeTarget)).toEqual(true);
    });

    it("returns false if creep is not in range ", function() {
      var towerRange = tower.range;
      var unitVector = new Victor(5,5).norm();
      var outOfRangeVector = unitVector.multiply(new Victor(2 * towerRange,2 * towerRange));
      var outOfRangeTarget = {position: outOfRangeVector};

      expect(tower.isInRange(outOfRangeTarget)).toEqual(false);
    });
  });

  describe("chooseClosestTarget", function() {

    it("stores the position of the closest target", function() {

      var targets = [];
      var closest = new Victor(1,1);
      var mediumDistance = new Victor(2,2);
      var furthest = new Victor(3,3);
      targets.push({position: closest}, {position: mediumDistance}, {position: furthest});

      tower.chooseClosestTarget(targets);
      console.log(tower.closestTarget);

      expect(tower.closestTarget.position).toEqual(closest);

    });

  });

  it("can die", function() {
    expect(tower.isDead()).toEqual(false);
    tower.hp -= tower.hp;
    expect(tower.isDead()).toEqual(true);
  });

});
