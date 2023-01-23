import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import API_KEYS from '../codes';

const cryptoNewsHeaders = {
    'x-bingApis-sdk': 'true',
    'x-rapidAPI-key': API_KEYS.NEWS_KEY,
    'x-rapidAPI-host': API_KEYS.NEWS_HOST
}

const baseUrl = API_KEYS.NEWS_BASE_URL;

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;