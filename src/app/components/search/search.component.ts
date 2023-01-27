import {Component, OnInit} from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {CityResponse} from "../../models/cityResponse";
import {CityService} from "../../services/city.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  model: NgbDateStruct= { "year": 2023, "month": 1, "day": 14 }

  cities: CityResponse[]=[];
  selectedFromCity: string = '';
  selectedToCity: string = '';
  constructor(private cityService:CityService) {
  }
  ngOnInit(): void {
    this.getAllCities();
  }

  getAllCities(){
    this.cityService.getAllCities().subscribe(params=>{
      this.cities = params;
    })
  }
  selectFromCityHandler (event: any) {
    this.selectedFromCity = event.target.value;
    console.log(this.selectedFromCity)
  }
  selectToCityHandler (event: any) {
    this.selectedToCity = event.target.value;
    console.log(this.selectedToCity)
  }



}
