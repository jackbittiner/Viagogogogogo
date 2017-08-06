function EventListing(x, x2, y, y2){
	this.grid = new GridMap(x, x2, y, y2);
  this.listings = [];
  var numberOfEvents = randomEvents();
  for (var i = 0; i <= numberOfEvents; i++) {
    var coordinates = this.grid.coordinates[Math.floor(Math.random() * this.grid.coordinates.length)];
    this.listings.push(new Event(coordinates, i))
  }
}

randomEvents = function() {
  return Math.floor(Math.random() * (20) + 5);
}
