// import { useEffect, useState } from 'react';
import {Pressable, View, Image, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import { Shadow} from "react-native-shadow-2";


import SvgIconTournament from "../images/icons/navbar/IconTournament";
import SvgIconHome from "../images/icons/navbar/IconHome";
import SvgIconProfile from "../images/icons/navbar/IconProfile";

import SvgIconTournamentSelected from "../images/icons/navbar/IconTournamentSelected";
import SvgIconHomeSelected from "../images/icons/navbar/IconHomeSelected";
import SvgIconProfileSelected from "../images/icons/navbar/IconProfileSelected";


interface navbarProps {
    currentPageName: string
}

const Navbar = (props: navbarProps) => {
    const navigation = useNavigation();

    const getIconTournament = () => {
        if(props.currentPageName == 'Tournament'){
            return(<SvgIconTournamentSelected />)
        }
        else {
            return(<SvgIconTournament />)
        }
    }

    const getIconHome = () => {
        if(props.currentPageName == 'Home'){
            return(<SvgIconHomeSelected />)
        }
        else {
            return(<SvgIconHome />)
        }
    }

    const getIconProfile = () => {
        if(props.currentPageName == 'Profile'){
            return(<SvgIconProfileSelected />)
        }
        else {
            return(<SvgIconProfile />)
        }
    }




    return(
        <View style={styles.Container}>
            <Shadow distance={10}
                    startColor={'rgba(0, 0, 0, 0.1)'}
                    offset={[0, 0]}
                    style={styles.Box}
            >
                    <Pressable onPress={()=>{
                        navigation.navigate("Tournaments" as never)
                    }}>{getIconTournament}</Pressable>
                    <Pressable onPress={()=>{
                        navigation.navigate("Home" as never)
                    }}>{getIconHome}</Pressable>
                    <Pressable onPress={()=>{
                        navigation.navigate("Profile" as never)
                    }}>{getIconProfile}</Pressable>

            </Shadow>
    </View>

    );
}

export default Navbar;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
    },
    Box: {
        display: 'flex',
        backgroundColor: 'white',
        width: Dimensions.get('window').width - 18,
        height: 60,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        alignSelf: "flex-end",
        borderRadius: 30,
    },
})