import { Component, OnInit } from "@angular/core";
import { CarService } from "src/app/services/car.service";

@Component({
  selector: "car-edit",
  templateUrl: "./car-edit.component.html",
  styleUrls: ["./car-edit.component.css"]
})
export class CarEditComponent implements OnInit {
  cars$;

  constructor(private carService: CarService) {
    this.cars$ = this.carService.getAllCars();
  }

  ngOnInit() {}
}
