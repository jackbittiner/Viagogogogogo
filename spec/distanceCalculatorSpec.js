describe('distanceCalculator', function() {

  beforeEach(function() {
    distanceCalculator = new DistanceCalculator();
  });

  describe('calculateLineDistance', function() {
    it('can calculate the distance between coordinates in one direction', function() {
      expect(distanceCalculator.calculateLineDistance(-1, 5)).toEqual(6);
      expect(distanceCalculator.calculateLineDistance(5, -1)).toEqual(6);
      expect(distanceCalculator.calculateLineDistance(0, 0)).toEqual(0);
    });
  });

  describe('calculateTotalDistance', function() {
    it('can calculate the manhattan distance between coordinates on x and y', function() {
      expect(distanceCalculator.calculateTotalDistance([-1, 1], [1, -1])).toEqual(4);
      expect(distanceCalculator.calculateTotalDistance([-10, 10], [-5, 5])).toEqual(10);
      expect(distanceCalculator.calculateTotalDistance([0, 0], [0, 0])).toEqual(0);
    });
  });
});
