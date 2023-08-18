import { Component } from '@angular/core';

export interface cityInfo {

  name:string;
  touristAttractions: string[]; 

}

export interface weatherData{
  name: string;
  springN: number;
  springM: number;
  summerN: number;
  summerM: number;
  winterN: number;
  winterM: number;
  autumnN: number;
  autumnM: number;
  visitsFrom: string;
  visitsTo: string;
}
