import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Teacher } from 'src/model/dtos/teacher';

@Component({
  selector: 'app-teacher-card',
  templateUrl: './teacher-card.component.html',
  styleUrls: ['./teacher-card.component.css']
})

export class TeacherCardComponent implements OnInit{
  @Input('teacher') teach:Teacher|null = null; //definiamo un modo per il componente genitore di passare dati al componenete figlio
  @Output('changename') teacherClicked: EventEmitter<string> = new EventEmitter<string>();
  
  ngOnInit(): void {
    console.log(this.teach);
  }
  chooseTeacher(): void {
    this.teacherClicked.emit(this.teach?.firstname);
  }
  
}
