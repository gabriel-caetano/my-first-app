import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  display: boolean = false;
  textMessage: string = "";
  clickCounter: number = 0;
  paragraphs = [];
  textMessageIsEmpty() {
    return this.textMessage === "";
  }
  resetServerName() {
    let paragraph = { index: this.clickCounter, text: this.textMessage };
    this.paragraphs.push(paragraph);
    this.clickCounter++;
    this.display = !this.display;
    this.textMessage = "";
  }
  getColor() {
    if (this.textMessage !== "") {
      return "green";
    } else {
      return "red";
    }
  }
  getBackgroundColor(paragraph) {
    if (paragraph.index >= 5) {
      return "blue";
    } else {
      return "white";
    }
  }
}
