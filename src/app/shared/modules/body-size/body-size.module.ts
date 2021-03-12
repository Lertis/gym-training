import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BodySizeContainerComponent } from "./components/body-size/body-size.component";
import { BodySizeRoutingModule } from "./body.size.routing.module";
import { BodyInfoFormComponent } from "./components/body-info-form/body-info-form.component";

@NgModule({
	declarations: [
		BodySizeContainerComponent,
		BodyInfoFormComponent
	],
	imports: [
		CommonModule,
		BodySizeRoutingModule
	]
})
export class BodySizeModule { }
