import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      .five {
        color: yellow;
      }
    `,
  ],
})
export class AppComponent {
  paragraph = true;

  clicks = 0;
  usersClicks = [0];
  onchangeparagraph() {
    this.paragraph = !this.paragraph;
    console.log(this.usersClicks);
    this.usersClicks.push((this.clicks = this.clicks + 1));
  }
  getColor() {
    return this.usersClicks.length > 4 ? "blue" : "white";
    console.log(this.usersClicks.length);
  }
}
