import {useEffect, useState} from "react";
import {Dimensions, FlatList, Modal, StyleSheet, View} from "react-native";
import LeagueListItem from "./leagueListItem";
import leagueListItem from "./leagueListItem";

import {getLeagues} from "../../../requests/main/mainRequests";

interface leagueList {
    id: number,
    name: string,
    start_datetime: string,
    end_datetime: string,
    // maxPlayers: number,
    // minBalance: number,
}

interface modalProps {
    isModalVisible: boolean
    closeModal: (league: leagueList) => void
}


const leagueModal = (props: modalProps) => {
    const [leagueList, setLeagueList] = useState<leagueList[]>([
        // {leagueId: 1, leagueName: 'Лига чемпионов', startDate: '20.07', endDate: '25.08', maxPlayers: 4, minBalance: 200},
        // {leagueId: 2, leagueName: 'Володя сюда', startDate: '14.07', endDate: '20.07', maxPlayers: 5, minBalance: 300},
        // {leagueId: 3, leagueName: 'Begit, press ka4at', startDate: '25.07', endDate: '02.08', maxPlayers: 7, minBalance: 250},
        // {leagueId: 4, leagueName: 'Мама я в телевизоре', startDate: '06.08', endDate: '14.09', maxPlayers: 2, minBalance: 300},
        // {leagueId: 5, key: '5', leagueName: '2120 межгалактичесий', startDate: '20.04', endDate: '20.05' , maxPlayers: 3, minBalance: 200},
        // {leagueId: 6, key: '11', leagueName: 'Лига чемпионов', startDate: '20.07', endDate: '25.08', maxPlayers: 4, minBalance: 200},
        // {leagueId: 22, key: '22', leagueName: 'Володя сюда', startDate: '14.07', endDate: '20.07', maxPlayers: 5, minBalance: 300},
        // {leagueId: 33, key: '33', leagueName: 'Begit, press ka4at', startDate: '25.07', endDate: '02.08', maxPlayers: 7, minBalance: 250},
        // {leagueId: 43, key: '43', leagueName: 'Мама я в телевизоре Мама я в телевизоре', startDate: '06.08', endDate: '14.09', maxPlayers: 2, minBalance: 300},
        // {leagueId: 54, key: '55', leagueName: '2120 межгалактичесий', startDate: '20.04', endDate: '20.05' , maxPlayers: 3, minBalance: 200},
    ]);

    const [pickedLeague, setPickedLeague] = useState<leagueList>(leagueList[0]);

    const getDataForLeagues = async () =>{
        const res = await getLeagues().then((res)=>{setLeagueList(res.leagues)})

    }

    useEffect(() => {
        getDataForLeagues()
    }, []);

    useEffect(() => {
        props.closeModal(pickedLeague)
    }, [pickedLeague]);

    return(
        <Modal
            animationType={"slide"}
            transparent={false}
            visible={props.isModalVisible}
            onRequestClose={() => props.closeModal(pickedLeague)}
            style={styles.LeagueFindModal}
        >
            <View style={styles.LeagueFindView}>
                <FlatList
                    data={leagueList}
                    renderItem = {({item}) => (<LeagueListItem el={item} handleClick={(leagueId)=>{
                        for (let i = 0; i < leagueList.length ; i++) {
                            if(leagueId === leagueList[i].id) {
                                setPickedLeague(leagueList[i])

                            }
                        }
                    }}/>)}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </Modal>
    )
}

export default leagueModal;

const styles = StyleSheet.create({
    LeagueFindModal: {
        flex: 1,
        display: "flex",
        height: 250,
        width: Dimensions.get('window').width - 36,
        backgroundColor: 'white',
        position: 'relative',
        top: 0,
        left: 0,

    },
    LeagueFindView:{
        display: "flex",
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'

    }
})

