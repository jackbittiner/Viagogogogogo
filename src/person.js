function Person(x,y,eventListing) {
  this.coordinates = [x,y];
  this.eventListing = eventListing;
  this.nearestEvents = [];
  this.findNearestEvents();
}

Person.prototype.findNearestEvents = function() {
  var dC = new DistanceCalculator();
  array = []
  var personCordinates = this.coordinates;
  this.eventListing.listings.forEach(function(event){
    event.distance = dC.calculateTotalDistance(event.coordinates, personCordinates);
    array.push(event)
  })
  this.nearestEvents = array.sort(function(a,b){return a.distance - b.distance})
  this.nearestEvents.splice(5);
}
