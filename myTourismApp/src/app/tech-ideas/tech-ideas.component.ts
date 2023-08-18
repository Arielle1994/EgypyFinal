import { Component, OnInit } from '@angular/core';
import { GetCityNamesService } from '../get-city-names.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { prohibited } from './customValidations';
//import { cityInfo } from '../cities/cities-info';

@Component({
  selector: 'app-tech-ideas',
  templateUrl: './tech-ideas.component.html',
  styleUrls: ['./tech-ideas.component.css']
})
export class TechIdeasComponent implements OnInit {
  CityNames: string[]=[];
  techIdeaForm :FormGroup;


  constructor (private cityname: GetCityNamesService, private formBuilder:FormBuilder) {
    this.CityNames=this.cityname.getNames();
    console.log(this.CityNames)
    this.techIdeaForm=this.formBuilder.group({

    name: ['', [Validators.required, prohibited(/tourist/), Validators.minLength(2)]],
    age: [''],
    email: ['', [Validators.required, Validators.email]],
    city: ['', [Validators.required]],
    brief: ['', [Validators.required, prohibited(/nothing/), Validators.minLength(100)]],

    });
  }
  // onSubmit(){
  //   if(this.techIdeaForm.valid){
  //     console.log('log this');
  //   }
  //   else console.log('invalid');
  // }
 
  onSubmit(){
  console.log (this.techIdeaForm.value);
  this.techIdeaForm.reset();
  }
  
  get name (){
    return this.techIdeaForm.get('name')!;
  }
  get age (){
    return this.techIdeaForm.get('age')!;
  }
  get email(){
    return this.techIdeaForm.get('email')!;
  }
  get city (){
    return this.techIdeaForm.get('city')!;
  }
  get brief (){
    return this.techIdeaForm.get('brief')!;
  }
  

  ngOnInit(){
    
  }
  

}