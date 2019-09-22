import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignUpComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
