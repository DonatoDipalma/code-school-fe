import { Component, OnInit } from '@angular/core';
import { Area } from 'src/model/dtos/area';
import { Edition } from 'src/model/dtos/editions';
import { EditionsService } from 'src/services/editions/editions.service';

@Component({
  selector: 'app-upcoming-editions',
  templateUrl: './upcoming-editions.component.html',
  styleUrls: ['./upcoming-editions.component.css']
})
export class UpcomingEditionsComponent implements OnInit{

  editions: Edition[] = [];
  areas: Area[] = [];

  constructor(private editionsService: EditionsService){}

  ngOnInit(): void {
    this.editionsService.getNineEditions().subscribe({
      next: es => {
          this.editions = es;
      },
      error: err => console.error("Errore")
  });
  }
}
