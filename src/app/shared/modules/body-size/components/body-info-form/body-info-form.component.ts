import { Component, OnDestroy } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, takeUntil } from "rxjs/operators";
import { cloneDeep, isEqual } from "lodash";
import { InputTypes } from "../../../../form-fields/input/input.component";
import { DEFAULT_BODY_FORM, IBodySizeValues } from "./body-info-form.config";
import { getCommonTooltip } from "../../../../utils/common";

@Component({
	selector: "gym-body-info-form",
	templateUrl: "./body-info-form.component.html",
	styleUrls: ["./body-info-form.component.scss"]
})
export class BodyInfoFormComponent implements OnDestroy {
	private readonly destroy$ = new Subject<void>();
	private readonly formChanged$ = new Subject<void>();
	readonly fieldsType = InputTypes;

	bodySizeFom: FormGroup = cloneDeep(DEFAULT_BODY_FORM);

	buttonUpdateDisabled = true;
	tooltip = "";

	constructor() {
		this.formChangedSubscriptions();
	}

	update(): void {
		throw new Error("IMPLEMENT");
	}

	cancel(): void {
		throw new Error("IMPLEMENT");
	}

	private formChangedSubscriptions(): void {
		this.bodySizeFom.valueChanges.pipe(
			distinctUntilChanged(),
			takeUntil(this.destroy$)
		).subscribe((form) => {
			console.log(form);
			this.formChanged$.next();
		});

		this.formChanged$.pipe(
			takeUntil(this.destroy$),
			debounceTime(50)
		).subscribe(() => this.formChanged());
	}

	private formChanged(): void {
		const changed = !isEqual(this.getPreviousClone(), this.getCurrentForm());
		this.buttonUpdateDisabled = this.bodySizeFom.invalid;
		this.tooltip = getCommonTooltip(false, changed);
		console.log(	this.tooltip);
	}

	private getPreviousClone() {
		console.log();
	}

	private getCurrentForm() {
		return this.getAllFormFieldsValues();
	}

	private readonly getAllFormFieldsValues = (): IBodySizeValues => this.bodySizeFom.getRawValue();

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}

}
