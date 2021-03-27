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
  currectUsage: string;
  currectGasUasge: string;

  constructor(http: HttpClient) {
    http.get('http://localhost:3300/energies').subscribe( (rec: Energiedata[]) => {
      // this.energiedatas = rec;
      const tmp = [];
      for (const output of rec) {
        tmp.push({
          timestamp: output.timestamp,
          offPeakFlow: output.offPeakFlow.substring(1, 10),
          peakFlow: output.peakFlow.substring(1, 10),
          offPeakPowerFeed: output.offPeakPowerFeed.substring(1, 10),
          peakPowerFeed: output.peakPowerFeed.substring(1, 10),
          currentRate: output.currentRate,
          currentPower: output.currentPower.substring(1, 6),
          returnedPower: output.returnedPower.substring(1, 6),
          gasUsage: output.gasUsage.substring(1, 9),
        },
          this.currectGasUasge = output.gasUsage.substring(1, 9),
          this.currectUsage = output.currentPower.substring(1, 6),
        );
        this.energiedatas = tmp;
      }
    });
  }

  ngOnInit(): void {
  }

}
