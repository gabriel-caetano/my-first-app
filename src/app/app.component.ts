import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  buttonClicked: boolean = false;
  accountCreated: boolean = false;
  userName: string = "";
  usernameIsEmpty() {
    return this.userName === "";
  }
  resetUsername() {
    this.buttonClicked = true;
    this.accountCreated = true;
    this.userName = "";
  }
}
