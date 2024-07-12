import {API_URL} from "../auth/authRequets";

import {fetchData} from "./fetchDataForDB";

export const getLeagues = async () =>{
    try{
        const response = await fetchData('/api/getLeagues')
        return response
    }
    catch (error){
        console.log(error + " Ошибка получения лиг")
    }
}