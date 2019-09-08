import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livros-detalhe',
  templateUrl: './livros-detalhe.component.html',
  styleUrls: ['./livros-detalhe.component.scss']
})
export class LivrosDetalheComponent implements OnInit {
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

  constructor(private router: Router) {}

  ngOnInit() {}

  irParaCategoria = (categoriaId: number) =>
    this.router.navigate(['/categorias', categoriaId, 'livros']);
}
