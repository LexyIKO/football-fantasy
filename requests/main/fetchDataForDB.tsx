import axios from "axios";

const API_URL = 'http://127.0.0.1:8000';

export const fetchData = async (address:string, body: object | undefined = undefined) => {
    try {
        // const token = await AsyncStorage.getItem('token');
        // if (!token) {
        //
        //     return Alert.alert("Пользователь не авторизован");
        // }

        const response = await axios.get(`${API_URL}${address}`, body);

        return response.data;
    } catch (error) {
        console.error('Failed to fetch data', error);
        throw error;
    }
};


export const setBdInfo = async () => {
    try{
        const response1 = await fetchData('/api/fetchLeagues')
        const response2 = await fetchData('/api/fetchTeams')
        const response3 = await fetchData('/api/fetchPlayers')

        console.log(response1 + " - leagues")
        console.log(response2 + " - teams")
        console.log(response3 + " - players")
    }
    catch (error){
        console.error('Failed to fetch data', error);
        throw error;
    }
}