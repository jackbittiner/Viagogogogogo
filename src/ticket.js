function Ticket() {
  this.price = randomPrice();
}

randomPrice = function() {
  return ((Math.random() * 100) + 1).toFixed(2);
}
