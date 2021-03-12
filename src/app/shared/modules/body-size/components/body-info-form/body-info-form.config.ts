import { FormControl, FormGroup } from "@angular/forms";

export interface IBodySizeValues {
	leftArmBizeps: number;
	leftLegThigh: number;
	leftLegCalf: number;
	rightArmBizeps: number;
	rightLegThigh: number;
	rightLegCalf:number;
	chest: number;
	waist: number;
	date: string;
}

export const DEFAULT_BODY_FORM = new FormGroup({
	leftArmBizeps: new FormControl(0),
	leftLegThigh: new FormControl(0),
	leftLegCalf: new FormControl(0),
	rightArmBizeps: new FormControl(0),
	rightLegThigh: new FormControl(0),
	rightLegCalf: new FormControl(0),
	chest: new FormControl(0),
	waist: new FormControl(0),
	date: new FormControl("")
});
