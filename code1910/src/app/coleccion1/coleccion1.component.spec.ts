import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coleccion1Component } from './coleccion1.component';

describe('Coleccion1Component', () => {
  let component: Coleccion1Component;
  let fixture: ComponentFixture<Coleccion1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coleccion1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coleccion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
