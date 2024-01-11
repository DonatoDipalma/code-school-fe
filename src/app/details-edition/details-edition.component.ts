import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditionDetailsDto } from 'src/model/dtos/edition-details';
import { TeacherSummaryDto } from 'src/model/dtos/teachers-summary';
import { EditionService } from 'src/services/edition/edition.service';
import { TeachersService } from 'src/services/teachers/teachers.service';

@Component({
  selector: 'app-details-edition',
  templateUrl: './details-edition.component.html',
  styleUrls: ['./details-edition.component.css']
})
export class DetailsEditionComponent implements OnInit {

  teacherDetails: TeacherSummaryDto | undefined;
  editionDetails: EditionDetailsDto | undefined;

  constructor(
    private route: ActivatedRoute,
    private teachersService: TeachersService,
    private editionService: EditionService
  ) {}

  ngOnInit(): void {
    const teacherId = this.route.snapshot.params['id'];
    const editionId = this.route.snapshot.params['editionId'];
    
    this.teachersService.getTeacherById(teacherId).subscribe({
      next: td => {
        this.teacherDetails = td;
      },
      error: err => {
        console.error('Errore nel recupero dei dettagli dell\'insegnante:', err);
      }
    });
  
    this.editionService.getEditionDetailsById(editionId).subscribe({
      next: edt => {
        this.editionDetails = edt;
        console.log('Edition details:', this.editionDetails);
      },
      error: err => {
        console.error('Errore nel recupero dei dettagli dell\'edizione:', err);
      }
  });
  }
}  