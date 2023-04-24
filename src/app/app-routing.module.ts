import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { EventoComponent } from './evento/evento.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { ServicioComponent } from './servicio/servicio.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { RecibounparametroComponent } from './recibounparametro/recibounparametro.component';
import { ReciboparametrosComponent } from './reciboparametros/reciboparametros.component';
import { PasoparametrosComponent } from './pasoparametros/pasoparametros.component';
import { PasounparametroComponent } from './pasounparametro/pasounparametro.component';
const routes: Routes = [
  {path:"interpolacion", component:InterpolacionComponent},
  {path:"onewaybinding", component:OnewaybindingComponent},
  {path:"evento", component:EventoComponent},
  {path:"twowaybinding", component:TwowaybindingComponent},
  {path:"servicio", component:ServicioComponent},
  {path:"directivas", component:DirectivasComponent},
  {path:"recibounparametro/:id", component:RecibounparametroComponent},
  {path:"recibirparametros/:edad/:nombre", component:ReciboparametrosComponent},
  {path:"darunparametro", component:PasounparametroComponent},
  {path:"darparametros", component:PasoparametrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
