import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {
  @Input()
  data;

  constructor() { }

  ngOnInit() {
  }

}
