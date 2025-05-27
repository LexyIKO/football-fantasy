import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const API_URL = 'http://127.0.0.1:8000';

export const loginUser = async (login: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/api/login`, { login, password })
            .then(res => {
                return res
            }).catch(error => {
                Alert.alert('Ошибка авторизации')
                throw error;
            })
        const token = await response.data.token;
        const userId = await response.data.user.id;

        // Сохранение токена в AsyncStorage
        if (token) {
            // Сохраняем токен в AsyncStorage
            AsyncStorage.multiSet([['token', token],['userId', userId.toString()]])
                .then(() => {

                })
                .catch((error) => {
                    Alert.alert('Ошибка входа', error.message);
                });
        } else {
            Alert.alert('Попытка сохранить null или undefined в AsyncStorage');
        }

        return response.data;
    } catch (error) {

        throw error;
    }
};

export const logout = async () => {
    try {
        // Удаление токена из AsyncStorage
        await AsyncStorage.multiRemove(['token', 'userId']);

        // const response = await axios.post(`${API_URL}/api/logout`, { login, password })
    } catch (error) {
        Alert.alert('Logout failed');
        throw error;
    }

};

export const registerUser = async (login:string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/api/register`, {
            login: login,
            password: password
        });
        const token = await response.data.token;
        const userId = await response.data.userId;

        if (token) {
            // Сохраняем токен в AsyncStorage
            AsyncStorage.multiSet([['token', token],['userId', userId.toString()]])
                .then(() => {

                })
                .catch((error) => {
                    Alert.alert('Ошибка регистрации: ', error.message);
                });
        } else {
            Alert.alert('Ошибка регистрации, попробуйте еще раз');
        }

        return response.data;
    } catch (error) {
        Alert.alert('Ошибка регистрации, попробуйте позже');
        throw error;
    }
};

export const checkToken = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        return token;
    } catch (error) {
        Alert.alert('Ошибка сети, попробуйте позже');
        throw error;
    }
};



// let запрос_пример = await fetchData('/task/2')

// export const fetchData = async (address, body = undefined) => {
//     try {
//         const token = await AsyncStorage.getItem('token');
//         if (!token) {
//
//             return Alert.alert("Пользователь не авторизован");
//         }
//
//         const response = await axios.get(`${API_URL}${address}`, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//             body
//         });
//
//         return response.data;
//     } catch (error) {
//         console.error('Failed to fetch data', error);
//         throw error;
//     }
// };