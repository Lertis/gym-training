import { createAction, props } from "@ngrx/store";
import { IRequestLog } from "../requests-log-state/requests.log.state";

export enum RequstsLogAction {
	RequestLog = "[REQUEST LOG]"
}

export const addRequestLog = createAction(RequstsLogAction.RequestLog, props<IRequestLog>());
