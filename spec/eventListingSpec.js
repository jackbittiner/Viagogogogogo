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

    it('it initializes with between 5 or 25 events', function() {
      expect(eventListing.listings.count).not.toBeLessThan(5);
      expect(eventListing.grid.coordinates[0]).not.toBeGreaterThan(25);
    });
  });
});
