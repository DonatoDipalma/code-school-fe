import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEditionComponent } from './details-edition.component';

describe('DetailsEditionComponent', () => {
  let component: DetailsEditionComponent;
  let fixture: ComponentFixture<DetailsEditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsEditionComponent]
    });
    fixture = TestBed.createComponent(DetailsEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
