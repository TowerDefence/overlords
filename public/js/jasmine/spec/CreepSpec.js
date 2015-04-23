describe("Creep", function() {
  var player;
  var song;

  beforeEach(function() {
    creep = new Creep();
    bullet = new Bullet();
  });

  it("should be able to move a creep", function() {
    var position = creep.position;
    creep.move();
    expect(creep.position).toEqual(current_x + creep.speed);
  });

  it("should be able to get shot", function() {
    var lives = creep.lives;
    var damage = bullet.damage;
    creep.get_shot(damage);
    expect(creep.lives).toEqual(lives - damage);
  });

  it("should be able to die", function() {
    for (var k = 1; k <= creep.lives; k++ ) {
      creep.get_shot();
    };
     expect(creep.alive).toEqual(false);
  });


});
