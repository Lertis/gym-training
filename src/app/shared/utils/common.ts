import { isEqual } from "lodash";

export function isNullOrUndefined(value: unknown): boolean {
	return value === null || value === undefined;
}

export function getCommonTooltip(valid: boolean, changed: boolean) {
	if (isEqual([true, false], [valid, changed])) {
		return "No changes made";
	} else {
		return isEqual([true, true], [valid, changed]) ? "" : "Some values are missing or not valid";
	}
}
