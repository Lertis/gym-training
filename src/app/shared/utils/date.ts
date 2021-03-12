import { DEFAULT_DATE_FORMAT, DEFAULT_DATE_TIME_FORMAT } from "../configs/date";
import moment from "moment";

export function transformToDefaultDateFormat(d: string | Date | moment.Moment): string {
	return moment(d).format(DEFAULT_DATE_FORMAT);
}

export function transformDateTimeFormat(d: string | Date | moment.Moment): string {
	return moment(d).format(DEFAULT_DATE_TIME_FORMAT);
}
