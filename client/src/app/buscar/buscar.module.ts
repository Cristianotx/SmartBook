import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarRoutingModule } from './buscar-routing.module';
import { BuscarComponent } from './buscar.component';


@NgModule({
  declarations: [BuscarComponent],
  imports: [
    CommonModule,
    BuscarRoutingModule
  ]
})
export class BuscarModule { }
