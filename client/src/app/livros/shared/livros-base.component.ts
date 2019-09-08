import {
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { LivroService } from './livro.service';

export class LivrosBaseComponent implements OnInit, OnChanges {
  aggregateId: string;

  form: FormGroup;
  submitted = false;

  listaGeneros = [];

  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public livroService: LivroService
  ) {
    this.load();
  }

  ngOnInit() {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  submit() {
    if (!this.form.valid) {
      this.submitted = true;
      return;
    }

    this.onSubmit();
  }

  load() {}
  init() {}
  onSubmit() {}
}
