function Ticket() {
  this.price = this.randomPrice();
}

Ticket.prototype.randomPrice = function() {
  return ((Math.random() * 100) + 1).toFixed(2);
}
