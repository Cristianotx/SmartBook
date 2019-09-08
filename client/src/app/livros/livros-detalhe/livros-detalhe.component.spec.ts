import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosDetalheComponent } from './livros-detalhe.component';

describe('LivrosDetalheComponent', () => {
  let component: LivrosDetalheComponent;
  let fixture: ComponentFixture<LivrosDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrosDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
