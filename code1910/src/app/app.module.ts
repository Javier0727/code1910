import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { FooterComponent } from './footer/footer.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { ValoresComponent } from './valores/valores.component';
import { Coleccion1Component } from './coleccion1/coleccion1.component';
import { Coleccion2Component } from './coleccion2/coleccion2.component';
import { Coleccion3Component } from './coleccion3/coleccion3.component';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    ContenidoComponent,
    FooterComponent,
    CabeceraComponent,
    MisionComponent,
    VisionComponent,
    ValoresComponent,
    Coleccion1Component,
    Coleccion2Component,
    Coleccion3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
