import { useState, useEffect } from 'react';
import { Text, SafeAreaView, TextInput, Pressable, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthStyles from "../../styles/auth/AuthStyles";
//import AsyncStorage from '@react-native-async-storage/async-storage';

import {LinearGradient} from "expo-linear-gradient";

import {checkToken, loginUser} from "../../../requests/auth/authRequets";

const Login = () => {
    const [login, SetLogin] = useState<string>('');
    const [password, SetPassword] = useState<string>('');
    const [isFormValid, SetFormValid] = useState<boolean>(false);
    const [errors, setErrors] = useState<{ login: string | undefined; password: string | undefined }>({
        login: undefined,
        password: undefined,
    });
    const [showLogo, setShowLogo] = useState(true);

    const loginRegex = /^[A-Za-z1-9_.'-]{3,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&',.])[A-Za-z\d@$!%*?&',.]{8,}$/;

    const navigation = useNavigation();

    const ValidateForm = () => {
        let isLoginCorrect = false;
        let isPasswordCorrect = false;

        let errors: {
            login: string | undefined;
            password: string | undefined;
        } = {
            login: undefined,
            password: undefined,
        };


        // Валидация логина
        if (!login) {
            errors.login = undefined;
        } else if (!loginRegex.test(login)) {
            errors.login = 'Длина логина должна быть не меньше 3 символов латиницы';
        } else {
            isLoginCorrect = true; // Логин корректен, ошибок нет
        }


        //Валидация пароля
        if (!password) {
            errors.password = undefined;
        } else if (password.length < 8) {
            errors.password = 'Длинна пароля не меньше 8 символов';
        } else if (!passwordRegex.test(password)) {
            errors.password = 'Нужно исопльзовать: букву, цифру, спец. символ'
        } else {
            isPasswordCorrect = true
        }



        setErrors(errors);
        if(isLoginCorrect && isPasswordCorrect) {
            SetFormValid(true);
        }

    };

    const handleSubmit = async () => {
        const isLogged = await loginUser(login, password);
        if(isLogged.token) {
            // @ts-ignore
            navigation.navigate("Main")
        }
    }

    useEffect(() => {
        const checkUserToken = async () => {
            try {
                const token = await checkToken()
                if (token) {
                    // @ts-ignore
                    navigation.navigate("Main")
                }
            } catch (error) {
                console.log('Failed to load token', error);
            }
        };

        checkUserToken();
    }, []);

    useEffect(()=>{
        ValidateForm()
    }, [login, password]);

    return(
        <SafeAreaView style = {AuthStyles.container}>
            <LinearGradient
                colors={["rgba(245, 168, 252, 0.5)", "rgba(168, 176, 252, 0.5)"]}
                style={AuthStyles.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            />
            <ScrollView contentContainerStyle={AuthStyles.Box} keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false}>
                <Image source={require('../../images/auth/Logo.png')} style={{display:  showLogo ? 'flex': 'none'}}/>
                <Text style={AuthStyles.LogoName}>FFL</Text>
                <TextInput
                    placeholder = 'Введите логин'
                    placeholderTextColor='rgba(0,0,0,0.5)'
                    style = {AuthStyles.MyInput}
                    value = {login}
                    maxLength={16}
                    onChangeText = {SetLogin}
                    // onFocus={()=>{
                    //     setShowLogo(false)
                    // }}
                    // onBlur={()=>{
                    //     setShowLogo(true)
                    // }}
                />

                {errors.login && (
                    <Text style={AuthStyles.MyError}>{errors.login}</Text>
                )}

                <TextInput
                    placeholder = 'Введите пароль'
                    placeholderTextColor='rgba(0,0,0,0.5)'
                    style = {AuthStyles.MyInput}
                    secureTextEntry
                    value = {password}
                    onChangeText = {SetPassword}
                    // onFocus={()=>{
                    //     setShowLogo(false)
                    // }}
                    // onBlur={()=>{
                    //     setShowLogo(true)
                    // }}
                />

                {errors.password && (
                    <Text style={AuthStyles.MyError}>{errors.password}</Text>
                )}


                <Pressable
                    disabled={!isFormValid}
                    onPress={handleSubmit}
                    style = {AuthStyles.MyButton}
                >
                    <Text style = {AuthStyles.MyButtonText}>Войти</Text>
                </Pressable>

                <Pressable
                    onPress={()=>navigation.navigate('Register' as never)}
                >
                    <Text style = {{fontSize: 20, marginTop: 10}}>Нет аккаунта?</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Login;