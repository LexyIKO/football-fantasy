// import { useEffect, useState } from 'react';
import {Text, SafeAreaView, TextInput, Pressable, View, Image, StyleSheet} from 'react-native';
import {logout} from "../../../../requests/auth/authRequets";
import { useNavigation } from '@react-navigation/native';

import {setBdInfo} from "../../../../requests/main/fetchDataForDB";

import Navbar from "../../../components/navbar";
import axios from "axios";

const Profile = () => {
    const navigation = useNavigation();

    const handleLogout = () => {

        logout()
        navigation.navigate("Auth" as never)

    };

    const getAllInfoInDB = async () =>{
        const respone = await setBdInfo();
    }
    return(

        <SafeAreaView style={styles.Conteiner}>
            <Text style={{fontSize: 48, color: 'red'}}>Профиль</Text>
            <Pressable
                onPress={handleLogout}
                style={styles.Logout}
            >
                <Text style = {{fontSize: 30}}>Выйти</Text>
            </Pressable>

            <Navbar currentPageName={'Profile'} />

            <Pressable
            onPress={getAllInfoInDB}>
                <Text>Магия</Text>
            </Pressable>

        </SafeAreaView>
    );
}

export default Profile;

const styles = StyleSheet.create({
    Conteiner: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Logout: {
        position: 'absolute', right: 20, top: 40
    }
})