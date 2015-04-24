describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should have an object of towers", function() {
    game.spawnTowers(1)
    expect(game.towers[0].id).toEqual(0)
  });
  it("should tell tower to fire at bullet", function() {
    game.creeps[0] = {position: new Victor(2,2)};
    console.log(game.creeps);
    var tower = game.towerController.placeTower(new Victor(1,1));
    game.towers[tower.id] = tower;
    game.fireBullets();
    expect(game.bullets[0].id).toEqual(0);
  });
  // it("should start with a direction", function() {
  //   expect(bullet.direction).toEqual(direction)
  // });
  // it("should have damage", function() {
  //   expect(bullet.damage).toEqual(1)
  // });
  // it("should update position", function() {
  //   bullet.updatePosition();
  //   expect(bullet.position).not.toEqual(towerPosition);
  // });
 });
