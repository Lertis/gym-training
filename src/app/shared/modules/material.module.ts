import { NgModule } from "@angular/core";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

const MATERIAL_MODULES = [
	MatNativeDateModule,
	MatFormFieldModule,
	MatDatepickerModule,
	MatInputModule,
	MatIconModule,
	MatButtonModule
];

@NgModule({
	imports: [...MATERIAL_MODULES],
	exports: [...MATERIAL_MODULES]
})
export class MaterialModule { }
