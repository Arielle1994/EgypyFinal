import { Injectable } from '@angular/core';
import { citiesInfo } from './cities-info-data';

@Injectable({
  providedIn: 'root'
})
export class GetCitiesService {

  constructor() { }

  getCitiesInfoData(){
    return citiesInfo;
  }
}
