describe('EventListing', function() {

  beforeEach(function() {
    eventListing = new EventListing(-10, 10, -10, 10)
  });

  describe('initialize', function() {
    it('it initialized with a grid of coordinates', function() {
      expect(eventListing.freeVenues.coordinates).toBeDefined();
    });

    it('it initializes with between 5 or 25 events', function() {
      expect(eventListing.listings.count).not.toBeLessThan(5);
      expect(eventListing.listings.count).not.toBeGreaterThan(25);
    });
  });
});
