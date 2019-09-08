import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasConsultaComponent } from './categorias-consulta/categorias-consulta.component';
import { SharedModule } from '../shared/shared.module';

import { LivroService } from './../livros/shared/livro.service';

@NgModule({
  declarations: [CategoriasConsultaComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    SharedModule
  ],
  providers: [LivroService]
})
export class CategoriasModule { }
