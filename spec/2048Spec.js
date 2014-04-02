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
    var half = 0.57893678;
    var randomPos = [half,half,half,half,0/4,3.0/4];
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

  it("move all numbers to the left", function() {
    
    var game = new Game( [[' ',' ',' ',' '],
                          [' ',' ',' ',' '],
                          [' ',' ','2',' '],
                          ['2',' ',' ',' ']]);
    game.moveLeft(); 

    expect([[' ',' ',' ',' '],
            [' ',' ',' ',' '],
            ['2',' ',' ',' '],
            ['2',' ',' ',' ']]).toEqual(game.state());

  });

  it("move all numbers to the right", function() {
    
    var game = new Game( [[' ',' ',' ',' '],
                          [' ',' ',' ','2'],
                          [' ',' ','2',' '],
                          [' ',' ',' ',' ']]);
    game.moveRight(); 

    expect([[' ',' ',' ',' '],
            [' ',' ',' ','2'],
            [' ',' ',' ','2'],
            [' ',' ',' ',' ']]).toEqual(game.state());

  });

  it("move all numbers to the top", function() {
    
    var game = new Game( [[' ','2',' ',' '],
                          [' ',' ',' ',' '],
                          [' ',' ','2',' '],
                          [' ',' ',' ',' ']]);
    game.moveUp(); 

    expect([[' ','2','2',' '],
            [' ',' ',' ',' '],
            [' ',' ',' ',' '],
            [' ',' ',' ',' ']]).toEqual(game.state());

  });

  it("move all numbers to the botton", function() {
    
    var game = new Game( [[' ','2',' ',' '],
                          [' ',' ',' ',' '],
                          [' ',' ',' ',' '],
                          [' ',' ','2',' ']]);
    game.moveDown(); 

    expect([[' ',' ',' ',' '],
            [' ',' ',' ',' '],
            [' ',' ',' ',' '],
            [' ','2','2',' ']]).toEqual(game.state());

  });
});
