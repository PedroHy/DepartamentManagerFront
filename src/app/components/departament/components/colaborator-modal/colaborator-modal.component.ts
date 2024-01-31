import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ColaboratorService } from '../../../../services/colaborator.service';
import { Colaborator } from '../../../../interfaces/Colabortor';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective } from 'ngx-mask';



@Component({
  selector: 'app-colaborator-modal',
  standalone: true,
  imports: [CommonModule, NgxMaskDirective],
  templateUrl: './colaborator-modal.component.html',
  styleUrl: './colaborator-modal.component.css'
})
export class ColaboratorModalComponent implements OnChanges {
  @Output() editForm: EventEmitter<any> = new EventEmitter();
  @Output() deleteModal: EventEmitter<any> = new EventEmitter();

  @Input() colaboratorId: string = '';
  colaborator: Colaborator = {id: 0, name: '', departamentId: 0, rg: '', picture: ''}

  constructor(private colaboratorService: ColaboratorService){

  }

  ngOnChanges(changes: SimpleChanges): void {
      this.getColaborator()
  }

  getColaborator(){
    this.colaboratorService.getOne(Number(this.colaboratorId)).subscribe((colaborator)=>(this.colaborator = colaborator))
  }

  openUpdateForm(){
    this.editForm.emit();
  }

  openDeleteModal(){
    this.deleteModal.emit();
  }
}
