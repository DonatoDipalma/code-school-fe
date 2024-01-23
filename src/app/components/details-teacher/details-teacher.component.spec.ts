import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTeacherComponent } from './details-teacher.component';

describe('DetailsTeacherComponent', () => {
  let component: DetailsTeacherComponent;
  let fixture: ComponentFixture<DetailsTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsTeacherComponent]
    });
    fixture = TestBed.createComponent(DetailsTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
