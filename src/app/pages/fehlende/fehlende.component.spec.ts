import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FehlendeComponent } from './fehlende.component';

describe('FehlendeComponent', () => {
  let component: FehlendeComponent;
  let fixture: ComponentFixture<FehlendeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FehlendeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FehlendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
