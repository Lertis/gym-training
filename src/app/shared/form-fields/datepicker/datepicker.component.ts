import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ControlValueAccessor, ValidationErrors, Validator } from "@angular/forms";
import { ngValueAccessorProvide, ngValueValidatorsProvide } from "../../utils/forms";
import { BaseFieldDirective } from "../base.field";

@Component({
	selector: "gym-datepicker",
	templateUrl: "./datepicker.component.html",
	styleUrls: ["./datepicker.component.scss"],
	providers: [
		ngValueAccessorProvide(DatepickerComponent),
		ngValueValidatorsProvide(DatepickerComponent)
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent
	extends BaseFieldDirective
	implements OnDestroy, OnInit, ControlValueAccessor, Validator {

	@Input() placeholder = "Select a date";

	constructor() {
		super();
	}

	readonly validate = (): ValidationErrors | null => this.valueControl.invalid ? { valid: false } : null;

}
