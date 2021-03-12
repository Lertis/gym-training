import { forwardRef, InjectionToken, Type } from "@angular/core";
import { ControlValueAccessor, FormControl, FormGroupDirective, NgForm, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export function ngValueAccessorProvide<T>(component: Type<T>): {
	provide: InjectionToken<readonly ControlValueAccessor[]>;
	useExisting: Type<any>;
	multi: boolean;
} {
	return {
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef((): Type<T> => component),
		multi: true
	};
}

/* istanbul ignore next */
export function ngValueValidatorsProvide<T>(component: Type<T>): {
	provide: InjectionToken<(() => void | Validator)[]>;
	useExisting: Type<T>;
	multi: boolean;
} {
	return {
		provide: NG_VALIDATORS,
		useExisting: component,
		multi: true
	};
}

export class CustomFormControlMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl, form: FormGroupDirective | NgForm | null): boolean {
		return control.touched;
	}
}
