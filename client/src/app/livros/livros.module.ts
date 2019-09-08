import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';

import { LivrosRoutingModule } from './livros-routing.module';

import { LivrosConsultaComponent } from './livros-consulta/livros-consulta.component';
import { LivrosCadastroComponent } from './livros-cadastro/livros-cadastro.component';
import { LivrosDetalheComponent } from './livros-detalhe/livros-detalhe.component';

@NgModule({
  declarations: [LivrosConsultaComponent, LivrosCadastroComponent, LivrosDetalheComponent],
  imports: [
    CommonModule,
    SharedModule,
    LivrosRoutingModule,
    ReactiveFormsModule
  ]
})
export class LivrosModule {}
