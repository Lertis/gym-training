import { createReducer, on, Action } from "@ngrx/store";
import { cloneDeep } from "lodash";
import { addRequestLog } from "../requests-log-state/actions";
import { INITIAL_REQUEST_LOG_STATE, IRequestLog, IRequestsLoQueueState } from "../requests-log-state/requests.log.state";

const featureReducer = createReducer(
	INITIAL_REQUEST_LOG_STATE,
	on(addRequestLog, (state, { requestTime, requestType, url }) => {
		const cloneOfQueue: IRequestLog[] = cloneDeep(state.requestsQueue);
		cloneOfQueue.push({ requestTime, requestType, url } as IRequestLog);
		return { ...state, requestsQueue: cloneOfQueue };
	})
);

export function requestLogReducer(state: IRequestsLoQueueState | undefined, action: Action): IRequestsLoQueueState {
	return featureReducer(state, action);
}
