import {
    Text,
    View,
    StyleSheet,
    Image, Dimensions,
} from 'react-native';
import {userTypeForTournament} from "../types";
import IconCrown from "../images/icons/tournament/IconCrown";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface userItem {
    el: userTypeForTournament
}

const UserItem = (props: userItem) => {
    const [userId, setUserId] = useState<number>(0);

    useEffect(() => {
        const getUserId = async () => {
            try {
                const response = await AsyncStorage.getItem('userId');

                if (response) {
                    // Преобразуем строку в число
                    const parsedUserId = parseInt(response, 10);

                    // Проверяем, что это валидное число
                    if (!isNaN(parsedUserId)) {
                        setUserId(parsedUserId);
                    }
                }
            } catch (error) {
                console.error('Failed to fetch userId from AsyncStorage', error);
            }
        };

        getUserId(); // Не забываем вызвать функцию
    }, []);
    return (
        <View style={[styles.container, {borderColor: props.el.needToPick ? '#fae170' : '#8aff73'}]}>
            <Image
                source={{uri: props.el.avatar}}
                style={styles.avatar}
            />
            <Text style={styles.username}>{props.el.login}</Text>
            {props.el.isLobbyHost ? <IconCrown style={{position: 'absolute', right: 10}}/> : null}
        </View>
    )
}

export default UserItem;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: Dimensions.get('window').width - 38,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 50,
        borderLeftWidth: 5,
        padding: 10,
        paddingHorizontal: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
        height: 80,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 180,
        borderWidth: 1,
        marginRight: 10,

    },
    username: {
        fontFamily: 'Unbounded-Regular',
        marginRight: 10,
        fontSize: 20,
    },
    ThisIsMe: {
        fontSize: 80,
        fontWeight: 200,
    }
})