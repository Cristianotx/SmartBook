import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivrosDetalheComponent } from './livros-detalhe/livros-detalhe.component';
import { LivrosConsultaComponent } from './livros-consulta/livros-consulta.component';
import { LivrosCadastroComponent } from './livros-cadastro/livros-cadastro.component';


const routes: Routes = [
  {
    path: '',
    component: LivrosConsultaComponent
  },
  {
    path: ':id/detalhe',
    component: LivrosDetalheComponent
  },
  {
    path: 'cadastrar',
    component: LivrosCadastroComponent
  },
  {
    path: ':id/editar',
    component: LivrosCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
