import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const API_URL = 'http://127.0.0.1:8000';

export const fetchData = async (address: string, params: object = {}) => {
    try {
        const token = await AsyncStorage.getItem('token');
        const userId = await AsyncStorage.getItem('userId');

        if (!token || !userId) {
            Alert.alert("Ошибка авторизации", "Пользователь не авторизован");
            throw new Error("User not authorized");
        }

        const response = await axios.get(`${API_URL}${address}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'User-Id': userId
            },
            params: params
        });

        return response.data;
    } catch (error) {
        console.error('Failed to fetch data', error);
        Alert.alert("Ошибка", "Не удалось получить данные");
        throw error;
    }
};

export const postData = async (
    address: string,
    body: object = {},
    params: object = {}
) => {
    try {
        const token = await AsyncStorage.getItem('token');
        const userId = await AsyncStorage.getItem('userId');

        if (!token || !userId) {
            Alert.alert("Ошибка авторизации", "Пользователь не авторизован");
            throw new Error("User not authorized");
        }

        const response = await axios.post(
            `${API_URL}${address}`,
            body,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'User-Id': userId,
                },
                params: params, // если нужны query-параметры (например, `/api/data?param=value`)
            }
        );

        return response.data;
    } catch (error) {
        console.error('POST request failed:', error);
        Alert.alert("Ошибка", "Не удалось отправить данные");
        throw error;
    }
};