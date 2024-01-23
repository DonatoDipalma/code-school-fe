import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCourseFormComponent } from './update-course-form.component';

describe('UpdateCourseFormComponent', () => {
  let component: UpdateCourseFormComponent;
  let fixture: ComponentFixture<UpdateCourseFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCourseFormComponent]
    });
    fixture = TestBed.createComponent(UpdateCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
