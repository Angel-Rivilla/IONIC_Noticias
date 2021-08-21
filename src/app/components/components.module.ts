import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    NoticiasComponent,
    NoticiaComponent,
    HeaderComponent
  ],
  exports: [
    NoticiasComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
