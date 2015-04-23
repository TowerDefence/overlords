describe("Creep", function() {
  var bullet;
  var creep;
  var damage;
  var bulletSize;
  var vic = new Victor(0,0);

  beforeEach(function() {
    creep = new Creep();
    bullet = new Bullet(vic,vic);
    damage = bullet.damage;
    bulletSize = bullet.size;
  });

  describe("move", function() {
    it("should be able to move a creep", function() {
      creep.generatePostion();
      var position = creep.position;
      creep.move();
      expect(creep.position).toEqual(position.add(creep.speed));
    });
  });

  describe("getShot", function() {
    it("should be able to get shot", function() {
      var lives = creep.lives;
      creep.getShot(damage);
      expect(creep.lives).toEqual(lives - damage);
    });

    it("should be able to die", function() {
      for (var k = 0; k <= creep.lives+1; k++ ) {
        creep.getShot(damage);
      };
      expect(creep.isAlive()).toEqual(false);
    });
  });

  describe("hasCollided", function() {
    it("should return true if creep has collided with a position", function() {
      creep.position = new Victor(5,5);
      var objectSize = 2;
      var objectPosition = new Victor(5,5);
      expect(creep.hasCollided(objectPosition,objectSize)).toEqual(true);
    });

    it("should return false if creep has not collided with a position", function() {
      creep.position = new Victor(25,5);
      var objectPosition = new Victor(4,5);
      var objectSize = 2;
      expect(creep.hasCollided(objectPosition,objectSize)).toEqual(false);
    });
  });

});
