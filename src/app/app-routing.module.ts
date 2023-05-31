import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './Components/home-page/home-page.component'
import {CatalogoLibrosComponent} from './Components/catalogo-libros/catalogo-libros.component'
import {PjtbotlPageComponent} from './Components/pjtbotl-page/pjtbotl-page.component'
const routes: Routes = [
{path: '', component: HomePageComponent},
{path: 'Libros', component: CatalogoLibrosComponent},
{path: 'Libro-PJTBOTL', component: PjtbotlPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
