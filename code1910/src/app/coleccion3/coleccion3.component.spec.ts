import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coleccion3Component } from './coleccion3.component';

describe('Coleccion3Component', () => {
  let component: Coleccion3Component;
  let fixture: ComponentFixture<Coleccion3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coleccion3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coleccion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
