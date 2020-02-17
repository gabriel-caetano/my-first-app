import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  accountCreated: boolean = false;
  userName: string = "";
  usernameIsEmpty() {
    return this.userName === "";
  }
  resetUsername() {
    this.accountCreated = true;
    this.userName = "";
  }
}
