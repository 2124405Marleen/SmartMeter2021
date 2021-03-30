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
      for (var i = rec.length - 1; i > 0; i = i - 10) {
        var date = new Date(rec[i].Time * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        tmp.push({value: rec[i].Temperature, name: formattedTime});
      }
      console.log('HIEROOOOO');
      console.log('temp ' + tmp[1].value + ' , time: ' + formattedTime);
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
