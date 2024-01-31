import { Component, Output, EventEmitter, Input, SimpleChanges, OnChanges   } from '@angular/core';
import { Departament } from '../../../../interfaces/Departament';
import { DepartamentService } from '../../../../services/departament.service';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css'
})
export class UpdateFormComponent implements OnChanges {
  @Output() hideForm: EventEmitter<any> = new EventEmitter();

  @Input() departamentId: string = ''

  departament: Departament = {id: 0, name: '', acronym: ''}

  constructor(private departamentService: DepartamentService){
    
  }

  ngOnChanges(){
      this.fillInputs();
  }

  handleCancel(){
    this.hideForm.emit();
  }

  updateDepartament(){
    this.departamentService.updateDepartament(this.departament.id, this.departament).subscribe((response)=>{
      this.departamentService.getAll()
    });
    this.handleCancel();
  }

  fillInputs(){
    this.departamentService.getItem(Number(this.departamentId)).subscribe((departament)=>{
      this.departament = departament;
    });
  }
}
