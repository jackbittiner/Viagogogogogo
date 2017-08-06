describe('distanceCalculator', function() {

  beforeEach(function() {
    distanceCalculator = new DistanceCalculator();
  });

  describe('initialize', function() {
    it('can calculate the distance between coordinates in one direction', function() {
      expect(distanceCalculator.calculateLineDistance(-1, 5)).toEqual(6)
      expect(distanceCalculator.calculateLineDistance(5, -1)).toEqual(6)
      expect(distanceCalculator.calculateLineDistance(0, 0)).toEqual(0)
    });
  });
});
