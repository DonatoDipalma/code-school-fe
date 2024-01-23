import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRoomComponent } from './teacher-room.component';

describe('TeacherRoomComponent', () => {
  let component: TeacherRoomComponent;
  let fixture: ComponentFixture<TeacherRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherRoomComponent]
    });
    fixture = TestBed.createComponent(TeacherRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
