import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
// import {CommonModule} from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { CatalogoLibrosComponent } from './Components/catalogo-libros/catalogo-libros.component';
import { PjtbotlPageComponent } from './Components/pjtbotl-page/pjtbotl-page.component';
import { PjtltComponent } from './Components/pjtlt/pjtlt.component';
import { PjttcComponent } from './Components/pjttc/pjttc.component';
import { PjtsomComponent } from './Components/pjtsom/pjtsom.component';
import { PjtloComponent } from './Components/pjtlo/pjtlo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    CatalogoLibrosComponent,
    PjtbotlPageComponent,
    PjtltComponent,
    PjttcComponent,
    PjtsomComponent,
    PjtloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
