import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CarService {
  constructor(private db: AngularFireDatabase) {}

  create(car) {
    return this.db.list("/cars").push(car);
  }

  getAllCars() {
    return this.db
      .list("/cars")
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => ({ key: a.key, ...a.payload.val() })))
      );
  }

  get(carId) {
    return this.db.object("/cars/" + carId).valueChanges();
  }

  update(carId, car) {
    return this.db.object("/cars/" + carId).update(car);
  }
}
