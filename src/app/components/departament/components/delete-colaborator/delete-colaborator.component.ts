import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColaboratorService } from '../../../../services/colaborator.service';

@Component({
  selector: 'app-delete-colaborator',
  standalone: true,
  imports: [],
  templateUrl: './delete-colaborator.component.html',
  styleUrl: './delete-colaborator.component.css'
})
export class DeleteColaboratorComponent {
  @Input() colaboratorId: string = '';
  @Output() showModal: EventEmitter<any> = new EventEmitter();

  constructor(private colaboratorService: ColaboratorService){ }

  onCancel(){
    this.showModal.emit();
  }

  deleteColaborator(){
    this.colaboratorService.deleteCollaborator(Number(this.colaboratorId)).subscribe();
    this.onCancel();
  }
}
