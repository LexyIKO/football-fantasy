import {fetchData, postData} from "./fetchDataForDB";
import {Alert} from "react-native";

export const getAvatar = async () => {
    try {
        const response = fetchData('/ йapi/getAvatar');
        return response
    }
    catch (error) {
        Alert.alert(error + 'Не удалось получить аватар');
    }
}

export const postAvatar = async (formData: any) => {
    try {
        const response = postData('/api/postAvatar', formData);
        return response;
    }
    catch (error) {
        Alert.alert(error + 'Не удалось отправить аватар');
    }
}

export const getUserData = async () => {
    try {
        const response = fetchData('/api/getUserData');
        return response;
    }
    catch (error) {
        Alert.alert(error + 'Не удалось отправить аватар');
    }
}
