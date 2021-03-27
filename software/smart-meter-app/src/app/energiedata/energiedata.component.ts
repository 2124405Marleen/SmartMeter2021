import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Energiedata{
  timestamp: string;
  offPeakFlow: string;
  peakFlow: string;
  offPeakPowerFeed: string;
  peakPowerFeed: string;
  currentRate: number;
  currentPower: string;
  returnedPower: string;
  gasUsage: string;
}

@Component({
  selector: 'app-energiedata',
  templateUrl: './energiedata.component.html',
  styleUrls: ['./energiedata.component.scss']
})
export class EnergiedataComponent implements OnInit {

  energiedatas: Energiedata[] = [];

  constructor(http: HttpClient) {
    http.get('http://localhost:3300/energies').subscribe( (rec: Energiedata[]) => {
      // this.energiedatas = rec;
      const tmp = [];
      for (const output of rec) {
        tmp.push({
          timestamp: output.timestamp,
          offPeakFlow: parseFloat(output.offPeakFlow.substring(1, 10)),
          peakFlow: parseFloat(output.peakFlow.substring(1, 10)),
          offPeakPowerFeed: parseFloat(output.offPeakPowerFeed.substring(1, 10)),
          peakPowerFeed: parseFloat(output.peakPowerFeed.substring(1, 10)),
          currentRate: Number(output.currentRate),
          currentPower: parseFloat(output.currentPower.substring(1, 6)),
          returnedPower: parseFloat(output.returnedPower.substring(1, 6)),
          gasUsage: parseFloat(output.gasUsage.substring(1, 9)),
        });
        this.energiedatas = tmp;
      }
    });
  }

  ngOnInit(): void {
  }

}
