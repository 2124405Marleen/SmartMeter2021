import { Component, OnInit } from '@angular/core';
import { ChartModule} from '@syncfusion/ej2-angular-charts';
import {HttpClient} from '@angular/common/http';
import {Energiedata} from '../energiedata/energiedata.component';
import {Energie} from '../homegrid/homegrid.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  public primaryXAxis: Object;
  public chartData: Energie[];

  // fill energies list with data of database
  constructor(http: HttpClient) {
    http.get('http://localhost:3300/energies').subscribe( (rec: Energie[]) => {
      this.chartData = rec;
    });
  }

  ngOnInit(): void {
    // Data for chart series
    // const dataResult: any[] = [];
    //
    //
    //
    // dataResult.push({time: '12:00', value: 98});
    // dataResult.push({time: '13:00', value: 12});
    // dataResult.push({time: '14:00', value: 56});
    // dataResult.push({time: '15:00', value: 69});
    // dataResult.push({time: '16:00', value: 123});

    // this.chartData = this.energies;

    // this.chartData = dataResult;
    // this.chartData = [
    //   {month: 'Jan', sales: 35}, {month: 'Feb', sales: 28},
    //   {month: 'Mar', sales: 34}, {month: 'Apr', sales: 32},
    //   {month: 'May', sales: 40}, {month: 'Jun', sales: 32},
    //   {month: 'Jul', sales: 35}, {month: 'Aug', sales: 55},
    //   {month: 'Sep', sales: 38}, {month: 'Oct', sales: 30},
    //   {month: 'Nov', sales: 25}, {month: 'Dec', sales: 32}
    // ];
    this.primaryXAxis = {
      valueType: 'Category'
    };
  }
}
