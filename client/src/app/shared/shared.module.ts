import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';

import { LivrosComponent } from './components/livros/livros.component';
import { LivrosCardComponent } from './components/livros/livros-card/livros-card.component';

defineLocale('pt-br', ptBrLocale);

@NgModule({
  imports: [
    CommonModule,
    TypeaheadModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot(),
    CarouselModule.forRoot()
  ],
  declarations: [LivrosComponent, LivrosCardComponent],
  exports: [LivrosComponent, LivrosCardComponent]
})
export class SharedModule { }
