import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEditionCardComponent } from './details-edition-card.component';

describe('DetailsEditionCardComponent', () => {
  let component: DetailsEditionCardComponent;
  let fixture: ComponentFixture<DetailsEditionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsEditionCardComponent]
    });
    fixture = TestBed.createComponent(DetailsEditionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
