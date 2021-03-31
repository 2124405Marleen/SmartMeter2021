import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomegridComponent} from './homegrid/homegrid.component';

const routes: Routes = [
  {path: 'home', component: HomegridComponent},
  {path: '', component: HomegridComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
