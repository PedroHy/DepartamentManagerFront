import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
  @Input() id = '';
  @Input() name = '';
  @Input() rg = '';

  @Output() load: EventEmitter<any> = new EventEmitter(); 

  loadColaborator(){
    this.load.emit(this.id);
  }
}
