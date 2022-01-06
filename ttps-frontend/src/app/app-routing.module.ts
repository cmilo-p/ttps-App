import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtribucionesComponent } from './components/atribuciones/atribuciones.component';

const routes: Routes = [
  { path: 'atribuciones', component: AtribucionesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
