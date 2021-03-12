import { ActionReducerMap } from "@ngrx/store";
import { requestLogReducer } from "../state/requests-log-state/reducer";
import { INITIAL_REQUEST_LOG_STATE, IRequestsLoQueueState } from "./requests-log-state/requests.log.state";

export interface AppState {
	requestsLog: IRequestsLoQueueState;
}

export const INITIAL_APPLICATION_STATE: AppState = {
	requestsLog: INITIAL_REQUEST_LOG_STATE
};

export const reducers: ActionReducerMap<AppState> = {
	requestsLog: requestLogReducer
};
