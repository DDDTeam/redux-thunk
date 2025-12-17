import type { Middleware } from 'ddd-redux/dist/types/middleware';
import { createThunkMiddleware } from '@/createThunkMiddleware';

/**
 * Готовый к использованию thunk middleware.
 * @type {Function}
 */
const thunk: Middleware = createThunkMiddleware();

export default thunk;
