import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "cars-summary",
  templateUrl: "./cars-summary.component.html",
  styleUrls: ["./cars-summary.component.css"]
})
export class CarsSummaryComponent implements OnInit {
  @Input("cars") cars: any;
  // readyForSell = cars.filter();
  constructor() {}

  ngOnInit() {}

  filter(datasource, state): any[] {
    if (!datasource) {
      return [];
    }
    // console.log(datasource);
    return [datasource.filter(x => x.status === state).length];
  }

  filterReadyForSell(datasource): any[] {
    return this.filter(datasource, "Gotowy do sprzedaży");
  }

  filterReserved(datasource): any[] {
    return this.filter(datasource, "Zarezerwowany");
  }

  filterSold(datasource): any[] {
    return this.filter(datasource, "Sprzedany");
  }
}
