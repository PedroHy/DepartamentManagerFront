import { Component, EventEmitter, Input, Output } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Departament } from '../../../../interfaces/Departament';
import { DepartamentService } from '../../../../services/departament.service';

@Component({
  selector: 'app-departament-card',
  standalone: true,
  imports: [HttpClientModule, RouterModule],
  templateUrl: './departament-card.component.html',
  styleUrl: './departament-card.component.css'
})
export class DepartamentCardComponent {
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() acronym: string = '';

  @Output() showUpdateForm: EventEmitter<any> = new EventEmitter();
  @Output() showDeleteModal: EventEmitter<any> = new EventEmitter();

  departament: Departament = {id: Number(this.id), name: this.name, acronym: this.acronym}

  constructor(private departamentService: DepartamentService){
    
  }

  deleteDepartament():void{
    this.showDeleteModal.emit(this.id);
  }

  editDepartament():void{
    this.showUpdateForm.emit(this.id);
  }
}
