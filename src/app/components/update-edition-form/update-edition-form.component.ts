import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Edition } from 'src/model/dtos/edition';
import { EditionDetailsDto } from 'src/model/dtos/edition-details';
import { EditionService } from 'src/services/edition/edition.service';

@Component({
  selector: 'app-update-edition-form',
  templateUrl: './update-edition-form.component.html',
  styleUrls: ['./update-edition-form.component.css']
})
export class UpdateEditionFormComponent {
  editionForm!: FormGroup;
  editionId!: number;
  editionData!: Edition;

  constructor(
    private formBuilder: FormBuilder,
    private editionService: EditionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.editionId = +this.route.snapshot.params['editionId'];

    this.editionForm = this.formBuilder.group({
      id: [{ value: this.editionData?.id || '', disabled: true }],
      courseName: [{ value: this.editionData?.courseName || '', disabled: true }],
      roomName: [this.editionData?.roomName || ''],
      startDate: [this.editionData?.startDate || '', Validators.required],
      finishDate: [this.editionData?.finishDate || '', Validators.required],
      tutor: [this.editionData?.tutor || '', Validators.required],
      pay: [this.editionData?.pay || '', Validators.required],
    });

    this.editionService.getEditionById(this.editionId).subscribe({
      next: edition => {
        this.editionData = edition;
        this.populateForm();
      },
      error: error => {
        console.error('Errore durante il recupero dei dati dell\'edizione:', error);
      }
    });
  }

  populateForm() {
    this.editionForm.patchValue({
      id: this.editionData.id,
      courseName: this.editionData.courseName,
      roomName: this.editionData.roomName,
      startDate: this.editionData.startDate,
      finishDate: this.editionData.finishDate,
      tutor: this.editionData.tutor,
      pay: this.editionData.pay,
    });
  }

  updateEdition(): void {
    if (this.editionForm.valid) {
      const updatedEditionData = { ...this.editionForm.value, id: this.editionId };
      this.editionService.updateEdition(this.editionId, updatedEditionData).subscribe({
        next: () => {
          this.router.navigate(['/editions']);
        },
        error: err => {
          console.error('Errore durante aggiornamento', err);
        }
      });
    } else {
      console.error('Form non valido');
    } 
  }
}
