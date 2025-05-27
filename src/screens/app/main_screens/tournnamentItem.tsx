import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Pressable,
    SafeAreaView,
    FlatList,
    Alert, Modal
} from 'react-native';
import {useEffect, useState} from "react";
import {userTypeForTournament} from "../../../types";
import {tournamentProps} from "./tournaments";
import UserItem from "../../../components/userItem";
import {RouteProp, useNavigation} from "@react-navigation/native";
import IconClose from "../../../images/icons/createTournament/IconClose";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IconInfo from "../../../images/icons/tournament/IconInfo";

type TournamentItemParams = {
    tournamentId: number;
};

const addPlayer = () => {
    Alert.alert('add');
}

function renderAddButton (){
    return (
        <Pressable style={styles.AddButton} onPress={addPlayer}>
            <Text style={styles.Plus}>+</Text>
        </Pressable>
    )
}



const TournamentItem = ({ route }: { route: RouteProp<{ params: TournamentItemParams }> }) => {
    const [tournamentInfo, setTournamentInfo] = useState<tournamentProps>(
        {trId: 1, key: '1', trName: 'Лига чемпионов', trMaxPlayers: 4, trPlayersCount: 4, startDate: '20.07', endDate: '25.08', balance: 400, status: 'created', league: 2, hostId: 1, pickType: 'draft'},

    )
    const [userList, setUserList] = useState<userTypeForTournament[]>(
        [{
            id: 0, isLobbyHost: true, avatar: 'none', balance: 0, login: 'undefined', rating: 0, needToPick: false
        }]
    );
    const { tournamentId} = route.params;
    const [isInfoModalVisible, setInfoModalVisible] = useState<boolean>(false);
    const navigation = useNavigation();

    useEffect(() => {
        //Запрос на заполенение userList

        setUserList([
            {id: 1, login: 'Vladik', needToPick: true, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxo2NFiYcR35GzCk5T3nxA7rGlSsXvIfJwg&s', balance: 200},
            {id: 2, login: 'Mamka', needToPick: true, avatar: 'https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg', balance: 200, isLobbyHost: true},
            {id: 3, login: 'PApka', needToPick: true, avatar: 'https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg', balance: 200},
            {id: 4, login: 'EbadsdskaSobaki', needToPick: false, avatar: 'https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740', balance: 200},
            // {id: 5, login: 'Vladsddik', needToPick: true, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxo2NFiYcR35GzCk5T3nxA7rGlSsXvIfJwg&s', balance: 200},
            // {id: 6, login: 'Mamdsdka', needToPick: false, avatar: 'https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg', balance: 200},
            // {id: 7, login: 'PApdsdka', needToPick: true, avatar: 'https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg', balance: 200},
            // {id: 8, login: 'EbakdsdaSobaki', needToPick: false, avatar: 'https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740', balance: 200},
        ])
        
        setTournamentInfo(
            {trId: 1, key: '1', trName: 'Лига чемпионов', trMaxPlayers: 4, trPlayersCount: 4, startDate: '20.07', endDate: '25.08', balance: 400, status: 'picking', league: 2, hostId: 1, pickType: 'draft'},
        )
    }, []);

    function renderOpenInfoButton () {
        return (
            <Pressable onPress={()=> setInfoModalVisible(true)} style={styles.OpenInfo}>
                <IconInfo color={'black'} height={60} width={60} fill={'#B2FD00'}/>
            </Pressable>
        )
    }

    function renderPickButton () {
        return(
            <Pressable style={styles.FooterButton}>
                <Text style={{fontFamily: 'Unbounded-Bold'}}>{tournamentInfo.pickType === 'draft' ? 'Выбрать игрока' : 'Собрать команду игроков'}</Text>
            </Pressable>
        )
    }

    function renderStartMatch () {
        return(
            <Pressable style={styles.FooterButton}>
                <Text style={{fontFamily: 'Unbounded-Bold'}}>Начать игру</Text>
            </Pressable>
        )
    }

    function renderEmptyButton () {
        return(
            <Pressable style={styles.FooterButtonEmpty}>
            </Pressable>
        )
    }

    function renderButtons () {
        const isPeakButtons = tournamentInfo.status === "picking" && userList[0].needToPick;
        const isStartMatch = tournamentInfo.status === "created" && userList[0].id === tournamentInfo.hostId;
        const isRenderButton = tournamentInfo.status === "created" ||  tournamentInfo.status === "picking"

        return (
            <View style={styles.Footer}>
                {isRenderButton ? renderOpenInfoButton() : null}
                {isPeakButtons ? renderPickButton() : null}
                {isStartMatch ? renderStartMatch() : null}
                {!isStartMatch && !isPeakButtons && isRenderButton ? renderEmptyButton() : null}
            </View>
        )
    }




    return (
        <SafeAreaView style={styles.Container}>
            <View style={styles.Header}>
                <Text style={styles.Title}>{tournamentInfo?.trName}</Text>
                <Pressable onPress={()=> {
                    navigation.navigate('Tournaments' as never)
                }}>
                    <IconClose />
                </Pressable>
            </View>
            <View style={styles.UserList}>
                <FlatList
                    data={userList}
                    renderItem = {({item}) => (<UserItem el={item} />)}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            {tournamentInfo.trPlayersCount < tournamentInfo.trMaxPlayers ? renderAddButton() : null}
            {renderButtons()}



            {/*Вывод инфы о настройках*/}
            <Modal
                animationType={"slide"}
                transparent={true}
                visible={isInfoModalVisible}
                onRequestClose={() => {
                    setInfoModalVisible(false)
                }}
            >
                <View style={styles.ModalContainer}>
                    <View style={styles.ModalBox}>
                        <Text style={styles.ModalTextTitle}>Информация о настройках комнаты</Text>
                        <Text style={styles.ModalText}>Название: {tournamentInfo.trName}</Text>
                        <Text style={styles.ModalText}>Статус: {tournamentInfo.status}</Text>
                        <Text style={styles.ModalText}>Сроки игры: {tournamentInfo.startDate} - {tournamentInfo.endDate}</Text>
                        <Text style={styles.ModalText}>Макс. участников: {tournamentInfo.trMaxPlayers}</Text>
                        <Text style={styles.ModalText}>Бюджет: {tournamentInfo.balance}</Text>
                        <Text style={styles.ModalText}>Тип выбора: {tournamentInfo.pickType}</Text>
                        <Pressable onPress={()=>setInfoModalVisible(false)}>
                            <Text style={styles.ModalClose}>ЗАКРЫТЬ</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    )
}

export default TournamentItem;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
    },
    Header: {
        width: Dimensions.get('window').width - 36,
        height: 40,
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginTop: 40,
        marginBottom: 15,
    },
    Title: {
        fontFamily: 'Unbounded-Bold',
        fontSize: 24,
        display: 'flex',
    },
    Plus: {
        fontFamily: 'Unbounded-Regular',
        fontSize: 32,
        color: 'white',
    },
    UserList: {
        width: "100%",
        alignItems: "center",
        height: "80%"
    },
    AddButton: {
        width: Dimensions.get('window').width - 38,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        borderRadius: 50,
        backgroundColor: 'rgba(40, 88, 205, 0.5)',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
        height: 80,
    },
    ModalContainer: {
        display: 'flex',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        height: "100%",
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ModalBox: {
        width: '90%',
        height: "auto",
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
        borderRadius: 20,
    },
    ModalText: {
        fontFamily: 'Unbounded-Regular',
        fontSize: 16,
    },
    ModalTextTitle: {
        textAlign: "center",
        fontFamily:  "Unbounded-Bold",
        marginBottom: 10,
        fontSize: 18,
    },
    ModalClose: {
        textAlign: "center",
        fontFamily:  "Unbounded-Bold",
        marginTop: 10,
        fontSize: 20,
    },
    OpenInfo: {

    },
    Footer: {
        display: 'flex',
        width: "100%",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-around",
        marginTop: 5,
    },
    FooterButton: {
        backgroundColor: '#B2FD00',
        width: 260,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,

    },
    FooterButtonEmpty: {
        width: 260,
        height: 40,
    }

})
