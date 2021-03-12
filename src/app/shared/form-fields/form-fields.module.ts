import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../modules/material.module";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { InputComponent } from "./input/input.component";

const FIELD_COMPONENTS = [InputComponent, DatepickerComponent];

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		MaterialModule
	],
	declarations: [...FIELD_COMPONENTS],
	exports: [...FIELD_COMPONENTS]
})
export class FormFieldsModule { }
