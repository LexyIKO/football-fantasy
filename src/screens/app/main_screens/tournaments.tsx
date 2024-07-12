import {useEffect, useRef, useState} from 'react';
import {
    Text,
    TextInput,
    Pressable,
    View,
    StyleSheet,
    Dimensions,
    Animated,
    Keyboard,
    FlatList
} from 'react-native';

import Navbar from "../../../components/navbar";

import SvgIconAdd from "../../../images/icons/tournament/IconAdd";
import SvgIconFind from "../../../images/icons/tournament/IconFind";
import {useNavigation} from "@react-navigation/native";
import TournamentCard from "../../../components/tournamentCard";

interface tournamentList {
    trId: number,
    key: string,
    trName: string,
    trMaxPlayers: number,
    trPlayersCount: number,
    startDate: string,
    endDate: string,
    balance: number,
    status: string,
}

const Tournaments = () => {
    const navigation = useNavigation();
    const [buttonAddValue, setButtonAddValue] = useState<string>('Создать');
    const [isFindFocused, setIsFindFocused] = useState<boolean>(false);
    const [tournamentList, setTournamentList] = useState<tournamentList[]>([
        {trId: 1, key: '1', trName: 'Лига чемпионов', trMaxPlayers: 4, trPlayersCount: 4, startDate: '20.07', endDate: '25.08', balance: 400, status: 'ended'},
        {trId: 2, key: '2', trName: 'Володя сюда', trMaxPlayers: 7, trPlayersCount: 6, startDate: '14.07', endDate: '20.07', balance: 500, status: 'wait'},
        {trId: 3, key: '3', trName: 'Begit, press ka4at', trMaxPlayers: 5, trPlayersCount: 5, startDate: '25.07', endDate: '02.08', balance: 700, status: 'ongoing'},
        {trId: 4, key: '4', trName: 'Мама я в телевизоре', trMaxPlayers: 2, trPlayersCount: 1, startDate: '06.08', endDate: '14.09', balance: 250, status: 'wait'},
        {trId: 5, key: '5', trName: '2120 межгалактичесий', trMaxPlayers: 3, trPlayersCount: 3, startDate: '20.04', endDate: '20.05' , balance: 320, status: 'ended'},

    ])

    const createButtonWidth = useRef(new Animated.Value(
        ((Dimensions.get("window").width - 18 - 5)/2)
    )).current
    const findFieldWidth = useRef(new Animated.Value(
        ((Dimensions.get("window").width - 18 - 5)/2)
    )).current

    const plusWidth = () => {
        Animated.timing(findFieldWidth, {
            toValue: Dimensions.get("window").width - 18 - 40 - 10,
            duration: 100,
            useNativeDriver: false
        }).start();
        Animated.timing(createButtonWidth, {
            toValue: 40,
            duration: 100,
            useNativeDriver: false
        }).start();
    }

    const minusWidth = () => {
        Animated.timing(createButtonWidth, {
            toValue: (Dimensions.get("window").width - 18 - 5)/2,
            duration: 100,
            useNativeDriver: false
        }).start();
        Animated.timing(findFieldWidth, {
            toValue: (Dimensions.get("window").width - 18 - 5)/2,
            duration: 100,
            useNativeDriver: false
        }).start();
    }

    useEffect(() => {
        if(isFindFocused){
            setButtonAddValue('');
            plusWidth()

        }else{
            setButtonAddValue('Создать');
            minusWidth()
            Keyboard.dismiss()
        }
    }, [isFindFocused]);

    return (
        <Pressable style={styles.Container} onPress={Keyboard.dismiss}>
            <View style={styles.HeaderBox}>
                <Animated.View style={[styles.FindField, { width: findFieldWidth }]}>

                        <SvgIconFind />
                    <Pressable     onPress={()=>{setIsFindFocused(true)}}>
                        <TextInput
                            style={[styles.Text,
                                { width:
                                        isFindFocused
                                            ? Dimensions.get("window").width - 18 - 40 - 10 - 60 - 26
                                            : (Dimensions.get("window").width - 18 - 5)/2 - 60 - 26
                                }, { "outlineStyle": 'none'}]}
                            placeholder='Поиск'

                            onBlur={()=>{setIsFindFocused(false)}}

                        />
                    </Pressable>
                </Animated.View>

                <Animated.View style={[styles.CreateButtonBG, { width: createButtonWidth }]}>
                    <Pressable
                        style={
                        [
                            styles.CreateButton,
                            isFindFocused ? styles.CreateButtonFocus : styles.CreateButtonUnfocus
                        ]}
                        onPress={()=> navigation.navigate('CreateTournament' as never)}
                    >
                        <SvgIconAdd />
                        <Text style={[styles.Text]}>{buttonAddValue}</Text>
                    </Pressable>
                </Animated.View>


            </View>
            <Text style={styles.Title}>Турниры</Text>

            <View style={styles.FlatListSize}>
                <FlatList
                    data={tournamentList}
                    renderItem = {({item}) => (<TournamentCard el={item} />)}
                    style = {styles.Scroller}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <Navbar currentPageName={'Tournament'} />
        </Pressable>
    );
};

export default Tournaments;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    HeaderBox: {
        width: Dimensions.get('window').width - 18,
        marginTop: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    FindField: {
        display: 'flex',
        flexDirection: 'row',
        height: 40,
        borderRadius: 40,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    CreateButtonBG: {
        display: 'flex',
        height: 40,
        borderRadius: 40,
        backgroundColor: 'rgba(178, 253, 0, 1)',
        alignItems: 'center',
        justifyContent: "center"
    },
    CreateButton:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 40,
        alignItems: 'center',
    },
    CreateButtonFocus: {

        borderRadius: 100,
        justifyContent: 'center'
    },
    CreateButtonUnfocus: {
        paddingHorizontal: 15,
        justifyContent: 'space-around'
    },
    Text: {
        fontFamily: 'Unbounded-Regular',
        fontSize: 18,
    },
    Title: {
        fontFamily: 'Unbounded-Bold',
        fontSize: 24,
        display: 'flex',
        width: Dimensions.get('window').width - 18,
        marginTop: 25,
    },
    Scroller: {
      gap: 20
    },
    FlatListSize: {
        height: Dimensions.get('window').height - 90 - 25 - 30 - 60 -50,
        paddingVertical: 20
    }

});
