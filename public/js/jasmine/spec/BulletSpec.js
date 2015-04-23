describe("Bullet", function() {
  var bullet;
  var towerPosition;

  beforeEach(function() {
    towerPosition = [8,8]
    bullet = new Bullet(towerPosition);
  });

  it("should have a size", function() {

    expect(bullet.size).toEqual(10);
  });
  it("should start with towerPosition", function() {
    expect(bullet.position).toEqual(towerPosition)
  });
  it("should start with a direction", function() {
    expect(bullet.direction).toEqual(bullet.direction)
  });
 });