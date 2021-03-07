import * as authentication from './auth-header';
import * as fake from './fake-backend';
import * as st from './store';


export const { authHeader } = authentication;
export const { configureFakeBackend } = fake;

export const { store } = st;
