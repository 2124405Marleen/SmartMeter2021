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
  // fill energies list with data of database
  constructor(http: HttpClient) {
    http.get('http://localhost:3300/energies').subscribe( (rec: Energie[]) => {
      this.energies = rec;
    });
  }
  ngOnInit(): void {
  }

}
