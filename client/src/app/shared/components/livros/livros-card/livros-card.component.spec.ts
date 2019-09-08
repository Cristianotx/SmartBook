import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosCardComponent } from './livros-card.component';

describe('LivrosCardComponent', () => {
  let component: LivrosCardComponent;
  let fixture: ComponentFixture<LivrosCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrosCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
