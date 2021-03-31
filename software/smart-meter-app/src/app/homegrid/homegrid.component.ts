import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Energie{
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
  selector: 'app-homegrid',
  templateUrl: './homegrid.component.html',
  styleUrls: ['./homegrid.component.scss']
})
export class HomegridComponent implements OnInit {

  energies: Energie[] = [];
  currectUsage: string;
  currectGasUasge: string;
  offPeakCosts = 0;
  peakCosts = 0;
  currentRate = 0;
  // fill energies list with data of database
  constructor(http: HttpClient) {
    http.get('http://localhost:3300/energies').subscribe( (rec: Energie[]) => {
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
          this.offPeakCosts = parseFloat(output.offPeakFlow) * 0.11,
          this.peakCosts = parseFloat(output.peakFlow) * 0.13,
          this.currentRate = output.currentRate
      );
        this.energies = tmp;
      }
    });
  }
  ngOnInit(): void {
  }

}
