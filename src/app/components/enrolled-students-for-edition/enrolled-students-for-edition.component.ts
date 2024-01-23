import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/model/dtos/student';
import { StudentsService } from 'src/services/students/students.service';

@Component({
  selector: 'app-enrolled-students-for-edition',
  templateUrl: './enrolled-students-for-edition.component.html',
  styleUrls: ['./enrolled-students-for-edition.component.css']
})
export class EnrolledStudentsForEditionComponent {
  editionId!: number;
  students: Student[] = [];
  constructor(private studentService : StudentsService,           
              private router: Router,
              private route: ActivatedRoute,){};

  ngOnInit(): void {
    this.editionId = this.route.snapshot.params['editionId'];
    this.studentService.getAllStudentsOfEdition(this.editionId).subscribe({
        next: ts => {
            this.students = ts;
            console.log(this.students);
        },
        error: err => console.error("Errore", err)
    });
}
  

}
