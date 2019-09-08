import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasConsultaComponent } from './categorias-consulta/categorias-consulta.component';

const routes: Routes = [
  {
    path: ':id/livros',
    component: CategoriasConsultaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
