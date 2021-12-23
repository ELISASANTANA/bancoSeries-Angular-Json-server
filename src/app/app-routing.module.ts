import { CardsComponent } from './componentes/cards/cards.component';
import { SerieFormComponent } from './componentes/serie-form/serie-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from 'src/app/componentes/lista/lista.component'

const routes: Routes = [
  {path:'lista', component: ListaComponent},
  {path:'add', component:SerieFormComponent},
  {path:'editar/:id', component:SerieFormComponent},
  {path:'cards', component:CardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
