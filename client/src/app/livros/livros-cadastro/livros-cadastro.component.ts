import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

import { LivrosBaseComponent } from '../shared/livros-base.component';

@Component({
  selector: 'app-livros-cadastro',
  templateUrl: './livros-cadastro.component.html',
  styleUrls: ['./livros-cadastro.component.scss']
})
export class LivrosCadastroComponent extends LivrosBaseComponent {
  load() {
    this.form = this.formBuilder.group({
      titulo: ['', Validators.required],
      generos: ['', Validators.required],
      dataPublicacao: [null, Validators.required],
      paginas: [0, Validators.required],
      autor: ['', Validators.required],
      editora: ['', Validators.required],
      descricao: ['', Validators.required],
      sinopse: ['', Validators.required],
      links: ['', Validators.required],
      urlCapa: [null, Validators.required]
    });
  }

  init() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['id']) {
        this.aggregateId = params['id'];
        this.obterLivroPorId();
      }
    });
  }

  obterLivroPorId() {
    this.livroService
      .obterPorId(this.aggregateId)
      .subscribe(
        (response) => this.patchValue(response),
        (error) => console.log(error)
      );
  }

  patchValue(model: any) {
    if (!model) {
      return;
    }

    this.form.patchValue({
      model
    });
  }
}
