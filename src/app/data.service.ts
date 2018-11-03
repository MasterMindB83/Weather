import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { stringify } from '@angular/core/src/render3/util';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url$: string;
  constructor(private http: HttpClient) {  }
  getWeather(city) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' +
    city + '&appid=cdc1b906ec2ba962977a603b61686fc4');
  }
}
