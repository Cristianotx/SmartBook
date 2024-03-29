import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarComponent } from './buscar.component';


const routes: Routes = [
  {
    path: '',
    component: BuscarComponent
  },
  {
    path: ':texto',
    component: BuscarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarRoutingModule { }
