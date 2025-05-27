// import { useEffect, useState } from 'react';
import {Text, SafeAreaView, TextInput, Pressable, View, Image, StyleSheet, FlatList, Dimensions} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import Navbar from "../../../components/navbar";
import {useState} from "react";
import {tournamentProps} from "./tournaments";
import TournamentCard from "../../../components/tournamentCard";


const Home = () => {
    const navigation = useNavigation()

    const [tournamentList, setTournamentList] = useState<tournamentProps[]>([
        {trId: 1, key: '1', trName: 'Лига чемпионов', trMaxPlayers: 4, trPlayersCount: 4, startDate: '20.07', endDate: '25.08', balance: 400, status: 'ended', league: 2, hostId: 1, pickType: 'draft'},
        {trId: 2, key: '2', trName: 'Володя сюда', trMaxPlayers: 7, trPlayersCount: 6, startDate: '14.07', endDate: '20.07', balance: 500, status: 'wait', league: 2, hostId: 1, pickType: 'draft'},
        {trId: 3, key: '3', trName: 'Begit, press ka4at', trMaxPlayers: 5, trPlayersCount: 5, startDate: '25.07', endDate: '02.08', balance: 700, status: 'ongoing', league: 3, hostId: 1, pickType: 'draft'},
        {trId: 4, key: '4', trName: 'Мама я в телевизоре', trMaxPlayers: 2, trPlayersCount: 1, startDate: '06.08', endDate: '14.09', balance: 250, status: 'wait', league: 5, hostId: 1, pickType: 'draft'},
        {trId: 5, key: '5', trName: '2120 межгалактичесий', trMaxPlayers: 3, trPlayersCount: 3, startDate: '20.04', endDate: '20.05' , balance: 320, status: 'ended', league: 2, hostId: 1, pickType: 'draft'},

    ])

    return(

        <SafeAreaView style={styles.Conteiner} >
            <Text style={{fontSize: 48, color: 'red'}}>Главная</Text>

            <View style={styles.FlatListSize}>
                <FlatList
                    data={tournamentList}
                    renderItem = {({item}) => (<TournamentCard el={item}/>)}
                    style = {styles.Scroller}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <Navbar currentPageName={'Home'} />
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    Conteiner: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    FlatListSize: {
        height: Dimensions.get('window').height - 90 - 25 - 30 - 60 -50,
        paddingVertical: 20
    },
    Scroller: {
        gap: 20
    },
})