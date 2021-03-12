import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BodySizeContainerComponent } from "./components/body-size/body-size.component";
import { BodySizeRoutingModule } from "./body.size.routing.module";
import { BodyInfoFormComponent } from "./components/body-info-form/body-info-form.component";
import { MaterialModule } from "../material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormFieldsModule } from "../../form-fields/form-fields.module";

@NgModule({
	declarations: [
		BodySizeContainerComponent,
		BodyInfoFormComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		BodySizeRoutingModule,
		MaterialModule,
		FormFieldsModule
	]
})
export class BodySizeModule { }
