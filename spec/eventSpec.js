describe('Event', function() {

  beforeEach(function() {
    event = new Event([5,5], 1)
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

  describe('cheapestTicket', function() {

    it('says there are no tickets if none are available', function() {
      event.tickets = [];
      event.calculateCheapestTicket();
      expect(event.cheapestTicket).toEqual("There are no tickets available for this event!");
    });

    it('says sets the cheapest ticket to the ticket with the least price', function() {
      ticket1 = new Ticket();
      ticket2 = new Ticket();
      ticket3 = new Ticket();
      ticket1.price = 30.00
      ticket2.price = 10.00
      ticket3.price = 20.00
      event.tickets = [ticket1, ticket2, ticket3];
      event.calculateCheapestTicket();
      expect(event.cheapestTicket.price).toEqual(10.00);
    });
  });
});
