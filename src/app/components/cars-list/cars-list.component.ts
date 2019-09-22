import { Component, OnInit, ViewChild } from "@angular/core";
import { CarService } from "src/app/services/car.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "cars-list",
  templateUrl: "./cars-list.component.html",
  styleUrls: ["./cars-list.component.css"]
})
export class CarsListComponent implements OnInit {
  cars$;
  dataSource = new MatTableDataSource();
  displayedColumns = [];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  /* @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator; */

  constructor(private carService: CarService) {
    this.cars$ = this.carService.getAllCars();
    this.cars$.subscribe(x => {
      this.displayedColumns = ["marka", "model", "cena", "status"];
      this.dataSource = new MatTableDataSource(x);
      this.dataSource.sort = this.sort;
      /* this.dataSource.paginator = this.paginator; */
    });
  }

  ngOnInit() {}
}
