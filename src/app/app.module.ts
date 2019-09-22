import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { FormsModule } from "@angular/forms";
import { CarService } from "./services/car.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { CarsListComponent } from "./components/cars-list/cars-list.component";
import { AddCarComponent } from "./components/add-car/add-car.component";
import { StatusService } from "./services/status.service";
import { HomeComponent } from "./components/home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DataTableComponent } from "./data-table/data-table.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { CarsSummaryComponent } from "./components/cars-summary/cars-summary.component";
import { AngularFireAuthModule } from "angularfire2/auth";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { WavesModule, TableModule } from "angular-bootstrap-md";
import { CarEditComponent } from "./components/car-edit/car-edit.component";
import { AuthService } from "./services/auth.service";
import { SignInComponent } from "./authentication/signin/signin.component";
import { SignUpComponent } from "./authentication/signup/signup.component";
import { VerifyEmailComponent } from "./authentication/verify-email/verify-email.component";
import { SecureInnerPagesGuard } from "./guard/secure-inner-pages.guard.ts.guard";
import { AuthGuard } from "./guard/auth.guard";
import { AngularFirestoreModule } from "@angular/fire/firestore";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarsListComponent,
    AddCarComponent,
    HomeComponent,
    DataTableComponent,
    CarsSummaryComponent,
    CarEditComponent,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    WavesModule,
    TableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    NgbModule,
    NgxDatatableModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "home",
        component: HomeComponent
      },

      {
        path: "cars-list",
        component: CarsListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "add-car/:id",
        component: AddCarComponent
      },

      {
        path: "add-car",
        component: AddCarComponent
      },
      {
        path: "car-edit",
        component: CarEditComponent
      },
      { path: "", redirectTo: "signin", pathMatch: "full" },
      {
        path: "signin",
        component: SignInComponent,
        canActivate: [SecureInnerPagesGuard]
      },
      {
        path: "register-user",
        component: SignUpComponent,
        canActivate: [SecureInnerPagesGuard]
      },
      {
        path: "verify-email",
        component: VerifyEmailComponent,
        canActivate: [SecureInnerPagesGuard]
      }
    ]),
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AngularFireAuthModule,
    AngularFireModule,
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [StatusService, CarService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
