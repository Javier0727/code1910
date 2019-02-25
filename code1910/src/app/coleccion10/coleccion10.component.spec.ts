import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coleccion10Component } from './coleccion10.component';

describe('Coleccion10Component', () => {
  let component: Coleccion10Component;
  let fixture: ComponentFixture<Coleccion10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coleccion10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coleccion10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
