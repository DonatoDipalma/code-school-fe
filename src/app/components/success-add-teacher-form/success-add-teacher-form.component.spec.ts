import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAddTeacherFormComponent } from './success-add-teacher-form.component';

describe('SuccessAddTeacherFormComponent', () => {
  let component: SuccessAddTeacherFormComponent;
  let fixture: ComponentFixture<SuccessAddTeacherFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessAddTeacherFormComponent]
    });
    fixture = TestBed.createComponent(SuccessAddTeacherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
