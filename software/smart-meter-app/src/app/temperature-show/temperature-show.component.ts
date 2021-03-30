import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DatePipe } from '@angular/common';

export interface Temp {
  Time: number;
  Temperature: number;
}


export interface tempPerPerson{
  name: string;
  series: any[];

}

@Component({
  selector: 'app-temperature-show',
  templateUrl: './temperature-show.component.html',
  styleUrls: ['./temperature-show.component.scss']
})
export class TemperatureShowComponent implements OnInit {
  tempData: tempPerPerson[] = [];

  colorScheme = {
    domain: ['#5AA454', '#003311', '#00b33c', '#66ff99', ]
  };

  startDate = new Date();
  constructor(private http: HttpClient) {
    http.get('http://localhost:3300/temp').subscribe((rec: Temp[]) => {
      const tmp = [];
      for (const output of rec) {
        tmp.push({value: output.Temperature, name: output.Time});
      }
      console.log('HIEROOOOO');
      console.log('temp ' + tmp[1].value + ' , time: ' + tmp[1].name);
      this.tempData.push({name: 'Maarten', series: tmp});
      // console.log(this.tempData);
    });
  }

  ngOnInit(): void {
  }
  // dateTickFormatting(value: any): string {
  //   DatePipe datePipe = new DatePipe();
  //   return datepipe.transform(value, 'dd-MM-yyyy');
  // }
}
