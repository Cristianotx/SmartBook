
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarRoutingModule } from './buscar-routing.module';
import { BuscarComponent } from './buscar.component';

import { LivroService } from './../livros/shared/livro.service';

@NgModule({
  declarations: [BuscarComponent],
  imports: [
    CommonModule,
    BuscarRoutingModule
  ],
  providers: [
    LivroService
  ]
})
export class BuscarModule { }
