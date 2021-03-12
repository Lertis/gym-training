import { AbstractControl, ValidatorFn } from "@angular/forms";

export class FormFieldsValidator {

	static inputNumberFieldValidation(): ValidatorFn {
		return (control: AbstractControl): { valid: boolean } | null => {
			const fieldValue: number = control.value;
			const valid = [!!fieldValue && fieldValue !== 0];
			return valid.every((flag: boolean) => flag) ? null : { valid: false };
		};
	}

	static inputTextFieldValidation(): ValidatorFn {
		return (control: AbstractControl): { valid: boolean } | null => {
			const fieldValue: string = control.value;
			const valid = [!!fieldValue && fieldValue.trim().length !== 0];
			return valid.every((flag: boolean) => flag) ? null : { valid: false };
		};
	}

	static ddlFieldValidation(): ValidatorFn {
		return (control: AbstractControl): { valid: boolean } | null => {
			const ddlFieldValue: number = control.value;
			const valid = ddlFieldValue !== 0 && !!ddlFieldValue;
			return valid ? null : { valid: false };
		};
	}
}
