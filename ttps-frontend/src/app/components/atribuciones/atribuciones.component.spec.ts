import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribucionesComponent } from './atribuciones.component';

describe('AtribucionesComponent', () => {
  let component: AtribucionesComponent;
  let fixture: ComponentFixture<AtribucionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtribucionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtribucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
