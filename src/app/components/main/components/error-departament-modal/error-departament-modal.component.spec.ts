import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDepartamentModalComponent } from './error-departament-modal.component';

describe('ErrorDepartamentModalComponent', () => {
  let component: ErrorDepartamentModalComponent;
  let fixture: ComponentFixture<ErrorDepartamentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorDepartamentModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorDepartamentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
