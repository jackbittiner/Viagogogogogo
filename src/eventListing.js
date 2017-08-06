function EventListing(x, x2, y, y2){
	this.availableCoordinates = new GridMap(x, x2, y, y2);
  this.listings = [];
  var numberOfEvents = randomEvents();
  for (var i = 0; i <= numberOfEvents; i++) {
    var coordinates = this.availableCoordinates.coordinates[Math.floor(Math.random() * this.availableCoordinates.coordinates.length)];
    this.listings.push(new Event(coordinates, i));
    this.availableCoordinates.coordinates.splice(coordinates, 1);
  }
}

randomEvents = function() {
  return Math.floor(Math.random() * (20) + 5);
}
