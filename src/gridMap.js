function gridMap(x, x2, y, y2){
	this.grid = [];
    for( var i = x; i <= x2; i++ ) {
        for( var j = y; j <= y2; j++ ) {
            this.grid.push([i,j]);
        }
    }
}
