import { getTelegram } from '@/features/telegram/model';
import baseQueryWithReauth from '@/shared/lib/api/base-query';
import { createApi } from '@reduxjs/toolkit/query/react';

const tg = getTelegram();

export const authenticationApi = createApi({
    reducerPath: 'authenticationApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        login: builder.mutation<void, void>({
            query: () => ({
                url: 'authentication/telegram',
                method: 'POST',
                body: {
                    initData: tg.initData,
                },
            }),
        }),

        me: builder.query<{ id: string; role: string }, void>({
            query: () => 'authentication/me',
        }),
    }),
});

export const { useLoginMutation, useMeQuery } = authenticationApi;
