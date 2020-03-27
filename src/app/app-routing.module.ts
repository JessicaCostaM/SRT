import { ListaTecnicasComponent } from './lista-tecnicas/lista-tecnicas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';


const routes: Routes = [
  {
    path: "comecar",
    component: MeuPrimeiroComponent
  },
  {
    path: "lista",
    component: ListaTecnicasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
