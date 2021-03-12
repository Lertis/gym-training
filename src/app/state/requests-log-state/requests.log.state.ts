import { RequestTypes } from "../../shared/configs/enums";

export interface IRequestLog {
	requestType: RequestTypes;
	requestTime: string;
	url: string;
}

export interface IRequestsLoQueueState {
	requestsQueue: IRequestLog[];
}

export const INITIAL_REQUEST_LOG_STATE: IRequestsLoQueueState = {
	requestsQueue: []
};
