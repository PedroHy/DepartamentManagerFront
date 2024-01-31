import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboratorFormComponent } from './colaborator-form.component';

describe('ColaboratorFormComponent', () => {
  let component: ColaboratorFormComponent;
  let fixture: ComponentFixture<ColaboratorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaboratorFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColaboratorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
