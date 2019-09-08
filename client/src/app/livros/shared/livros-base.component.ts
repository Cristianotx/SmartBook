import {
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  Injectable,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

export class LivrosBaseComponent implements OnInit, OnChanges {
  @Input()
  params;

  @Output()
  changed = new EventEmitter();

  form: FormGroup;
  submitted = false;

  listaGeneros = [];

  constructor(public formBuilder: FormBuilder) {
    this.load();
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.params && changes.params.currentValue) {
      this.init(changes.params.currentValue);
    }
  }

  submit() {
    debugger;
    if (!this.form.valid) {
      this.submitted = true;
      return;
    }

    this.onSubmit();
  }

  load() {}
  init(params) {}
  onSubmit() {}
}
