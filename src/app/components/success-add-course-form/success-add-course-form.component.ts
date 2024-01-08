import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-add-course-form',
  templateUrl: './success-add-course-form.component.html',
  styleUrls: ['./success-add-course-form.component.css']
})
export class SuccessAddCourseFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/courses']); 
    }, 3000);
  }
}
