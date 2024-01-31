import { Component, EventEmitter, Output, Input } from '@angular/core';
import { DepartamentService } from '../../../../services/departament.service';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css'
})
export class DeleteModalComponent {
  @Input() departamentId: string = '';
  @Output() hideModal: EventEmitter<any> = new EventEmitter();

  constructor(private departamentService: DepartamentService){
    
  }

  onCancel(){
    this.hideModal.emit()
  }

  deleteDepartament(){
    this.departamentService.deleteDepartament(Number(this.departamentId)).subscribe((response)=>{
      this.departamentService.getAll()
    });
    this.onCancel();
  }
}
