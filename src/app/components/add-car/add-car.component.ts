import { Component, OnInit } from "@angular/core";
import { StatusService } from "src/app/services/status.service";
import { CarService } from "src/app/services/car.service";
import { Router, ActivatedRoute } from "@angular/router";
import { take } from "rxjs/operators";

@Component({
  selector: "add-car",
  templateUrl: "./add-car.component.html",
  styleUrls: ["./add-car.component.css"]
})
export class AddCarComponent implements OnInit {
  status$;
  statusSelected: string;
  car = {};
  id;
  constructor(
    statusService: StatusService,
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.status$ = statusService.getStatus();

    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id)
      this.carService
        .get(this.id)
        .pipe(take(1))
        .subscribe(c => (this.car = c));
  }

  save(car) {
    if (this.id) {
      this.carService.update(this.id, car);
    } else {
      this.carService.create(car);
    }

    this.router.navigate(["/car-edit/"]);
  }

  ngOnInit() {
    this.statusSelected = "Gotowy do sprzedaży";
  }
}
