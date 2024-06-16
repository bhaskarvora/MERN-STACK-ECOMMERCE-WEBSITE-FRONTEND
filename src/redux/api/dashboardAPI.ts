import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BarResponse, LineResponse, PieResponse, StatsResponse } from "../../types/api-types";




export const dashboardAPI = createApi({
    reducerPath:"dashboardAPI",
    baseQuery:fetchBaseQuery({baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/dashboard/`,}),


    endpoints: (builder) => ({
        stats:builder.query<StatsResponse,string>({
            query:(id) => `stats?id=${id}`,
            keepUnusedDataFor:0,

        }),

        
            // What does the keepUnusedDataFor : 0 Because of this there is no caching 
            // Why we are doing beacuse if we change in product it will not instantly reflect in dashboard
            // We can invalidate using tags but still for that we have to make just one endpoints it will be also troublesome
            // Definitely it will affect the performance but it is used for admin so there is no such big issue

        pie:builder.query<PieResponse,string>({
            query:(id) => `pie?id=${id}`,
            keepUnusedDataFor:0
        }),
        bar:builder.query<BarResponse,string>({
            query:(id) => `bar?id=${id}`,
            keepUnusedDataFor:0
        }),
        line:builder.query<LineResponse,string>({
            query:(id) => `line?id=${id}`,
            keepUnusedDataFor:0,
        }),
    }
        

    ),
})


export const {useBarQuery,useStatsQuery,useLineQuery,usePieQuery,} = dashboardAPI;

