import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coleccion5Component } from './coleccion5.component';

describe('Coleccion5Component', () => {
  let component: Coleccion5Component;
  let fixture: ComponentFixture<Coleccion5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coleccion5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coleccion5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
