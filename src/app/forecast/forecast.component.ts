import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';
import {IForecast} from '../interfaces';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  forcast: IForecast;
  constructor(private data: DataService) { }
  ngOnInit() {
  }
  getForcast(city) {
    return this.data.getForecast(city).subscribe((data: IForecast) => this.forcast = data);
  }
}
