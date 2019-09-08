import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LivroService } from './../shared/livro.service';

@Component({
  selector: 'app-livros-detalhe',
  templateUrl: './livros-detalhe.component.html',
  styleUrls: ['./livros-detalhe.component.scss']
})
export class LivrosDetalheComponent implements OnInit {
  aggregateId: string;

  livro = {
    id: 1,
    titulo: 'Delicious Place',
    categorias: [
      {
        id: 1,
        nome: 'Terror'
      },
      {
        id: 1,
        nome: 'Comédia'
      },
      {
        id: 1,
        nome: 'Romance'
      }
    ],
    dataPublicacao: '2016-01-01',
    paginas: 150,
    autor: 'Coco Simon',
    editora: 'Livraria Livrando',
    descricao:
      'Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.',
    sinopse: 'teste teste teste teste teste teste ',
    capa:
      'https://wpbingosite.com/wordpress/bootin/wp-content/uploads/2019/05/Image-27.jpg',
    links: [
      {
        titulo: 'Saraiva',
        link: 'https:/saraiva.com.br'
      },
      {
        titulo: 'Google',
        link: 'https://www.google.com.br/'
      },
      {
        titulo: 'Americanas',
        link: 'https:/americanas.com.br'
      }
    ]
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private livroService: LivroService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['id']) {
        this.aggregateId = params['id'];
        this.obterLivro();
      }
    });
  }

  obterLivro() {
    this.livroService
      .obterPorId(this.aggregateId)
      .subscribe((response) => response, (error) => console.log(error));
  }

  irParaCategoria = (categoriaId: number) =>
    this.router.navigate(['/categorias', categoriaId, 'livros']);
}
