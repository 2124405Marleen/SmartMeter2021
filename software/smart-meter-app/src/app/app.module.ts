import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {CategoryService, ChartModule, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { HomegridComponent } from './homegrid/homegrid.component';
import {HttpClientModule} from '@angular/common/http';
import { EnergiedataComponent } from './energiedata/energiedata.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AskedHoursComponent } from './asked-hours/asked-hours.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    HomegridComponent,
    EnergiedataComponent,
    AskedHoursComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [CategoryService, LineSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
