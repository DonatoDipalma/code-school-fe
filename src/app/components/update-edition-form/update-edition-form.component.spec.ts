import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEditionFormComponent } from './update-edition-form.component';

describe('UpdateEditionFormComponent', () => {
  let component: UpdateEditionFormComponent;
  let fixture: ComponentFixture<UpdateEditionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEditionFormComponent]
    });
    fixture = TestBed.createComponent(UpdateEditionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
