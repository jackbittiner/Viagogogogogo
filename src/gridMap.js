function GridMap(x, x2, y, y2){
	this.coordinates = [];
    for( var i = x; i <= x2; i++ ) {
        for( var j = y; j <= y2; j++ ) {
            this.coordinates.push([i,j]);
        }
    }
}
