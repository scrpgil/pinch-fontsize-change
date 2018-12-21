import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

const MAX_SCALE = 40;
const MIN_SCALE = 2;
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  fontSize: number = 12;
  scale: number = 12;
  alreadyScaled: number = 12;

  constructor(public navCtrl: NavController) {}

  public onPinchEnd(e) {
    this.alreadyScaled = this.scale * this.alreadyScaled;
  }

  public onPinchMove(e) {
    this.scale = e.scale;
    let totalScaled = this.alreadyScaled * e.scale;
    if (totalScaled >= MAX_SCALE) {
      this.scale = MAX_SCALE / this.alreadyScaled;
      totalScaled = MAX_SCALE;
    } else if (totalScaled <= MIN_SCALE) {
      this.scale = MIN_SCALE / this.alreadyScaled;
      totalScaled = MIN_SCALE;
    }

    let fontSize = Math.round(totalScaled * 10) / 10;
    this.fontSize = fontSize;
  }
}
