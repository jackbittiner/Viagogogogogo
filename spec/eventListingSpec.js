describe('EventListing', function() {

  beforeEach(function() {
    eventListing = new EventListing(-10, 10, -10, 10)
  });

  describe('initialize', function() {
    it('it initialized with a grid of coordinates', function() {
      expect(eventListing.grid.coordinates.length).toEqual(441);
      expect(eventListing.grid.coordinates[0]).toEqual([-10, -10]);
      expect(eventListing.grid.coordinates[440]).toEqual([10, 10]);
    });
  });
});
