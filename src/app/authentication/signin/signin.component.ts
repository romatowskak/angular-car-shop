import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SignInComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
