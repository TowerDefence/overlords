describe("Tower", function() {
  var tower;

  beforeEach(function() {
    var position = new Victor(0,0);
    tower = new Tower(position);

  });

  it("should be defined", function() {
    expect(tower).toBeDefined();
  });

  // describe("isInRange", function() {

  //   it("returns true if creep is in range ", function() {
  //     expect(tower.isInRange(position)).toEqual(true);
  //   });

  //   it("returns false if ep is not in range ", function() {
  //     expect(tower.isInRange(position)).toEqual(false);
  //   });
  // });



});
