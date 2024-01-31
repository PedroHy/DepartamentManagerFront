import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ColaboratorService } from '../../../../services/colaborator.service';
import { Colaborator } from '../../../../interfaces/Colabortor';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
import { NgxMaskDirective } from 'ngx-mask'


@Component({
  selector: 'app-update-colaborator',
  standalone: true,
  imports: [FormsModule, CommonModule, NgxMaskDirective],
  templateUrl: './update-colaborator.component.html',
  styleUrl: './update-colaborator.component.css'
})
export class UpdateColaboratorComponent implements OnChanges {
  @Input() colaboratorId: string = '';
  @Output() hideForm: EventEmitter<any> = new EventEmitter();

  colaborator: Colaborator = {id: 0, name: '', picture: 'path', rg: '', departamentId: 0}
  imageSrc: any = '';
  file: any = '';
  
  isLoading: boolean = false;
  
  constructor(private colaboratorService: ColaboratorService, private storage: Storage){}

  ngOnChanges(changes: SimpleChanges): void {
      this.loadColaborator();
  }

  handleCancel(){
    this.hideForm.emit();
  }

  loadColaborator(){
    this.colaboratorService.getOne(Number(this.colaboratorId)).subscribe((colaborator)=>{
      this.colaborator = colaborator
      this.imageSrc = colaborator.picture
    });
  }

  async updateColaborator(){
    this.isLoading = !this.isLoading;
    if(this.file){
      const path = `pictures/${this.file.name}`
      const storageRef = ref(this.storage, path);
      const uploadTask = await uploadBytes(storageRef, this.file);
      const url = await getDownloadURL(uploadTask.ref);
      this.colaborator.picture = url;
    }
    this.colaboratorService.updateCollaborator(Number(this.colaboratorId), this.colaborator).subscribe();
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
