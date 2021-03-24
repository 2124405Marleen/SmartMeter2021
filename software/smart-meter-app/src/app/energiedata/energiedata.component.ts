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
      this.energiedatas = rec;
    });
  }

  ngOnInit(): void {
  }

}
