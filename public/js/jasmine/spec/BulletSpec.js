describe("Bullet", function() {
  var bullet;
  var towerPosition;
  var direction;

  beforeEach(function() {
    towerPosition = new Victor(0,0).normalize();
    direction = new Victor(2,5).normalize();
    bullet = new Bullet(towerPosition,direction);
  });

  it("should have a size", function() {

    expect(bullet.size).toEqual(1);
  });
  it("should start with towerPosition", function() {
    expect(bullet.position).toEqual(towerPosition)
  });
  it("should start with a direction", function() {
    expect(bullet.direction).toEqual(direction)
  });
  it("should have damage", function() {
    expect(bullet.damage).toEqual(1)
  });
  it("should update position", function() {
    bullet.updatePosition();
    expect(bullet.position).not.toEqual(towerPosition);
  });
 });