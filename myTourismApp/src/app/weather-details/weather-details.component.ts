import { Component, Input, OnInit,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { weatherData } from '../cities/cities-info';
import { GetweatherService } from '../weather/getweather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
 // weatherInfo: weatherData[] |undefined;

constructor (private _getW: GetweatherService, private route: ActivatedRoute) {}


selectedCityWeather:weatherData |undefined;
cityData: weatherData[] |undefined;
 
 name: string | undefined;
  summerM: number | undefined;
  summerN: number | undefined;
  winterM: number | undefined;
  winterN: number | undefined;
  springM: number | undefined;
  springN: number | undefined;
  autumnM: number | undefined;
  autumnN: number | undefined;
  visitsFrom: string | undefined;
  visitsTo: string |undefined;


 ngOnInit(): void{
      this.route.params.subscribe(params => {
        this.name = params['name'];
        this.summerM = +params['summerM'];
        this.summerN = +params ['summerN'];
        this.winterM = +params ['winterM'];
        this.winterN = +params ['winterN'];
        this.springM = +params ['springM'];
        this.springN = +params ['springN'];
        this.autumnM = +params ['autumnM'];
        this.autumnN = +params ['autumnN'];
        this.visitsFrom = params ['visitsFrom'];
        this.visitsTo= params ['vistisTo'];

        const weatherInfo: weatherData[]=this._getW.getWeather();
        this.selectedCityWeather=weatherInfo.find(city =>city.name === this.name);
        console.log(this.selectedCityWeather)
      });
    }

   /* this.route.params.subscribe (params => {
      const weatherName = params. get('weatherName');
      this.selectedCityWeather = this.getWeatherService.getWeather()
      .find(city => weather.name ===weatherName);
    });*/

  }
