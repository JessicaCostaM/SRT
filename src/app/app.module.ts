import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ListaTecnicasComponent } from './lista-tecnicas/lista-tecnicas.component';
import { InicioComponent } from './inicio/inicio.component';
import { SRTComponent } from './srt/srt.component';
import { InicioTextoComponent } from './inicio-texto/inicio-texto.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    ListaTecnicasComponent,
    InicioComponent,
    SRTComponent,
    InicioTextoComponent,
    ContatoComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
