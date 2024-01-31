import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboratorModalComponent } from './colaborator-modal.component';

describe('ColaboratorModalComponent', () => {
  let component: ColaboratorModalComponent;
  let fixture: ComponentFixture<ColaboratorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaboratorModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColaboratorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
