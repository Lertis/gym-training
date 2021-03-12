import { Component } from "@angular/core";

@Component({
	selector: "gym-body-size",
	templateUrl: "./body-size.component.html",
	styleUrls: ["./body-size.component.scss"]
})
export class BodySizeContainerComponent {

	blocks = Array.from({ length: 15 }, (_, i) => i);

}
