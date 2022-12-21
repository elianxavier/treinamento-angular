import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card-principal",
  templateUrl: "./card-principal.component.html",
  styleUrls: ["./card-principal.component.scss"],
})
export class CardPrincipalComponent {
  @Input() title: string;
  @Input() image: string;
  @Input() tag: string;
  @Input() resume: string;
}
