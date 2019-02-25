import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coleccion4Component } from './coleccion4.component';

describe('Coleccion4Component', () => {
  let component: Coleccion4Component;
  let fixture: ComponentFixture<Coleccion4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coleccion4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coleccion4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
