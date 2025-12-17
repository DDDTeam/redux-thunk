import type { MiddlewareAPI } from 'ddd-redux/dist/types/middleware';

export type ThunkAction = (
	dispatch: MiddlewareAPI['dispatch'],
	getState: MiddlewareAPI['getState'],
	extraArgument: undefined,
) => any;
