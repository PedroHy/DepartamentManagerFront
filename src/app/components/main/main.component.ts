import { Component } from '@angular/core';
import { DepartamentCardComponent } from "./components/departament-card/departament-card.component";
import { DepartamentFormComponent } from "./components/departament-form/departament-form.component";
import { CommonModule } from '@angular/common';
import { Departament } from '../../interfaces/Departament';
import { DepartamentService } from '../../services/departament.service';
import { HttpClientModule } from '@angular/common/http';
import { UpdateFormComponent } from "./components/update-form/update-form.component";
import { DeleteModalComponent } from "./components/delete-modal/delete-modal.component";
import { ErrorDepartamentModalComponent } from "./components/error-departament-modal/error-departament-modal.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [DepartamentCardComponent, DepartamentFormComponent, CommonModule, HttpClientModule, UpdateFormComponent, DeleteModalComponent, ErrorDepartamentModalComponent]
})

export class MainComponent {
    showForm: boolean = false;
    showUpdateForm: boolean = false;
    showDeleteModal: boolean = false;
    showErrorModal: boolean = false;
    departaments: Departament[] = [];
    idSelected: number = 0;

    constructor(private departamentService: DepartamentService){
        this.getDepartaments();
    }

    openForm():void{
        this.showForm = !this.showForm;
        this.getDepartaments();
    }

    errorModal():void{
        this.showErrorModal = !this.showErrorModal;
    }

    openUpdateForm(id: number):void{
        this.idSelected = id;
        this.showUpdateForm = !this.showUpdateForm;
        this.getDepartaments();
    }

    openDeleteModal(id: number):void{
        this.idSelected = id;
        this.showDeleteModal = !this.showDeleteModal;
        this.getDepartaments();
    }

    getDepartaments():void{
        this.departamentService.getAll().subscribe((departaments)=>(this.departaments = departaments));
    }
}
