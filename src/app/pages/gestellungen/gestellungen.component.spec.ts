import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestellungenComponent } from './gestellungen.component';

describe('GestellungenComponent', () => {
  let component: GestellungenComponent;
  let fixture: ComponentFixture<GestellungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestellungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestellungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
