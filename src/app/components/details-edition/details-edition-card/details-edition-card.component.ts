import { Component, Input } from '@angular/core';
import { EditionDetailsDto } from 'src/model/dtos/edition-details';

@Component({
  selector: 'app-details-edition-card',
  templateUrl: './details-edition-card.component.html',
  styleUrls: ['./details-edition-card.component.css']
})
export class DetailsEditionCardComponent {
  @Input('editionDetailsName') editionDetails!: EditionDetailsDto;
}
