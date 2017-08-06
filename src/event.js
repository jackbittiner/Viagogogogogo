function Event(coordinates, id) {
  this.tickets = [];
  this.generateTickets();
  this.coordinates = coordinates;
  this.uniqueID = id;
}

Event.prototype.generateTickets = function() {
  var numberOfTickets = randomTickets()
  for (i = 0; i < numberOfTickets; i++) {
    this.tickets.push(new Ticket())
  }
}

randomTickets = function() {
  return Math.floor(Math.random() * (50));
}
