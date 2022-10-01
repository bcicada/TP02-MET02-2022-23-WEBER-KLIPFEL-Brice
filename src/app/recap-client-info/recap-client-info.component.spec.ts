import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapClientInfoComponent } from './recap-client-info.component';

describe('RecapClientInfoComponent', () => {
  let component: RecapClientInfoComponent;
  let fixture: ComponentFixture<RecapClientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapClientInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecapClientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
