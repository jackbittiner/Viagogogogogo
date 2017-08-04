describe('Event', function() {

  beforeEach(function() {
    event = new Event()
  });

  describe('initialize', function() {
    it('is initialized with a random amount of tickets from 0 to 50', function() {
      expect(event.tickets).toBeDefined();
      expect(event.tikets).not.toBeGreaterThan(50);
      expect(event.tickets).not.toBeLessThan(0);
    });
  });
});
