import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraComponent } from './cabecera.component';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';

describe('CabeceraComponent', () => {
  let component: CabeceraComponent;
  let fixture: ComponentFixture<CabeceraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
