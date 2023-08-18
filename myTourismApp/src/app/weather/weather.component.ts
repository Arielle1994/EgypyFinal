import { Component, OnInit } from '@angular/core';
import { GetweatherService } from './getweather.service';
import { weatherData } from '../cities/cities-info';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
citiesWeather: weatherData[] |undefined;
//potentially comething wrong with my property naming here.
  //selectedWeather:weatherData|undefined;
  //selectedCity= null;

  constructor (private getWeatherService:GetweatherService) {}

  ngOnInit() {
    this.citiesWeather= this.getWeatherService.getWeather();
  }
 /* selectCity(cityWeather:weatherData) {
    this.selectedWeather=cityWeather;
  }*/
}
