import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card-lateral",
  templateUrl: "./card-lateral.component.html",
  styleUrls: ["./card-lateral.component.scss"],
})
export class CardLateralComponent {
  @Input() title: string;
  @Input() image: string;
  @Input() callToAction: string;
  @Input() heightImage: string;
}
