function DistanceCalculator() {
}

DistanceCalculator.prototype.calculateLineDistance = function(a, b) {
  return Math.abs(a - b);
}

DistanceCalculator.prototype.calculateTotalDistance = function (a, b) {
  xDistance = this.calculateLineDistance(a[0], b[0]);
  yDistance = this.calculateLineDistance(a[1], b[1]);
  totalDistance = xDistance + yDistance;
  return totalDistance;
}
