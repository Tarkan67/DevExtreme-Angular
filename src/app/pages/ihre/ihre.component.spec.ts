import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IhreComponent } from './ihre.component';

describe('IhreComponent', () => {
  let component: IhreComponent;
  let fixture: ComponentFixture<IhreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IhreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IhreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
