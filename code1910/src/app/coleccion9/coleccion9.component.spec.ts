import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coleccion9Component } from './coleccion9.component';

describe('Coleccion9Component', () => {
  let component: Coleccion9Component;
  let fixture: ComponentFixture<Coleccion9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coleccion9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coleccion9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
