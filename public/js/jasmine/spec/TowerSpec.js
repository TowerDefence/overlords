describe("Tower", function() {
  var tower;
  var position;
  beforeEach(function() {
    position = new Victor(0,0);
    tower = new Tower(position);

  });

  it("should be defined", function() {
    expect(tower).toBeDefined();
  });

  describe("isInRange", function() {

    it("returns true if creep is in range ", function() {
      expect(tower.isInRange(tower.position)).toEqual(true);
    });

    it("returns false if creep is not in range ", function() {
      var towerRange = tower.range;
      var unitVector = new Victor(5,5).norm();
      var outOfRangeVector = unitVector.multiply(new Victor(2 * towerRange,2 * towerRange));

      expect(tower.isInRange(outOfRangeVector)).toEqual(false);
    });
  });



});
