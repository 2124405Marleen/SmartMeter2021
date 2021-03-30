import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface PowerUse{
  timeStamp: string;
  offPeakFlow: string;
  peakFlow: string;
  offPeakPowerFeed: string;
  peakPowerFeed: string;
  currentRate: number;
  currentPower: string;
  returnedPower: string;
  gasUsage: string;
}

export interface PowerNow{
  time: string;
  power: number;
}
@Component({
  selector: 'app-energie-use-past-hour',
  templateUrl: './energie-use-past-hour.component.html',
  styleUrls: ['./energie-use-past-hour.component.scss']
})

export class EnergieUsePastHourComponent implements OnInit {

  energiedatas: PowerNow[] = [];
  colorScheme = {
    domain: ['#5AA454', '#003311', '#00b33c', '#66ff99', ]
  };

  usedPowerThisHour = 0;
  // today: Date = new Date();
  startData = new Date();

  constructor(private http: HttpClient) {
    this.startData.setHours(this.startData.getHours() - 1);
    const from = this.startData;
    const to = new Date();

    this.http.get('http://localhost:3300/energies').subscribe((rec: PowerUse[]) => {
      const tmp = [];
      rec = rec.filter(res => {
        const year = Number(res.timeStamp.substring(0, 2)) + 2000;
        const month = Number(res.timeStamp.substring(2, 4)) - 1;
        const day = Number(res.timeStamp.substring(4, 6));
        const hour = Number(res.timeStamp.substring(6, 8));
        const minute = Number(res.timeStamp.substring(8, 10));
        const second = Number(res.timeStamp.substring(10, 12));
        const time = new Date(year, month, day, hour, minute, second);

        if (time >= from && time <= to) {
          return true;
        }
      });
      for (const output of rec) {
        tmp.push({
          timeStamp: output.timeStamp,
          offPeakFlow: parseFloat(output.offPeakFlow.substring(1, 10)),
          peakFlow: parseFloat(output.peakFlow.substring(1, 10)),
          offPeakPowerFeed: parseFloat(output.offPeakPowerFeed.substring(1, 10)),
          peakPowerFeed: parseFloat(output.peakPowerFeed.substring(1, 10)),
          currentRate: Number(output.currentRate),
          currentPower: parseFloat(output.currentPower.substring(1, 6)),
          returnedPower: parseFloat(output.returnedPower.substring(1, 6)),
          gasUsage: parseFloat(output.gasUsage.substring(1, 9)),
        });
        this.energiedatas.push({
          time: output.timeStamp,
          power: parseFloat(output.offPeakFlow.substring(1, 10)) + parseFloat(output.peakFlow.substring(1, 10))
        });
      }
      this.usedPowerThisHour = this.energiedatas[this.energiedatas.length -1].power - this.energiedatas[0].power;
    });
  }

  ngOnInit(): void {
  }


}
