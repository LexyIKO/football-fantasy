import { useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet, Dimensions,

} from 'react-native';

import IconPublic from "../../images/icons/createTournament/IconPublic";
import IconPrivate from "../../images/icons/createTournament/IconPrivate";

interface pickTypeProps {
    isDraftButton: boolean,
    isDraftButtonSelected: boolean,
}

const Privacy = (props: pickTypeProps) => {

    return (
        <View style={[
            styles.Container,
            {
                backgroundColor: props.isDraftButton ?
                    props.isDraftButtonSelected ?
                        'rgba(40, 88, 205, 1)' : 'rgba(30, 30, 30, 1)'
                    : props.isDraftButtonSelected ?  'rgba(30, 30, 30, 1)' : 'rgba(40, 88, 205, 1)'
            }
        ]}>
            <Text style={styles.Text}>{props.isDraftButton ? 'Драфт' : 'Стандарт'}</Text>
        </View>
    )
}

export default Privacy;

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'row',
        width: (Dimensions.get('window').width - 36)/2 - 5,
        height: 50,
        borderRadius: 40,
        justifyContent: 'center',
        gap: 10,
        alignItems: 'center'
    },
    Text: {
        fontFamily: 'Unbounded-Regular',
        fontSize: 14,
        color: 'white'
    }


})