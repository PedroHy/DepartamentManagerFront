import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteColaboratorComponent } from './delete-colaborator.component';

describe('DeleteColaboratorComponent', () => {
  let component: DeleteColaboratorComponent;
  let fixture: ComponentFixture<DeleteColaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteColaboratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteColaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
