import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RequestLogService } from "../services/request.log.service";
import { transformDateTimeFormat } from "../../shared/utils/date";
import { RequestTypes } from "../configs/enums";

@Injectable()
export class RequestLogInterceptor implements HttpInterceptor {

	private static readonly requestsMap = new Map<string, RequestTypes>()
		.set("GET", RequestTypes.GET)
		.set("PUT", RequestTypes.PUT)
		.set("POST", RequestTypes.POST)
		.set("DELETE", RequestTypes.DELETE)

	constructor(private readonly rlService: RequestLogService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		this.rlService.addRequestIntoLog({
			requestTime: transformDateTimeFormat(new Date().toString()),
			requestType: RequestLogInterceptor.requestsMap.get(req.method),
			url: req.url
		});
		return next.handle(req);
	}
}
