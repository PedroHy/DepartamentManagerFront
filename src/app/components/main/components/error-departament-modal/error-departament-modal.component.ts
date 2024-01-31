import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-error-departament-modal',
  standalone: true,
  imports: [],
  templateUrl: './error-departament-modal.component.html',
  styleUrl: './error-departament-modal.component.css'
})
export class ErrorDepartamentModalComponent {
  @Output() hideForm: EventEmitter<any> = new EventEmitter();


  hide(){
    this.hideForm.emit()
  }
}
