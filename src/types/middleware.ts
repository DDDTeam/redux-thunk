import type { Action } from 'ddd-redux/dist/types/actions';
import type { MiddlewareAPI } from 'ddd-redux/dist/types/middleware';
import type { ThunkAction } from './action';

export type ThunkMiddleware = (
	api: MiddlewareAPI,
) => (next: (action: Action) => any) => (action: Action | ThunkAction) => any;
