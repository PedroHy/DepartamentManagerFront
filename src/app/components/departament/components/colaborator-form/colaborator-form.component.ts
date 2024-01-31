import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Colaborator } from '../../../../interfaces/Colabortor';
import { ColaboratorService } from '../../../../services/colaborator.service';

import { NgxMaskDirective } from 'ngx-mask'

import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';

@Component({
  selector: 'app-colaborator-form',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    NgxMaskDirective
  ],
  templateUrl: './colaborator-form.component.html',
  styleUrl: './colaborator-form.component.css'
})
export class ColaboratorFormComponent {

  @Input() departamentId: number = 0;
  @Output() hideForm: EventEmitter<any> = new EventEmitter();

  file: any = '';
  imageSrc: any = '';
  isLoading: boolean = false;

  colaborator: Colaborator = {id: 0, name: '', picture: 'path', rg: '', departamentId: 0}

  constructor(private colaboratorService: ColaboratorService, private storage:Storage){

  }

  handleCancel(){
    this.hideForm.emit();
  }

  async addColaborator(){
    this.isLoading = !this.isLoading;
    if(this.file){
      const path = `pictures/${this.file.name}`
      const storageRef = ref(this.storage, path);
      const uploadTask = await uploadBytes(storageRef, this.file);
      const url = await getDownloadURL(uploadTask.ref);
      this.colaborator.picture = url;
    }
    this.colaborator.departamentId = this.departamentId;
    this.colaboratorService.createCollaborator(this.colaborator).subscribe((response)=>{
      this.colaboratorService.getbyDepartament(this.departamentId);
    });
    this.handleCancel();
  }

  onFileChange(event:any){
    this.file = event.target.files[0];
    const reader = new FileReader();
    if(this.file){
      reader.addEventListener('load', (e)=>{
        const readerTarget = e.target;
        this.imageSrc = readerTarget?.result;
      })
      reader.readAsDataURL(this.file);
    }
  }

}
