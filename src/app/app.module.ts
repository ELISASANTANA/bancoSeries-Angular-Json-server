import { ReactiveFormsModule } from '@angular/forms';
import { SerieService } from './servicos/serie.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { SerieFormComponent } from './componentes/serie-form/serie-form.component';

import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './componentes/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaComponent,
    SerieFormComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SerieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
