import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coleccion6Component } from './coleccion6.component';

describe('Coleccion6Component', () => {
  let component: Coleccion6Component;
  let fixture: ComponentFixture<Coleccion6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coleccion6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coleccion6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
