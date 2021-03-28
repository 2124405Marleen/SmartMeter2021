import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {EnergieChartData, Energiedata} from '../energiedata/energiedata.component';

@Component({
  selector: 'app-asked-hours',
  templateUrl: './asked-hours.component.html',
  styleUrls: ['./asked-hours.component.scss']
})
export class AskedHoursComponent implements OnInit {

  nHours = new FormControl(1, Validators.required);

  energiedatas: Energiedata[] = [];
  energieUsageDuringTime: EnergieChartData[] = [];
  nameMaarten = 'Maarten';
  colorScheme = {
    domain: ['#5AA454', '#003311', '#00b33c', '#66ff99', ]
  };
  constructor(http: HttpClient) {
    http.get('http://localhost:3300/energies').subscribe( (rec: Energiedata[]) => {
      // this.energiedatas = rec;
      const tmp = [];
      const tmpChart = [];
      const data = [];
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

        data.push({name: output.timeStamp.substring(4, 6) + '-' + output.timeStamp.substring(2, 4) + '-' + output.timeStamp.substring(0, 2) + ' ' +
            output.timeStamp.substring(6, 8) + ':' + output.timeStamp.substring(8, 10),
          value: parseFloat(output.currentPower.substring(1, 6))});
        // 21 03 23 11 51 25W
      }

      this.energieUsageDuringTime.push({name: this.nameMaarten, series: data});
      console.log(this.energieUsageDuringTime);
      this.energiedatas = tmp;
      // this.energieUsageDuringTime = ;
    });
  }

  ngOnInit(): void {
  }

}
