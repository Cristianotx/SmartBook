import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosConsultaComponent } from './livros-consulta.component';

describe('LivrosConsultaComponent', () => {
  let component: LivrosConsultaComponent;
  let fixture: ComponentFixture<LivrosConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrosConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrosConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
