import { FormState } from '@/App/store/slices/Form';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const formApi = createApi({
  reducerPath: 'formApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.sbercloud.ru/content/v1/bootcamp' }),
  endpoints: (builder) => ({
    postData: builder.mutation<FormState, FormState>({
      query: (body) => ({
        url: '/frontend',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});
