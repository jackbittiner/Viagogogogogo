function Event(xCoordinate, yCoordinate) {
  this.tickets = [];
  var numberOfTickets = randomTickets()
  for (i = 0; i < numberOfTickets; i++) {
    this.tickets.push(new Ticket())
  }
  this.coordinates = [xCoordinate, yCoordinate];
}

randomTickets = function() {
  return Math.floor(Math.random() * (50));
}
