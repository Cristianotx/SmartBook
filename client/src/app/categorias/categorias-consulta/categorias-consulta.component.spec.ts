import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasConsultaComponent } from './categorias-consulta.component';

describe('CategoriasConsultaComponent', () => {
  let component: CategoriasConsultaComponent;
  let fixture: ComponentFixture<CategoriasConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
