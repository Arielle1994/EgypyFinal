import { Injectable } from '@angular/core';
import {cititesWeather } from '../cities/cities-info-data';
import { weatherData } from '../cities/cities-info';

@Injectable({
  providedIn: 'root'
})
export class GetweatherService {

  constructor() { }


  getWeather():weatherData[] {
    return cititesWeather;
  }
}
