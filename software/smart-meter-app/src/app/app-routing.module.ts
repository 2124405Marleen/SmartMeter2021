import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomegridComponent} from './homegrid/homegrid.component';
import {AboutgridComponent} from './aboutgrid/aboutgrid.component';
import {StatsgridComponent} from "./statsgrid/statsgrid.component";

const routes: Routes = [
  {path: 'home', component: HomegridComponent},
  {path: 'about', component: AboutgridComponent},
  {path: 'stats', component: StatsgridComponent},
  {path: '', component: HomegridComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
