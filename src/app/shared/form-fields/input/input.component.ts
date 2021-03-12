import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ControlValueAccessor, ValidationErrors, Validator } from "@angular/forms";
import { FormFieldsValidator } from "../form.validator";
import { ngValueAccessorProvide, ngValueValidatorsProvide } from "../../utils/forms";
import { BaseFieldDirective } from "../base.field";

export enum InputTypes {
	Text = "text",
	Number = "number"
}

@Component({
	selector: "gym-input",
	templateUrl: "./input.component.html",
	styleUrls: ["./input.component.scss"],
	providers: [
		ngValueAccessorProvide(InputComponent),
		ngValueValidatorsProvide(InputComponent)
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent
	extends BaseFieldDirective
	implements OnDestroy, OnInit, ControlValueAccessor, Validator {
	readonly availableFieldTypes = InputTypes;

	@Input() placeholder: string;
	@Input() maxLength = 10;
	@Input() filedType: InputTypes = InputTypes.Text;
	@Input() readOnlyMode = false;
	@Input() showErrorIfNeeded = true;
	@Input() errorMessage = "Field is required";

	constructor() {
		super();
	}

	ngOnInit(): void {
		super.ngOnInit();
		if (this.showErrorIfNeeded) {
			this.setValidators();
		}
	}

	private setValidators(): void {
		if (this.filedType === InputTypes.Text) {
			this.valueControl.setValidators([FormFieldsValidator.inputTextFieldValidation()]);
		}
		if (this.filedType === InputTypes.Number) {
			this.valueControl.setValidators([FormFieldsValidator.inputNumberFieldValidation()]);
		}
	}

	readonly validate = (): ValidationErrors | null => this.valueControl.invalid ? { valid: false } : null;
}
