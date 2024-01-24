import { Component, Input, OnInit } from '@angular/core';
import { EditionDetailsDto } from 'src/model/dtos/edition-details';

@Component({
  selector: 'app-card-details-edition',
  templateUrl: './card-details-edition.component.html',
  styleUrls: ['./card-details-edition.component.css']
})
export class CardDetailsEditionComponent implements OnInit {
  @Input('editionDetails') editionDetails!: EditionDetailsDto;

  ngOnInit(): void {
  }
}
