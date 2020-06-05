import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APPROUTES} from './approuts';
import { NgxPageScrollModule} from 'ngx-page-scroll';
import { NgImageSliderModule} from 'ng-image-slider';

import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AlcaldeComponent } from './pages/alcalde/alcalde.component';
import { DireccionComponent } from './pages/direccion/direccion.component';
import { MisionYvisionComponent } from './pages/mision-yvision/mision-yvision.component';
import { FuncionesYvaloresComponent } from './pages/funciones-yvalores/funciones-yvalores.component';
import { MunicipioComponent } from './pages/municipio/municipio.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AlcaldeComponent,
    DireccionComponent,
    MisionYvisionComponent,
    FuncionesYvaloresComponent,
    MunicipioComponent
    
  

  ],
  imports: [
    BrowserModule,
    APPROUTES,
    NgxPageScrollModule,
    NgImageSliderModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
