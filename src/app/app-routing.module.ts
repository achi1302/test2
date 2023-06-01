import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './Components/home-page/home-page.component'
import {CatalogoLibrosComponent} from './Components/catalogo-libros/catalogo-libros.component'
import {PjtbotlPageComponent} from './Components/pjtbotl-page/pjtbotl-page.component'
import {PjtltComponent} from './Components/pjtlt/pjtlt.component'
import {PjttcComponent} from './Components/pjttc/pjttc.component'
import {PjtsomComponent} from './Components/pjtsom/pjtsom.component'
import {PjtloComponent} from './Components/pjtlo/pjtlo.component'
const routes: Routes = [
{path: '', component: HomePageComponent},
{path: 'Libros', component: CatalogoLibrosComponent},
{path: 'Libro-PJTBOTL', component: PjtbotlPageComponent},
{path: 'Libro-PJTLT', component: PjtltComponent},
{path: 'Libro-PJTTC', component: PjttcComponent},
{path: 'Libro-PJTSOM', component: PjtsomComponent},
{path: 'Libro-PJTLO', component: PjtloComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
