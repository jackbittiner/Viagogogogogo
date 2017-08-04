function Event(xCoordinate, yCoordinate) {
  this.tickets = [];
  for (i = 0; i < randomTickets(); i++) {
    this.tickets.push(new Ticket())
  }
  this.coordinates = [xCoordinate, yCoordinate];
}

randomTickets = function() {
  return Math.floor(Math.random() * (100));
}
