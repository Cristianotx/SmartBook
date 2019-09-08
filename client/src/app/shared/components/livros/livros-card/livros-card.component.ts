import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livros-card',
  templateUrl: './livros-card.component.html',
  styleUrls: ['./livros-card.component.scss']
})
export class LivrosCardComponent implements OnInit {
  @Input()
  livro;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  editar = (id: number) =>
    this.router.navigate(['/livros', id, 'editar']);

  visualizar = (id: number) =>
    this.router.navigate(['/livos', id, 'visualizar']);
}
