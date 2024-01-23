import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TeachersService } from 'src/services/teachers/teachers.service';
import { Teacher } from 'src/model/dtos/teacher';

@Component({
  selector: 'app-update-teacher-form',
  templateUrl: './update-teacher-form.component.html',
  styleUrls: ['./update-teacher-form.component.css']
})
export class UpdateTeacherFormComponent implements OnInit {
  teacherForm!: FormGroup;
  teacherData: Teacher = {
    id: 0,
    firstname: '',
    lastname: '',
    bio: '',
    begunTeaching: '',
    nickname: '',
    professionalExperience: '',
    teacherLevel: '',
    imgName: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private teacherService: TeachersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.teacherForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      bio: ['', Validators.required],
      begunTeaching: ['', Validators.required],
      nickname: ['', Validators.required],
      imgName: ['', Validators.required],
      professionalExperience: ['', Validators.required],
      teacherLevel: ['', Validators.required]
    });

    const teacherId = this.route.snapshot.params['teacherId'];

    this.teacherService.getTeacherDetailsById(teacherId).subscribe(
      (teacher) => {
        this.teacherData = teacher;
        this.teacherForm.patchValue({
          firstname: this.teacherData.firstname,
          lastname: this.teacherData.lastname,
          bio: this.teacherData.bio,
          begunTeaching: this.teacherData.begunTeaching,
          nickname: this.teacherData.nickname,
          imgName: this.teacherData.imgName,
          professionalExperience: this.teacherData.professionalExperience,
          teacherLevel: this.teacherData.teacherLevel
        });
      },
      (error) => {
        console.error('Errore durante il recupero dei dettagli dell\'insegnante:', error?.message || 'Errore sconosciuto');
      }
    );
  }

  updateTeacher(): void {
      if (this.teacherForm.valid) {
        const teacherId = this.route.snapshot.params['teacherId'];
        const updatedTeacherData = { ...this.teacherForm.value, id: teacherId };
    
        this.teacherService.updateTeacher(updatedTeacherData).subscribe({
          next: () => {
            this.router.navigate(['/teachers']);
          },
          error: (error: any) => {
            console.error('Errore', error);
          }
        });
      } else {
        console.error('Form non valido.');
      }
  }
}
