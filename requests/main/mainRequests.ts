import {fetchData} from "./fetchDataForDB";
import {Alert} from "react-native";

export const getLeagues = async () =>{
    try{
        const response = await fetchData('/api/getLeagues')
        return response
    }
    catch (error){
        Alert.alert('Ошибка получения лиг');
    }
}