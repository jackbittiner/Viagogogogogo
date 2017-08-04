describe('gridMap', function() {

  beforeEach(function() {
    gridMap = new GridMap(-10, 10, -10, 10)
  });

  describe('initialize', function() {
    it('is initialized with a list of all possible x&y coordinates', function() {
      expect(gridMap.coordinates.length).toEqual(441);
      expect(gridMap.coordinates[0]).toEqual([-10, -10]);
      expect(gridMap.coordinates[440]).toEqual([10, 10]);
    });
  });
});
