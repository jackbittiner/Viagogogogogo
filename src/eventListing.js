function EventListing(x, x2, y, y2){
	this.freeVenues = new GridMap(x, x2, y, y2);
  this.listings = [];
  this.generateEvents();
}

EventListing.prototype.generateEvents = function() {
  var numberOfEvents = randomEvents();
  for (var i = 0; i <= numberOfEvents; i++) {
    var coordinates = this.freeVenues.coordinates[Math.floor(Math.random() * this.freeVenues.coordinates.length)];
    this.listings.push(new Event(coordinates, i));
    this.freeVenues.coordinates.splice(coordinates, 1);
  }
}

randomEvents = function() {
  return Math.floor(Math.random() * (20) + 5);
}
