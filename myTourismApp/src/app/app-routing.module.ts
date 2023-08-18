import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './cities/cities.component';
import { TechIdeasComponent } from './tech-ideas/tech-ideas.component';

const routes: Routes = [
  {path: 'weather', component:WeatherComponent},
  //{path:'weather-details/', component:WeatherDetailsComponent},
  //{path:"weather/:name/:springN/:springM/:summerN/:summerM/:winterN/:autumnM/:visitForm/:visitTo",component:WeatherDetailsComponent},
  {path: 'weather/:name', component:WeatherDetailsComponent},
  {path:'home', component:HomeComponent},
  {path:'cities', component:CitiesComponent},
  {path:'techIdeas', component:TechIdeasComponent},
  {path: '', redirectTo: 'weather', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
