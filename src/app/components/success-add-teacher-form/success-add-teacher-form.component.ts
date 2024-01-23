import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-add-teacher-form',
  templateUrl: './success-add-teacher-form.component.html',
  styleUrls: ['./success-add-teacher-form.component.css']
})
export class SuccessAddTeacherFormComponent {
  constructor(private router: Router) { }
  
    ngOnInit(): void {
      setTimeout(() => {
        this.router.navigate(['/teachers']); 
      }, 2000);
    }

}
