import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'livros',
    loadChildren: () =>
      import('./livros/livros.module').then((m) => m.LivrosModule)
  },
  {
    path: 'categorias',
    loadChildren: () =>
      import('./categorias/categorias.module').then((m) => m.CategoriasModule)
  },
  {
    path: 'buscar',
    loadChildren: () =>
      import('./buscar/buscar.module').then((m) => m.BuscarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
