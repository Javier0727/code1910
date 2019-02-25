import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coleccion7Component } from './coleccion7.component';

describe('Coleccion7Component', () => {
  let component: Coleccion7Component;
  let fixture: ComponentFixture<Coleccion7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coleccion7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coleccion7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
