import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenidoComponent } from './contenido/contenido.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { ValoresComponent } from './valores/valores.component';
import { Coleccion1Component } from './coleccion1/coleccion1.component';
import { Coleccion2Component } from './coleccion2/coleccion2.component';
import { Coleccion3Component } from './coleccion3/coleccion3.component';

const routes: Routes = [
  { path: 'mision', component: MisionComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'valores', component: ValoresComponent },
  { path: 'col1', component: Coleccion1Component },
  { path: 'col2', component: Coleccion2Component },
  { path: 'col3', component: Coleccion3Component },
  { path: '', component: ContenidoComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
