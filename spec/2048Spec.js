describe("2048", function() {
  beforeEach(function() {
  });

  it("all begins with a 4x4 matrix", function() {
    var game = new Game();
    expect([[' ',' ',' ',' '],
            [' ',' ',' ',' '],
            [' ',' ',' ',' '],
            [' ',' ',' ',' ']]).toEqual(game.state());

  });

  it("initializes the game with two occupied positions", function() {
    var randomPos = [2,2,0,3];
    var i = 0;
    Math.random = function() {
      return randomPos[i++];
    }

    var game = new Game();
    game.newGame();    
    expect([[' ',' ',' ',' '],
            [' ',' ',' ',' '],
            [' ',' ','2',' '],
            ['2',' ',' ',' ']]).toEqual(game.state());

  });
});
