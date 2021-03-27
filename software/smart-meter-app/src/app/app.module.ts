import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {CategoryService, ChartModule, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { HomegridComponent } from './homegrid/homegrid.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutgridComponent } from './aboutgrid/aboutgrid.component';
import { StatsgridComponent } from './statsgrid/statsgrid.component';
import { EnergiedataComponent } from './energiedata/energiedata.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    HomegridComponent,
    AboutgridComponent,
    StatsgridComponent,
    EnergiedataComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [CategoryService, LineSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
