import { Component, OnInit } from '@angular/core';
import { citiesInfo } from './cities-info-data';
import { GetCitiesService } from './getcities.service';
import { cityInfo } from './cities-info';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  
  cities: cityInfo[]=[]; 
  color!:boolean;  //come back here if codes doesn't work

  constructor(private _cities: GetCitiesService) { }

  ngOnInit() {
    this.cities= this._cities.getCitiesInfoData();
    this.color= this.colorit(); 
  }

colorit(){
  for (var i=0; i<this.cities.length; i++){
    //if (typeof this.cities[i].touristAttractions !== undefined){
    if (this.cities[i].touristAttractions.length<3){
      return false;
    }
  //}
  }
  return true
}



}
