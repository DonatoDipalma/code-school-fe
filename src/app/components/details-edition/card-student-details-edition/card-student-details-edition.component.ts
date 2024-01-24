import { Component, Input } from '@angular/core';
import { Student } from 'src/model/dtos/student';

@Component({
  selector: 'app-card-student-details-edition',
  templateUrl: './card-student-details-edition.component.html',
  styleUrls: ['./card-student-details-edition.component.css']
})
export class CardStudentDetailsEditionComponent {
  @Input('student') students!: Student[];

  ngOnInit(): void {
  }
  
}  

