import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Departament } from '../../../../interfaces/Departament';
import { DepartamentService } from '../../../../services/departament.service';

import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-departament-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './departament-form.component.html',
  styleUrl: './departament-form.component.css'
})
export class DepartamentFormComponent {
  @Output() hideForm: EventEmitter<any> = new EventEmitter();
  @Output() error: EventEmitter<any> = new EventEmitter();

  departament: Departament = { id: 0, name: '', acronym: '' }

  constructor(private departamentService: DepartamentService) {

  }

  handleCancel() {
    this.hideForm.emit();
  }

  createDepartament() {
    this.departamentService.createDepartament(this.departament).subscribe((response) => {
      this.departamentService.getAll()
      this.handleCancel()
    })
  }
}
