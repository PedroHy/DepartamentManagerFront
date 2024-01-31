import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Departament } from '../../interfaces/Departament';
import { Colaborator } from '../../interfaces/Colabortor';
import { CommonModule } from '@angular/common';

import { DepartamentService } from '../../services/departament.service';
import { ColaboratorService } from '../../services/colaborator.service';
import { ColaboratorFormComponent } from "./components/colaborator-form/colaborator-form.component";
import { ColaboratorModalComponent } from "./components/colaborator-modal/colaborator-modal.component";
import { ListItemComponent } from "./components/list-item/list-item.component";
import { UpdateColaboratorComponent } from "./components/update-colaborator/update-colaborator.component";
import { DeleteColaboratorComponent } from "./components/delete-colaborator/delete-colaborator.component";

@Component({
    selector: 'app-departament',
    standalone: true,
    templateUrl: './departament.component.html',
    styleUrl: './departament.component.css',
    imports: [CommonModule, ColaboratorFormComponent, ColaboratorModalComponent, ListItemComponent, UpdateColaboratorComponent, DeleteColaboratorComponent]
})
export class DepartamentComponent {
  departament?: Departament;
  colaborators: Colaborator[] = []
  canShow: boolean = false;
  deleteModal: boolean = false;
  updateForm: boolean = false;
  departamentId: number = Number(this.route.snapshot.paramMap.get("id"));

  idSelected: string = '';

  constructor(private departamentService: DepartamentService, 
              private colaboratorService:ColaboratorService, 
              private route: ActivatedRoute){
    this.getDepartament();
    this.getColaborators();
  }

  getDepartament(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.departamentService.getItem(id).subscribe((departament)=>(this.departament = departament));
  }

  getColaborators(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.colaboratorService.getbyDepartament(id).subscribe((colaborators)=>(this.colaborators = colaborators));
  }

  showForm():void{
    this.canShow = !this.canShow;
  }

  showDeleteModal():void{
    this.deleteModal = !this.deleteModal;
  }

  showUpdateForm():void{
    this.updateForm = !this.updateForm;
  }

  loadColaborator(id: string){
    this.idSelected = id;
  }
}
