function Game(initialMatrix){
	this.init(initialMatrix);
}

Game.prototype = {
	LEFT : { start_column:1, end_column:4, target_column:0},
	RIGHT : { start_column:0, end_column:3, target_column:3},

	BLANK : ' ',
	matrix : null,
    init : function(initialMatrix){
    	if (initialMatrix) {
    		this.matrix = initialMatrix;
    	} else {
	    	this.matrix =  [[' ',' ',' ',' '],
				            [' ',' ',' ',' '],
				            [' ',' ',' ',' '],
				            [' ',' ',' ',' ']];
    	}

    },

	state : function(){
		return this.matrix;
	},

	fillRandomCell : function(){
		var column = this.randomPosition();
		var line = this.randomPosition();
		if (this.cell(column, line) == this.BLANK){
			this.cell(column, line, '2');
		}else{
			this.fillRandomCell();
		}
	},

	newGame : function(){
		this.fillRandomCell();
		this.fillRandomCell();
	},

	randomPosition : function() {
		return Math.floor(Math.random()*4)
	},

	moveLeft : function(){
		this.move(this.LEFT);

	},

	moveRight : function(){
		this.move(this.RIGHT);
	},

	moveUp : function() {
		for(var line = 1; line < 4; line++){
			for(var column = 0; column < 4; column++){
				if(this.cell(column, line) != this.BLANK){
					this.cell(column, 0, this.cell(column, line)) 
					this.cell(column, line, this.BLANK)
				}
			}
		}
	},

	moveDown : function() {
		for(var line = 0; line < 3; line++){
			for(var column = 0; column < 4; column++){
				if(this.cell(column, line) != this.BLANK){
					this.cell(column, 3, this.cell(column, line)) 
					this.cell(column, line, this.BLANK)
				}
			}
		}
	},

	move : function(direction){
		for(var line = 0; line < 4; line++){
			for(var column = direction.start_column; column < direction.end_column; column++){
				if(this.cell(column, line) != this.BLANK){
					this.cell(direction.target_column, line, this.cell(column, line)) 
					this.cell(column, line, this.BLANK)
				}
			}
		}
	},

	cell : function(column, line, value){
		if (value){
			this.matrix[line][column] = value;
		}
		return this.matrix[line][column];
	},
}