import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivrosConsultaComponent } from './livros-consulta/livros-consulta.component';
import { LivrosCadastroComponent } from './livros-cadastro/livros-cadastro.component';


const routes: Routes = [
  {
    path: '',
    component: LivrosConsultaComponent
  },
  {
    path: ':id/cadastrar',
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
