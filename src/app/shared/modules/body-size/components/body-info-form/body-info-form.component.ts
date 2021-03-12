import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DEFAULT_BODY_FORM } from "./body-info-form.config";
import { cloneDeep } from "lodash";

@Component({
	selector: "gym-body-info-form",
	templateUrl: "./body-info-form.component.html",
	styleUrls: ["./body-info-form.component.scss"]
})
export class BodyInfoFormComponent {

	bodySizeFom: FormGroup = cloneDeep(DEFAULT_BODY_FORM);

}
