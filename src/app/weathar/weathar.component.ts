import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';
import {IWeather} from '../interfaces';

@Component({
  selector: 'app-weathar',
  templateUrl: './weathar.component.html',
  styleUrls: ['./weathar.component.css']
})
export class WeatharComponent implements OnInit {
  currentWeather$: IWeather;
  date: number;
  temp: number;
  city: string;
  sunrise: number;
  sunset: number;
    constructor(private data: DataService) {
      // this.city = 'Nis';
      this.currentWeather$ = {coord: {lon: 0, lat: 0},
      weather: {id: 0, main: '', description: '', icon: 'o1n'},
      base: '',
      main: {temp: 0, pressure: 0, humidity: 0, temp_min: 0, temp_max: 0},
      visibility: 0,
      wind: {speed: 0},
      clouds: {all: 0},
      dt: 0,
      sys: {type: 0, id: 0, message: 0, country: '', sunrise: 0, sunset: 0},
      id: 0,
      name: '',
      cod: 0
    };
  }
  ngOnInit() {
    /*this.city = 'Nis';
     this.getWeather();*/
  }
  getWeather() {
    /*this.data.getWeather(this.city).subscribe((data: IWeather) => this.currentWeather$ = data);
    if (this.currentWeather$.dt > 0) {
      this.formatData();
    }*/
  }
  kalvinToCelzious(temp: number) {
  }
  formatData() {
    this.date = this.currentWeather$.dt * 1000;
    this.temp = this.currentWeather$.main.temp - 275.15;
    this.sunrise = this.currentWeather$.sys.sunrise * 1000;
    this.sunset = this.currentWeather$.sys.sunset * 1000;
  }
}
