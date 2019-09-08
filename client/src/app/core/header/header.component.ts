import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router, public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      texto: ['', Validators.required]
    });
  }

  ngOnInit() {}

  buscarLivro() {
    if (this.form.get('texto').value) {
      this.router.navigateByUrl(`buscar?texto=${this.form.get('texto').value}`);
      this.form.reset();
    }
  }
}
