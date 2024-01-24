import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsEditionComponent } from './card-details-edition.component';

describe('CardDetailsEditionComponent', () => {
  let component: CardDetailsEditionComponent;
  let fixture: ComponentFixture<CardDetailsEditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDetailsEditionComponent]
    });
    fixture = TestBed.createComponent(CardDetailsEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
