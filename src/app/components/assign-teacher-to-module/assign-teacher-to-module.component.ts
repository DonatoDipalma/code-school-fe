import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Area } from 'src/model/dtos/area';
import { Skill } from 'src/model/dtos/skill';
import { CompetenceService } from 'src/services/competence/competence.service';

@Component({
  selector: 'app-assign-teacher-to-module',
  templateUrl: './assign-teacher-to-module.component.html',
  styleUrls: ['./assign-teacher-to-module.component.css']
})
export class AssignTeacherToModuleComponent implements OnInit {
  areas: Area[] = [];
  levels: string[] = [];
  skills: Skill[] = [];
  searchTeacherForm!: FormGroup;
  moduleName!: string;
  areaError = '';
  competenceError = '';
  skillError = '';

  constructor(private formBuilder: FormBuilder, private competenceService: CompetenceService) {
  }

  ngOnInit(): void {
      this.searchTeacherForm = this.formBuilder.group({
        areaId: [-1, Validators.required],
        levelId: [-1, Validators.required],
        skillId: new FormControl({value: -1, disabled: true})
      })
      this.fetchAreas();
      this.fetchLevels();
  }

  fetchAreas() {
    this.competenceService.getAllAreas().subscribe({
      next: a => this.areas = a,
      error: e => this.areaError = e
    });
  }

  fetchLevels() {
    this.competenceService.getAllLevels().subscribe({
      next: c => this.levels = c,
      error: e => this.competenceError = e
    });
  }

  fetchSkills(event: Event) {
    let idArea = +(event.target as HTMLSelectElement).value;
    if(idArea != -1) {
      this.competenceService.getSkillByArea(idArea).subscribe({
        next: s =>{ 
          this.skills = s;
          this.searchTeacherForm.get('skillId')?.enable();
        },
        error: se => this.skillError = se
      })
    } else {
      this.searchTeacherForm.get('skillId')?.disable();
      this.searchTeacherForm.get('skillId')?.reset();
      this.searchTeacherForm.get('skillId')?.setValue(-1);
    }
  }

  searchTeacher() {
    
  }
}
