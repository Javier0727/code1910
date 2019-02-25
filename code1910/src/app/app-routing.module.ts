import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenidoComponent } from './contenido/contenido.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { ValoresComponent } from './valores/valores.component';
import { Coleccion1Component } from './coleccion1/coleccion1.component';
import { Coleccion2Component } from './coleccion2/coleccion2.component';
import { Coleccion3Component } from './coleccion3/coleccion3.component';
import { Coleccion4Component } from './coleccion4/coleccion4.component';
import { Coleccion5Component } from './coleccion5/coleccion5.component';
import { Coleccion6Component } from './coleccion6/coleccion6.component';
import { Coleccion7Component } from './coleccion7/coleccion7.component';
import { Coleccion8Component } from './coleccion8/coleccion8.component';
import { Coleccion9Component } from './coleccion9/coleccion9.component';
import { Coleccion10Component } from './coleccion10/coleccion10.component';

const routes: Routes = [
  { path: 'mision', component: MisionComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'valores', component: ValoresComponent },
  { path: 'col1', component: Coleccion1Component },
  { path: 'col2', component: Coleccion2Component },
  { path: 'col3', component: Coleccion3Component },
  { path: 'col4', component: Coleccion4Component },
  { path: 'col5', component: Coleccion5Component },
  { path: 'col6', component: Coleccion6Component },
  { path: 'col7', component: Coleccion7Component },
  { path: 'col8', component: Coleccion8Component },
  { path: 'col9', component: Coleccion9Component },
  { path: 'col10', component: Coleccion10Component },
  { path: '', component: ContenidoComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
