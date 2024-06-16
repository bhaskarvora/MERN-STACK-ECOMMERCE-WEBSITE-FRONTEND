import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { MessageResponse } from "../types/api-types"
import { SerializedError } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import toast from "react-hot-toast";
import moment from "moment";

type ResType = {
    data: MessageResponse;

} | {
    error : FetchBaseQueryError | SerializedError
}



export const responseToast = (res:ResType, navigate:NavigateFunction | null, url:string) =>{

    if("data" in res)
        {
            toast.success(res.data.message);
            if(navigate) navigate(url);
        }

        else{
            const error = res.error as FetchBaseQueryError;
            const messageResponse = error.data as MessageResponse;
            toast.error(messageResponse.message);
        }

};

export const getLastMonths =() =>{
    const currentDate = moment();

    currentDate.date(1);

    const last6Months:string[] = [];
    const last12Months:string[] =[];


    for (let i = 0; i < 6; i++) {
        const monthDate  = currentDate.clone().subtract(i,"months");
        const monthName = monthDate.format("MMMM");
        last6Months.unshift(monthName);
        
    }

    // How the loop works so by  so i =0 current month is june so it will be at 0 index june 
    // then if i =1 then unshift method is called it makes the june as index and may as index 0 and then the further loop runs

    for (let i = 0; i < 12; i++) {
        const monthDate  = currentDate.clone().subtract(i,"months");
        const monthName = monthDate.format("MMMM");
        last12Months.unshift(monthName);
        
    }

    return{
        last12Months,last6Months,
    };
};