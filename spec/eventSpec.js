describe('Event', function() {

  beforeEach(function() {
    event = new Event(5,5, 1)
  });

  describe('initialize', function() {

    it('is initialized with a random amount of tickets from 0 to 50', function() {
      expect(event.tickets).toBeDefined();
      expect(event.tikets).not.toBeGreaterThan(50);
      expect(event.tickets).not.toBeLessThan(0);
    });

    it('is initialized with coordinates', function() {
      expect(event.coordinates).toEqual([5,5]);
    });

    it('is initialized with an ID', function() {
      expect(event.uniqueID).toEqual(1);
    });
  });
});
