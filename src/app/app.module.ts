import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ListaTecnicasComponent } from './lista-tecnicas/lista-tecnicas.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    ListaTecnicasComponent
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
