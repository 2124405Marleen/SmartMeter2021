import { Component, OnInit } from '@angular/core';
import { ChartModule} from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-data-table',
  template: '<ejs-chart id="chart-container"></ejs-chart>',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
