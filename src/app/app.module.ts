import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { EventoComponent } from './evento/evento.component';
import { ServicioComponent } from './servicio/servicio.component';
import { RoutingComponent } from './routing/routing.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { PasoparametrosComponent } from './pasoparametros/pasoparametros.component';
import { PasounparametroComponent } from './pasounparametro/pasounparametro.component';
import { FormsModule } from '@angular/forms';
import { RecibounparametroComponent } from './recibounparametro/recibounparametro.component';
import { ReciboparametrosComponent } from './reciboparametros/reciboparametros.component';
import { RouterLink } from "@angular/router";

@NgModule({
    declarations: [
        AppComponent,
        InterpolacionComponent,
        OnewaybindingComponent,
        TwowaybindingComponent,
        EventoComponent,
        ServicioComponent,
        RoutingComponent,
        DirectivasComponent,
        PasoparametrosComponent,
        PasounparametroComponent,
        RecibounparametroComponent,
        ReciboparametrosComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterLink
    ]
})
export class AppModule { }
