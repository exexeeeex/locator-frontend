import { authenticationApi } from '@/features/authentication';
import { store } from '@/shared/lib/api/store';

export const bootstrapAuth = () =>
    store.dispatch(authenticationApi.endpoints.me.initiate());
