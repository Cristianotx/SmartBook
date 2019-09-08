import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public itemsPerSlide = 3;
  activeSlideIndex: number = 0;

  slides = [
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/5.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/6.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/8.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg' }
  ];

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

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  visuzalizarLivrosPorCategoria = (idCategoria: number) =>
    this.router.navigate(['/categorias', idCategoria, 'livros']);


}
