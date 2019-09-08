import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { LivroService } from '../livros/shared/livro.service';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [
    LivroService
  ]
})
export class HomeModule { }
