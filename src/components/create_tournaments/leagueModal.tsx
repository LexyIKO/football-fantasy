import {useEffect, useState} from "react";
import {Dimensions, FlatList, Modal, StyleSheet, View} from "react-native";
import LeagueListItem from "./leagueListItem";

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
    closeModal: (league: leagueList ) => void
}


const leagueModal = (props: modalProps) => {
    const [leagueList, setLeagueList] = useState<leagueList[]>([]);

    const [pickedLeague, setPickedLeague] = useState<leagueList>();

    const getDataForLeagues = async () =>{
        await getLeagues().then((res)=>{setLeagueList(res.leagues)})
    }

    useEffect(() => {
        getDataForLeagues()
    }, []);

    useEffect(() => {
        if(pickedLeague){
            props.closeModal(pickedLeague)
            setPickedLeague(undefined)
        }
    }, [pickedLeague]);

    return(
        <Modal
            animationType={"slide"}
            transparent={false}
            visible={props.isModalVisible}
            onRequestClose={() => {
                if (pickedLeague){
                    props.closeModal(pickedLeague)
                    setPickedLeague(undefined)
                }
            }}
            style={styles.LeagueFindModal}
        >
            <View style={styles.LeagueFindView}>
                <FlatList
                    data={leagueList}
                    renderItem = {({item}) =>
                        (<LeagueListItem
                            el={item}
                            handleClick={(leagueId)=>{
                                for (let i = 0; i < leagueList.length ; i++) {
                                    if(leagueId === leagueList[i].id) {
                                        setPickedLeague(leagueList[i])
                                    }
                                }
                            }}
                        />)
                    }
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

