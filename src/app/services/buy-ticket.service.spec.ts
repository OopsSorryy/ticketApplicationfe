import { TestBed } from '@angular/core/testing';

import { BuyTicketService } from './buy-ticket.service';

describe('BuyTicketService', () => {
  let service: BuyTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
