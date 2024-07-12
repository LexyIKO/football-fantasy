import { useEffect, useState } from 'react';
import {
    Text,
    SafeAreaView,
    TextInput,
    Pressable,
    View,
    Image,
    StyleSheet,
    Dimensions,
    TextInputProps
} from 'react-native';
import {Shadow} from "react-native-shadow-2";

interface InputProps extends TextInputProps{
    styleContainer: object | undefined,
    styleContainerWidth: number
}

const CreateTournament = (props: InputProps) => {



    return(

        <View style={[styles.Container, props.styleContainer, {width: props.styleContainerWidth}]}>
            <Shadow distance={3}
                    startColor={'rgba(0, 0, 0, 0.05)'}
                    offset={[0, 0]}
                    style={[styles.Container, {width: props.styleContainerWidth}]}
            >
                <TextInput
                    style = {[styles.Input, ]}
                    {...props}
                />

            </Shadow>
        </View>

    );
}

export default CreateTournament;

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        height: 50,
        marginVertical: 1,
        backgroundColor: 'white',
        borderRadius: 40,
        justifyContent: 'center',
    },
    Input: {
        width: '100%',
        paddingHorizontal: 20,
        fontSize: 16,
        fontFamily: 'Unbounded-Regular',
        outlineStyle: 'none'

    }

})