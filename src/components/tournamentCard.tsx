import {
    Text,
    View,
    StyleSheet, Dimensions,

} from 'react-native';

import IconProfileSelected from "../images/icons/navbar/IconProfileSelected";
import IconBgCircle from "../images/icons/tournament/IconBgCircle";

interface tournamentProps {
    el: {
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
}

const tournamentCard = (props: tournamentProps) => {

    return (
        <View
            style={[styles.Container,
                {backgroundColor: props.el.status === 'ongoing' ? 'rgba(74, 74, 252, 1)'
                        : props.el.status === 'ended' ? 'rgba(30, 30, 30, 0.9)' : 'rgba(92,196,84,0.8)'}]}>
            <IconBgCircle opacity={0.2} style={{position: 'absolute', left: 0, borderRadius: 20}}/>
            <Text style={[styles.Text, {marginTop: 20}]}>{props.el.trName}</Text>
            <Text style={styles.Text}>{props.el.startDate} - {props.el.endDate}</Text>
            <View style={styles.InfoBar}>
                <Text style={styles.Text}>{props.el.trPlayersCount}/{props.el.trMaxPlayers}</Text>
                <View style={styles.Avatars}>
                    <IconProfileSelected style={{position: 'absolute', right: 60, bottom: -25}}/>
                    <IconProfileSelected style={{position: 'absolute', right: 40, bottom: -25}}/>
                    <IconProfileSelected style={{position: 'absolute', right: 20, bottom: -25}}/>
                    <IconProfileSelected style={{position: 'absolute', right: 0, bottom: -25}}/>
                </View>
            </View>
        </View>
    )
}

export default tournamentCard;

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        width: Dimensions.get('window').width - 38,
        height: 158,
        borderRadius: 20,
        marginVertical: 20,
        alignItems: 'center'
    },
    Text: {
        fontFamily: 'Unbounded-Bold',
        fontSize: 18,
        color: 'white',

    },
    Avatars: {
        display: 'flex',
        flexDirection: 'row',

    },
    InfoBar: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: 50,
        justifyContent: "space-between"
    },
    Scroller: {

    }


})