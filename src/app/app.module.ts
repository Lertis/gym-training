import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ApiService } from "../app/shared/services/api.service";
import { RequestLogService } from "../app/shared/services/request.log.service";
import { RequestLogInterceptor } from "../app/shared/interceptors/requests.log.interceptor";

import { reducers } from "../app/state";

import { environment } from "../environments/environment";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production
		}),
	],
	providers: [
		ApiService,
		RequestLogService,
		{
      provide: HTTP_INTERCEPTORS,
      useClass: RequestLogInterceptor,
      multi: true
    }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
