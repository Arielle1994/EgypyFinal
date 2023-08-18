 //import { Component } from '@angular/core';
import { cityInfo, weatherData } from './cities-info';



export const citiesInfo: cityInfo[] = [
    {name:"Aswan", touristAttractions:["Abu-Sibel", "Nubian Museum","Elephantine"]},
    {name:"Cairo", touristAttractions:["The Pyramids", "Nile","Khan elkhalil"]},
    {name:"Luxor", touristAttractions:["Valley of the Kings", "Karnak","Luxor Template"]},
    {name:"Sharm El-Sheikh", touristAttractions:["Naama","RasMuhammad National Park"]},

];

export const cititesWeather:weatherData[]=[
  {name:"Aswan", springN:23, springM: 40, summerN:28, summerM:43, winterN: 12, winterM: 25, autumnN: 22, autumnM: 36, visitsFrom:"October", visitsTo:"April"},
  {name:"Cairo", springN:18, springM: 30, summerN:23, summerM:35, winterN: 10, winterM: 20, autumnN: 20, autumnM: 30, visitsFrom:"December", visitsTo:"January"},
  {name:"Luxor", springN:17, springM: 35, summerN:25, summerM:41, winterN: 8, winterM: 24, autumnN: 13, autumnM: 29, visitsFrom:"October", visitsTo:"April"},
  {name:"Sharn Elsheikh", springN:21, springM: 30, summerN:29, summerM:38, winterN: 16, winterM: 24, autumnN: 20, autumnM: 28, visitsFrom:"October", visitsTo:"November"},

]


