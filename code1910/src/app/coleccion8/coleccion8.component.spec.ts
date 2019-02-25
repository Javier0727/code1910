import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coleccion8Component } from './coleccion8.component';

describe('Coleccion8Component', () => {
  let component: Coleccion8Component;
  let fixture: ComponentFixture<Coleccion8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coleccion8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coleccion8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
