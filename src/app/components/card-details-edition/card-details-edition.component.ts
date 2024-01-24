import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditionDetailsDto } from 'src/model/dtos/edition-details';
import { EditionService } from 'src/services/edition/edition.service';


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
