import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivroService } from '../livros/shared/livro.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  texto: string;
  livros: any[];

  pagina = 1;
  itensPorPagina = 6;

  constructor(
    private activatedRoute: ActivatedRoute,
    private livroService: LivroService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['texto']) {
        this.texto = params['texto'];
      }
    });
  }

  obterPorTexto(categoriaId: number) {
    this.livroService
      .obterPorPesquisa(this.pagina, this.itensPorPagina, this.texto)
      .subscribe(
        (response) => (this.livros = response),
        (error) => console.log(error)
      );
  }
}
