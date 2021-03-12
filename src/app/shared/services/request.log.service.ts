import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../state";
import { addRequestLog } from "../../state/requests-log-state/actions";
import { IRequestLog } from "../../state/requests-log-state/requests.log.state";

@Injectable()
export class RequestLogService {
	constructor(private readonly store: Store<AppState>) { }

	addRequestIntoLog(requestInfo: IRequestLog): void {
		this.store.dispatch(addRequestLog({ ...requestInfo }))
	}

}
