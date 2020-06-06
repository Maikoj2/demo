
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { AlcaldeComponent } from './pages/alcalde/alcalde.component';
import { DireccionComponent } from './pages/direccion/direccion.component';
import { MisionYvisionComponent } from './pages/mision-yvision/mision-yvision.component';
import { FuncionesYvaloresComponent } from './pages/funciones-yvalores/funciones-yvalores.component';
import { MunicipioComponent } from './pages/municipio/municipio.component';

const ROUTES: Routes = [
    { path: 'inicio', component:  HomeComponent},
    { path: 'DirecionFisica', component: DireccionComponent },
    { path: 'Mision-Y-Vision', component: MisionYvisionComponent },
    { path: 'Funciones-y-deberes', component: FuncionesYvaloresComponent },
    { path: 'Alcalde', component:  AlcaldeComponent},
    { path: 'Montelibano', component:  MunicipioComponent},
    { path: '**', pathMatch:'full', redirectTo: 'inicio' }  
];

export const APPROUTES = RouterModule.forRoot(ROUTES, {useHash:true});