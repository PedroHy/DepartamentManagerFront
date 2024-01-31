import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateColaboratorComponent } from './update-colaborator.component';

describe('UpdateColaboratorComponent', () => {
  let component: UpdateColaboratorComponent;
  let fixture: ComponentFixture<UpdateColaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateColaboratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateColaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
