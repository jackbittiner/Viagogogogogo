describe('Ticket', function() {

  beforeEach(function() {
    ticket = new Ticket()
  });

  describe('initialize', function() {
    it('is initialized with a random price from 1 to 101', function() {
      spyOn(Math, 'random').and.returnValue(1);
      expect(ticket.price).toBeDefined();
      expect(ticket.price).toBeGreaterThan(0.99);
      expect(ticket.price).toBeLessThan(101.01)
    });
  });
});
