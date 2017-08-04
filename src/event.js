function Event() {
  this.tickets = [];
  for (i = 0; i < randomTickets(); i++) {
    this.tickets.push(new Ticket())
  }
}

randomTickets = function() {
  return Math.floor(Math.random() * (100));
}
