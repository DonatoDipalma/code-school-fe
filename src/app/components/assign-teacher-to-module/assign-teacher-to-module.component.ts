import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Area } from 'src/model/dtos/area';
import { CompetenceService } from 'src/services/competence/competence.service';

@Component({
  selector: 'app-assign-teacher-to-module',
  templateUrl: './assign-teacher-to-module.component.html',
  styleUrls: ['./assign-teacher-to-module.component.css']
})
export class AssignTeacherToModuleComponent implements OnInit {
  areas: Area[] = [];
  levels: string[] = [];
  searchTeacherForm!: FormGroup;
  moduleName!: string;
  areaError = '';
  competenceError = '';

  constructor(private formBuilder: FormBuilder, private competenceService: CompetenceService) {

  }

  ngOnInit(): void {
      this.searchTeacherForm = this.formBuilder.group({
        areaId: [-1, Validators.required],
        levelId: [-1, Validators.required],
        skillId: [-1, Validators.required]
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
    console.log((event.target as HTMLSelectElement).value);
  }

  searchTeacher() {

  }
}
