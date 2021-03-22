import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {CategoryService, ChartModule, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { HomegridComponent } from './homegrid/homegrid.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    HomegridComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    AppRoutingModule
  ],
  providers: [CategoryService, LineSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
