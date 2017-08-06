function Event(coordinates, id) {
  this.tickets = [];
  var numberOfTickets = randomTickets()
  for (i = 0; i < numberOfTickets; i++) {
    this.tickets.push(new Ticket())
  }
  this.coordinates = coordinates;
  this.uniqueID = id;
}

randomTickets = function() {
  return Math.floor(Math.random() * (50));
}
