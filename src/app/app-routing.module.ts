import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './Components/home-page/home-page.component'
import {CatalogoLibrosComponent} from './Components/catalogo-libros/catalogo-libros.component'
import {LoginPageComponent} from './Components/login-page/login-page.component'
import {AboutPageComponent} from './Components/about-page/about-page.component'
import {PjtbotlPageComponent} from './Components/pjtbotl-page/pjtbotl-page.component'
import {PjtltComponent} from './Components/pjtlt/pjtlt.component'
import {PjttcComponent} from './Components/pjttc/pjttc.component'
import {PjtsomComponent} from './Components/pjtsom/pjtsom.component'
import {PjtloComponent} from './Components/pjtlo/pjtlo.component'
import {GroupPageComponent} from './Components/group-page/group-page.component'
const routes: Routes = [
{path: 'Libros', component: CatalogoLibrosComponent},
{path: 'Home', component: HomePageComponent},
{path: '', component: LoginPageComponent},
{path: 'Libro-PJTBOTL', component: PjtbotlPageComponent},
{path: 'Libro-PJTLT', component: PjtltComponent},
{path: 'Libro-PJTTC', component: PjttcComponent},
{path: 'Libro-PJTSOM', component: PjtsomComponent},
{path: 'Libro-PJTLO', component: PjtloComponent},
{path: 'About', component: AboutPageComponent},
{path: 'Group', component: GroupPageComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
