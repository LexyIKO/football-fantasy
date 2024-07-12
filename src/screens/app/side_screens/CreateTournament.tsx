import { useState } from 'react';
import {Text, SafeAreaView, Pressable, View, StyleSheet, Dimensions, Modal} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {Calendar} from 'react-native-calendars';
import CustomInput from "../../../components/customInput";
import Privacy from "../../../components/create_tournaments/privacy";
import LeagueModal from "../../../components/create_tournaments/leagueModal";


import IconClose from "../../../images/icons/createTournament/IconClose";
import SvgIconPlus from "../../../images/icons/createTournament/IconArrowUp";
import SvgIconMinus from "../../../images/icons/createTournament/IconArrowDown";
import {isPastDate, isToday} from "react-native-calendars/src/dateutils";

interface leagueList {
    leagueId: number,
    key: string,
    leagueName: string,
    startDate: string,
    endDate: string,
    maxPlayers: number,
    minBalance: number,
}

const CreateTournament = () => {
    const navigation = useNavigation();
    const [gameName, setTournamentName] = useState<string>('');
    const [tournamentBalance, setTournamentBalance] = useState<string>('');
    const [gamerNumber, setGamerNumber] = useState<string>('');
    const [isGamePrivate, setIsGamePrivate] = useState<boolean>(true);
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [selectedDay, setSelectedDay] = useState<string>('');
    const [league, setLeague] = useState<leagueList>();

    const [isCalendarModalVisible, setIsCalendarModalVisible] = useState<boolean>(false);
    const [isFindLeagueModalVisible, setIsFindLeagueModalVisible] = useState<boolean>(false)

    const gamerNumberPlus = () => {
        if(Number(gamerNumber) < 8){
            setGamerNumber((Number(gamerNumber) + 1).toString());
        }
    }

    const gamerNumberMinus = () => {
        if(Number(gamerNumber) > 2){
            setGamerNumber((Number(gamerNumber) - 1).toString());
        }
    }

    return(

        <SafeAreaView style={styles.Container}>
            <View style={styles.Header}>
                <Text style={styles.Title}>Создание турнира</Text>
                <Pressable onPress={()=> {
                    navigation.navigate('Tournaments' as never)
                }}>
                    <IconClose />
                </Pressable>


            </View>

            <CustomInput
                styleContainer={{marginTop: 30}}
                styleContainerWidth={Dimensions.get('window').width - 36}
                placeholder={"Футбольная лига"}
                onFocus={()=> {
                    setIsFindLeagueModalVisible(true)
                }}
            />




            <LeagueModal   closeModal={(league) => {
                setLeague(league)
                setIsFindLeagueModalVisible(false)
            }}
                           isModalVisible={isFindLeagueModalVisible}/>



            <CustomInput
                placeholder={'Название лобби'}
                styleContainer={{
                    marginTop: 20,
                }}
                styleContainerWidth={Dimensions.get('window').width - 36}
                value={gameName}
                onChangeText={setTournamentName}
            />

            <CustomInput
                placeholder={'Бюджет команды'}
                inputMode={"numeric"}
                styleContainer={{
                    marginTop: 20,
                }}
                styleContainerWidth={Dimensions.get('window').width - 36}
                value={tournamentBalance.toString()}
                onChangeText={setTournamentBalance}
            />

            <View style={styles.DateSelector}>
                <CustomInput
                    styleContainer={{marginTop: 20}}
                    styleContainerWidth={(Dimensions.get('window').width - 38) / 2 - 5}
                    placeholder={'Начало'}
                    value={startDate}
                    style={{textAlign: 'center'}}
                    caretHidden={true}
                    inputMode={'none'}
                    // onPress={() => {
                    //     setIsCalendarModalVisible(true);
                    //     setSelectedDay('start');
                    // }}
                    onFocus={() => {
                        setIsCalendarModalVisible(true);
                        setSelectedDay('start');
                    }}
                />

                <CustomInput
                    styleContainer={{marginTop: 20}}
                    styleContainerWidth={(Dimensions.get('window').width - 38) / 2 - 5}
                    placeholder={'Конец'}
                    style={{textAlign: 'center'}}
                    value={endDate}
                    inputMode={'none'}
                    caretHidden={true}
                    // onPress={() => {
                    //     setIsCalendarModalVisible(true);
                    //     setSelectedDay('end');
                    // }}
                    onFocus={() => {
                        setIsCalendarModalVisible(true);
                        setSelectedDay('end');
                    }}
                />
            </View>

            <View style={styles.gamerNumber}>
                <Pressable onPress={gamerNumberMinus}>
                    <SvgIconMinus opacity={0.8}/>
                </Pressable>

                <CustomInput
                    styleContainer={undefined}
                    styleContainerWidth={Dimensions.get('window').width - 36 - 80 - 20}
                    placeholder={'Количество участников'}
                    value={gamerNumber.toString()}
                    inputMode={"numeric"}
                    style={{fontSize: 14, textAlign: 'center'}}
                    clearTextOnFocus={true}
                    onChangeText={setGamerNumber}
                    onFocus={()=> setGamerNumber('2')}
                />

                <Pressable onPress={gamerNumberPlus}>
                    <SvgIconPlus opacity={0.8}/>
                </Pressable>

            </View>

            <View style={{display: 'flex', width: Dimensions.get('window').width - 36, marginTop: 20}}>
                <Text style={styles.Title}>Приватность</Text>
            </View>

            <View style={styles.Privacy}>
                <Pressable onPress={()=>{setIsGamePrivate(true)}}>
                    <Privacy isPrivate={false} isGamePrivate={isGamePrivate} />
                </Pressable>

                <Pressable onPress={()=> {setIsGamePrivate(true)}}>
                    <Privacy isPrivate={true} isGamePrivate={isGamePrivate} />
                </Pressable>
            </View>


            <Modal
                visible={isCalendarModalVisible}
                onRequestClose={() => setIsCalendarModalVisible(false)}
                transparent={false}
                style={styles.CalendarModal}
            >
                <View style={styles.CalendarModalView}>
                    <Text style={styles.Title}>Выбранная дата</Text>
                    <Text style={styles.Title}>{selectedDay === 'start' ? startDate : endDate}</Text>

                    <Calendar
                        onDayPress={(day: { dateString: string }) => {
                            let dateDay = new Date(day.dateString);
                            let today = new Date();
                            today.setHours(0, 0, 0, 0); // Устанавливаем время текущей даты на начало дня

                            if (selectedDay === 'start') {
                                // Проверяем, чтобы выбранная дата была текущей или из будущего
                                if (dateDay >= today) {
                                    setStartDate(day.dateString);
                                }
                            } else {
                                let startDay = new Date(startDate);

                                // Calculate the difference in milliseconds
                                let differenceInMilliseconds = dateDay.getTime() - startDay.getTime();

                                // Convert the difference to days
                                let differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

                                // Check if the difference is between 0 and 30 days
                                if (differenceInDays > 0 && differenceInDays <= 30) {
                                    setEndDate(day.dateString);
                                }
                            }
                        }}
                        markedDates={{
                            [startDate]: { selected: true, disableTouchEvent: true, selectedColor: 'green' },
                            [endDate]: { selected: true, disableTouchEvent: true, selectedColor: 'red' },

                        }}
                    />

                    <Pressable style={styles.CalendarModalButtonConfirm}

                        onPress={()=>{setIsCalendarModalVisible(false); }}
                    >
                        <Text style={[styles.Title, {color: 'white'}]}>Подтвердить</Text>
                    </Pressable>

                </View>
            </Modal>
        </SafeAreaView>
    );
}

export default CreateTournament;

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
        marginTop: 60
    },
    Title: {
        fontFamily: 'Unbounded-Bold',
        fontSize: 24,
        display: 'flex',
    },
    gamerNumber: {
        width: Dimensions.get('window').width - 36,
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        height: 50,
        marginTop: 20

    },
    Privacy: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        width: Dimensions.get('window').width - 36,
        marginTop: 10,
    },
    DateSelector: {
        display: 'flex',
        width: Dimensions.get('window').width - 36,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    CalendarModal: {
        display: 'flex',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: Dimensions.get('window').width,
        backgroundColor: 'white',
        paddingHorizontal: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    CalendarModalView: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        paddingTop: 40.

    },
    CalendarModalButtonConfirm: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 240,
        height: 50,
        backgroundColor: 'rgba(40, 88, 205, 1)',
        borderRadius: 40,
        marginTop: 30
    },
})