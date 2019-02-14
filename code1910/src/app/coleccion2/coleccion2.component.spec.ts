import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coleccion2Component } from './coleccion2.component';

describe('Coleccion2Component', () => {
  let component: Coleccion2Component;
  let fixture: ComponentFixture<Coleccion2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coleccion2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coleccion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
