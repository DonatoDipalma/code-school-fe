import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTeacherToModuleComponent } from './assign-teacher-to-module.component';

describe('AssignTeacherToModuleComponent', () => {
  let component: AssignTeacherToModuleComponent;
  let fixture: ComponentFixture<AssignTeacherToModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignTeacherToModuleComponent]
    });
    fixture = TestBed.createComponent(AssignTeacherToModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
