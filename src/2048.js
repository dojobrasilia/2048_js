function Game(){
	this.init();
}

Game.prototype = {
	matrix : null,
    init : function(){
    	this.matrix = []
    	for(var i = 0; i < 4 ; i++){
    		this.matrix[i] = []
    		for(var j = 0; j < 4 ; j++){
    			this.matrix[i][j] = ' '
    		}
    	}
    },

	state : function(){
		return this.matrix;
	},

	fillRandomCell : function(){
		var column = Math.random();
		var line = Math.random();

		this.matrix[line][column] = '2';
	},

	newGame : function(){
		this.fillRandomCell();
		this.fillRandomCell();
	},
}