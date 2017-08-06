function Event(coordinates, id) {
  this.tickets = [];
  this.cheapestTicket = null;
  this.generateTickets();
  this.coordinates = coordinates;
  this.uniqueID = id;
  this.calculateCheapestTicket();
}

Event.prototype.generateTickets = function() {
  var numberOfTickets = randomTickets()
  for (i = 0; i < numberOfTickets; i++) {
    this.tickets.push(new Ticket())
  }
}

Event.prototype.calculateCheapestTicket = function() {
  if(this.tickets.length === 0) {
    this.cheapestTicket = "There are no tickets available for this event!"
  } else {
    var sortedArray = this.tickets.sort(function(a,b){return a.price-b.price})
    var cheapestTicket = sortedArray[0];
    this.cheapestTicket = cheapestTicket;
  }
}

randomTickets = function() {
  return Math.floor(Math.random() * (50));
}
