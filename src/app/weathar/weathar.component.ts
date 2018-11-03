import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';
import {IWeather} from '../interfaces';
import {IForecast} from '../interfaces';

@Component({
  selector: 'app-weathar',
  templateUrl: './weathar.component.html',
  styleUrls: ['./weathar.component.css']
})
export class WeatharComponent implements OnInit{
  currentWeather$: IWeather;
  city: string;
  forcasts: IForecast;
    constructor(private data: DataService) {
  }
  ngOnInit() {
  }
  getWeather() {
    this.data.getWeather(this.city).subscribe((data: IWeather) => this.currentWeather$ = data);
    this.getForcast(this.city);
  }
  getForcast(city) {
    return this.data.getForecast(city).subscribe((data: IForecast) => this.forcasts = data);
  }
}
