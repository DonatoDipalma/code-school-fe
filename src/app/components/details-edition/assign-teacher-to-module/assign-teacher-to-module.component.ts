import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from 'src/model/dtos/area';
import { Skill } from 'src/model/dtos/skill';
import { TeacherCompetenceDto } from 'src/model/dtos/teacher-competence';
import { CompetenceService } from 'src/services/area/competence.service';
import { TeachersService } from 'src/services/teachers/teachers.service';

@Component({
  selector: 'app-assign-teacher-to-module',
  templateUrl: './assign-teacher-to-module.component.html',
  styleUrls: ['./assign-teacher-to-module.component.css']
})
export class AssignTeacherToModuleComponent implements OnInit {
  areas!: Area[];
  levels!: string[];
  moduleName!: string;
  skills!: Skill[];
  teachers!: TeacherCompetenceDto[];
  areaError = '';
  levelError = '';
  skillError = '';
  teacherError = '';
  searchTeacherForm!: FormGroup;
  skillFormDisabled = true;
  moduleId!: number;
  editionId!: number;
  
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private competenceService: CompetenceService,
              private teacherService: TeachersService){
  }

  ngOnInit(): void {
    this.editionId = this.route.snapshot.params['editionId'];
    this.moduleId = this.route.snapshot.params['moduleId'];
    this.fetchAllAreas();
    this.fetchAllLevels();

    this.searchTeacherForm = this.formBuilder.group({
      areaId:['-1'],
      levelId: ['-1'],
      skillId: new FormControl({value: -1,disabled: true})
    });
  }

  fetchAllAreas(){
    this.competenceService.getAllAreas().subscribe({
      next: a => this.areas = a,
      error: e => this.areaError = e
    });
  }

  fetchAllLevels(){
    this.competenceService.getAllLevels().subscribe({
      next: l => this.levels = l,
      error: e =>  this.levelError = e
    })
  }

  fetchSkills(event: Event){
    let idArea = +(event.target as HTMLSelectElement).value;
    if(idArea != -1){
      this.competenceService.getSkillByArea(idArea).subscribe({
        next: skills => {
          this.skills = skills;
          this.searchTeacherForm.get('skillId')?.enable();
        },
        error: er => this.skillError = er
      });
    } else {
      this.searchTeacherForm.get('skillId')?.disable();
      this.searchTeacherForm.get('skillId')?.reset();
      this.searchTeacherForm.get('skillId')?.setValue(-1);

    }
  }

  //Decommentare prima di continuare :)
  searchTeacher() {
    const skillId = this.searchTeacherForm.get('skillId')?.value;
    const levelId = this.searchTeacherForm.get('levelId')?.value;
    
    if (skillId !== -1 && levelId !== -1) {
      this.teacherService.findTeachersBySkill(skillId, levelId).subscribe({
        next: ts => {
          console.log(ts);
          this.teachers = ts;
        },
        error: err => {
          this.teacherError = err;
        }
      });
    }
  } 

  assignTeacher(idTeacher: number) {
    this.teacherService.assignTeacherToModule(idTeacher, this.moduleId).subscribe({
      next: () => {
        this.router.navigate(['editions', this.editionId])
      },
      error: err => {
        console.log(err);
        alert("Errore " + err);
      }
    });
  }
}
