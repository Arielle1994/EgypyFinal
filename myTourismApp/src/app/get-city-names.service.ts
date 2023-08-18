import { Injectable } from '@angular/core';
import { GetweatherService } from './weather/getweather.service';
import { weatherData } from './cities/cities-info';

@Injectable({
  providedIn: 'root'
})
export class GetCityNamesService {
weatherInfo: weatherData[]=[]; //change name of this?
arrayNames:string[]=[];


  
  constructor(private _getW: GetweatherService) { }
 
  getNames(){
    const weatherInfo= this._getW.getWeather();
    for(var i=0; i<weatherInfo.length; i++){
      this.arrayNames.push(weatherInfo[i].name);
    }
    return this.arrayNames;
  }
}
  /* {
    this.weatherInfo=this. _getW.getWeather();
    for (var i =0; i<this.weatherInfo.length; i++) {
      this.arrayNames.push(this.weatherInfo[i].name);
    }
    return this.arrayNames;
  }
}*/
