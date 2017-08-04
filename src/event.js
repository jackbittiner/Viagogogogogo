function Event(xCoordinate, yCoordinate, id) {
  this.tickets = [];
  var numberOfTickets = randomTickets()
  for (i = 0; i < numberOfTickets; i++) {
    this.tickets.push(new Ticket())
  }
  this.coordinates = [xCoordinate, yCoordinate];
  this.uniqueID = id;
}

randomTickets = function() {
  return Math.floor(Math.random() * (50));
}
