// import { useEffect, useState } from 'react';
import {Text, SafeAreaView, TextInput, Pressable, View, Image, StyleSheet} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import Navbar from "../../../components/navbar";

const Home = () => {
    const navigation = useNavigation()

    return(

        <SafeAreaView style={styles.Conteiner} >
            <Text style={{fontSize: 48, color: 'red'}}>Главная</Text>


            <Navbar currentPageName={'Home'} />
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    Conteiner: {
        flex: 1,
        width: '100%',
        height: '100%',

    }
})