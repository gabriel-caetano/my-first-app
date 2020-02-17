import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  buttonClicked: boolean = false;
  serverCreated: boolean = false;
  serverName: string = "";
  servers = [];
  serverNameIsEmpty() {
    return this.serverName === "";
  }
  resetServerName() {
    this.servers.push(this.serverName);
    this.buttonClicked = true;
    this.serverCreated = true;
    this.serverName = "";
  }
  getColor() {
    if (this.serverName !== "") {
      return "green";
    } else {
      return "red";
    }
  }
}
