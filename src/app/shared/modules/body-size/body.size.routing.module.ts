import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BodySizeContainerComponent } from "../body-size/components/body-size/body-size.component";


const routes: Routes = [
	{
		path: "",
		component: BodySizeContainerComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BodySizeRoutingModule { }
