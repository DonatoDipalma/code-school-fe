import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditionFormComponent } from './add-edition-form.component';

describe('AddEditionFormComponent', () => {
  let component: AddEditionFormComponent;
  let fixture: ComponentFixture<AddEditionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditionFormComponent]
    });
    fixture = TestBed.createComponent(AddEditionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
