import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias-consulta',
  templateUrl: './categorias-consulta.component.html',
  styleUrls: ['./categorias-consulta.component.scss']
})
export class CategoriasConsultaComponent implements OnInit {

  livros = [
    {
      id: 1,
      capa: 'https://wpbingosite.com/wordpress/bootin/wp-content/uploads/2019/05/Image-29.jpg',
      titulo: 'Cup Cake Diraes',
      autor: 'Anna Hillton',
      preço: 'R$ 23,00'
    },
    {
      id: 2,
      capa: 'https://wpbingosite.com/wordpress/bootin/wp-content/uploads/2019/05/Image-27.jpg',
      titulo: 'Delicious Place',
      autor: 'Coco Simon',
      preço: 'R$ 23,00'
    },
    {
      id: 3,
      capa: 'https://wpbingosite.com/wordpress/bootin/wp-content/uploads/2019/05/Image-25.jpg',
      titulo: 'The Still Life',
      autor: 'Sabela Hupter',
      preço: 'R$ 23,00'
    },
    {
      id: 4,
      capa: 'https://wpbingosite.com/wordpress/bootin/wp-content/uploads/2019/05/Image-29.jpg',
      titulo: 'Cup Cake Diraes',
      autor: 'Anna Hillton',
      preço: 'R$ 23,00'
    },
    {
      id: 5,
      capa: 'https://wpbingosite.com/wordpress/bootin/wp-content/uploads/2019/05/Image-27.jpg',
      titulo: 'Delicious Place',
      autor: 'Coco Simon',
      preço: 'R$ 23,00'
    },
    {
      id: 6,
      capa: 'https://wpbingosite.com/wordpress/bootin/wp-content/uploads/2019/05/Image-25.jpg',
      titulo: 'The Still Life',
      autor: 'Sabela Hupter',
      preço: 'R$ 23,00'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
