import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAddEditionFormComponent } from './success-add-edition-form.component';

describe('SuccessAddEditionFormComponent', () => {
  let component: SuccessAddEditionFormComponent;
  let fixture: ComponentFixture<SuccessAddEditionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessAddEditionFormComponent]
    });
    fixture = TestBed.createComponent(SuccessAddEditionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
