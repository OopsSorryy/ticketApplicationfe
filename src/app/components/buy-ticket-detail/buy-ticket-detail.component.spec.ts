import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTicketDetailComponent } from './buy-ticket-detail.component';

describe('BuyTicketDetailComponent', () => {
  let component: BuyTicketDetailComponent;
  let fixture: ComponentFixture<BuyTicketDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyTicketDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyTicketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
