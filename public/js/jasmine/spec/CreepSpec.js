describe("Creep", function() {

  var damage = bullet.damage;
  var bulletSize = bullet.size;

  beforeEach(function() {
    creep = new Creep();
    bullet = new Bullet();
  });

  it("should be able to move a creep", function() {
    var position = creep.position;
    creep.move();
    expect(creep.position).toEqual(position.add(creep.speed));
  });

  it("should be able to get shot", function() {
    var lives = creep.lives;
    creep.getShot(damage);
    expect(creep.lives).toEqual(lives - damage);
  });

  it("should be able to die", function() {
    for (var k = 1; k <= creep.lives; k++ ) {
      creep.getShot(damage);
    };
     expect(creep.alive).toEqual(false);
  });

  it("should return true if creep has collided with a position", function() {
    var objectPosition = new Victor(5,5);
    var objectSize = 2;
    var creepPosition = new Victor(5,5);
    expect(creep.hasCollided(objectPosition,objectSize)).toEqual(true);
  });

  it("should return false if creep has not collided with a position", function() {
    var objectPosition = new Victor(4,5);
    var objectSize = 2;
    var creepPosition = new Victor(25,5);
    expect(creep.hasCollided(objectPosition,objectSize)).toEqual(false);
  });


});
