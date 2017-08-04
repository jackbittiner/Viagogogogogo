describe('gridMap', function() {

  beforeEach(function() {
    gridMap = new gridMap(-10, 10, -10, 10)
  });

  describe('initialize', function() {
    it('is initialized with a list of all possible x&y coordinates', function() {
      expect(gridMap.grid.length).toEqual(441);
      expect(gridMap.grid[0]).toEqual([-10, -10]);
      expect(gridMap.grid[440]).toEqual([10, 10]);
    });
  });
});
