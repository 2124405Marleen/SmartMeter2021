import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {EnergieChartData, Energiedata} from '../energiedata/energiedata.component';
import {Data} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-asked-hours',
  templateUrl: './asked-hours.component.html',
  styleUrls: ['./asked-hours.component.scss']
})
export class AskedHoursComponent implements OnInit {

  nHours = new FormControl(1, [Validators.required, Validators.min(1), Validators.max(24)]);

  energiedatas: Energiedata[] = [];
  energieUsageDuringTime: EnergieChartData[] = [];
  nameMaarten = 'Maarten';
  colorScheme = {
    domain: ['#5AA454', '#003311', '#00b33c', '#66ff99', ]
  };

 // today: Date = new Date();
  startData = new Date();

  constructor(private http: HttpClient) {
    this.startData.setHours(this.startData.getHours() - this.nHours.value);
    //  this.today.setDate(23);
    this.GetAskedHourData();


    this.nHours.valueChanges.subscribe(rec => {
      this.startData = new Date();
      //  this.today.setDate(23);
      //  console.log(this.energieUsageDuringTime);
      this.startData.setHours(this.startData.getHours() - rec);

     //  console.log('date: ' + this.startData);

      this.GetAskedHourData();

    });
  }

  private GetAskedHourData(): void {
    this.http.get('http://localhost:3300/energies').subscribe((rec: Energiedata[]) => {
      // this.energiedatas = rec;
      const tmp = [];
      const tmpChart = [];
      const data = [];

      const from = this.startData;
      const to = new Date();
      rec = rec.filter(res => {

        // 21
        // 03
        // 23
        //
        // 11
        // 51
        // 25
        // W

        const year = Number(res.timeStamp.substring(0, 2)) + 2000;
        const month = Number(res.timeStamp.substring(2, 4)) - 1;
        const day = Number(res.timeStamp.substring(4, 6));
        const hour = Number(res.timeStamp.substring(6, 8));
        const minute = Number(res.timeStamp.substring(8, 10));
        const second = Number(res.timeStamp.substring(10, 12));


        const time = new Date(year, month, day, hour, minute, second);
        //  console.log(time);



        if (time >= from && time <= to) {
          return true;
        }


      });

     //  console.log(rec);
      for (const output of rec) {
        tmp.push({
          timestamp: output.timeStamp,
          offPeakFlow: parseFloat(output.offPeakFlow.substring(1, 10)),
          peakFlow: parseFloat(output.peakFlow.substring(1, 10)),
          offPeakPowerFeed: parseFloat(output.offPeakPowerFeed.substring(1, 10)),
          peakPowerFeed: parseFloat(output.peakPowerFeed.substring(1, 10)),
          currentRate: Number(output.currentRate),
          currentPower: parseFloat(output.currentPower.substring(1, 6)),
          returnedPower: parseFloat(output.returnedPower.substring(1, 6)),
          gasUsage: parseFloat(output.gasUsage.substring(1, 9)),
        });

        data.push({
          name: output.timeStamp.substring(4, 6) + '-' + output.timeStamp.substring(2, 4) + '-' + output.timeStamp.substring(0, 2) + ' ' +
            output.timeStamp.substring(6, 8) + ':' + output.timeStamp.substring(8, 10),
          value: parseFloat(output.currentPower.substring(1, 6))
        });
        // 21 03 23 11 51 25W
      }

      // this.energieUsageDuringTime.push();
      this.energieUsageDuringTime = [{name: this.nameMaarten, series: data}];
      this.energiedatas = tmp;
      // this.energieUsageDuringTime = ;
    });
  }

  ngOnInit(): void {
  }

}
