import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClientInfoComponent } from './form-client-info.component';

describe('FormClientInfoComponent', () => {
  let component: FormClientInfoComponent;
  let fixture: ComponentFixture<FormClientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormClientInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormClientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
