import { useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet, Dimensions, Pressable,
} from 'react-native';

import {Shadow} from "react-native-shadow-2";

interface leagueList {
    el: {
        id: number,
        name: string,
        start_datetime: string,
        end_datetime: string,
        // maxPlayers: number,
        // minBalance: number,
    }
    handleClick: (leagueId: number) => void
}

const LeagueListItem  = (props: leagueList) => {

    return (
        <View style={styles.Container}>
            <Pressable
                style={[styles.Block,]}
                onPress={()=>{
                    props.handleClick(props.el.id)
                }}
            >
                <Shadow
                    distance={5}
                    startColor={'rgba(0, 0, 0, 0.05)'}
                    offset={[0, 0]}
                    style={styles.Block}
                >
                    <View style={{paddingHorizontal: 20}}>
                        <Text style={[styles.Text, {fontFamily: 'Unbounded-Bold', fontSize: 16}]}>{props.el.name}</Text>
                        <View style={styles.MainInfo}>
                            <Text style={styles.Text}>{props.el.start_datetime.split(' ')[0]} - {props.el.end_datetime.split(' ')[0]}</Text>
                            <Text style={styles.Text}>5</Text>
                        </View>
                        <Text style={[styles.Text, {marginTop:0}]}>Мин. баланс: 200</Text>
                    </View>
                </Shadow>
            </Pressable>
        </View>

    )
}

export default LeagueListItem ;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 5,
        padding: 10

    },
    Text: {
        fontFamily: 'Unbounded-Regular',
        fontSize: 16,
        color: 'black',
    },
    MainInfo: {
        display: "flex",
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: "space-between",
    },
    Block: {
        width: Dimensions.get('window').width - 38,
        backgroundColor: 'white',
        borderRadius: 20,

    }
})

