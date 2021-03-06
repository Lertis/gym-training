import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ApiService {
	constructor(private readonly http: HttpClient) {}

	getRequest<T>(url: string): Observable<T> {
		return this.http.get<T>(url);
	}

	postRequest<T, R>(url: string, params: R): Observable<T> {
		return this.http.post<T>(url, params);
	}

	putRequest<T, R>(url: string, params: R): Observable<T> {
		return this.http.put<T>(url, params);
	}

	deleteRequest<T, R>(url: string, params: R): Observable<T> {
		return this.http.delete<T>(url, params);
	}
}
