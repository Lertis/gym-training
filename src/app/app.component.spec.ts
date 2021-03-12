import { TestBed, waitForAsync, ComponentFixture } from "@angular/core/testing";
import { AppComponent } from "../app/app.component";

describe("AppComponent", () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent]
		}).overrideTemplate(AppComponent, `<span></span>`);
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should compile", () => {
		expect(component).toBeTruthy();
	});

});
