import { useEffect, useState } from 'react';
import {Text, SafeAreaView, TextInput, Pressable, Image, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AuthStyles from "../../styles/auth/AuthStyles";

import { useNavigation } from '@react-navigation/native';

import {registerUser} from "../../../requests/auth/authRequets";



const Registration = () => {
    const [login, SetLogin] = useState<string>('');
    const [password, SetPassword] = useState<string>('');
    const [passwordCopy, SetPasswordCopy] = useState<string>('');
    const [isFormValid, SetFormValid] = useState<boolean>(false);
    const [errors, SetErrors] = useState<{ login: string | undefined; password: string | undefined }>({
        login: undefined,
        password: undefined,
    });

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

        // Валидация пароля
        if (!password) {
            errors.password = undefined;
        } else if (password.length < 8) {
            errors.password = 'Длинна пароля не меньше 8 символов';
        } else if (!passwordRegex.test(password)) {
            errors.password = 'Нужно исопльзовать: букву, цифру, спец. символ'
        } else if (passwordCopy !== password) {
            errors.password = 'Веденные пароли не совпадают';
        } else {
            isPasswordCorrect = true
        }

        SetErrors(errors);
        if(isLoginCorrect && isPasswordCorrect) {
            SetFormValid(true);
        }
    };

    const handleSubmit = async () => {
        const isRegistred = await registerUser(login, password).then(()=>{
            navigation.navigate('Login' as never)
        });

    }

    useEffect(()=>{
        ValidateForm()
    }, [login, password, passwordCopy]);

    return(

        <SafeAreaView style = {AuthStyles.container}>
            <LinearGradient
                colors={["rgba(245, 168, 252, 0.5)", "rgba(168, 176, 252, 0.5)"]}
                style={AuthStyles.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            />

            <ScrollView contentContainerStyle= {AuthStyles.Box} keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false}>
                <Image source={require('../../images/auth/Logo.png')}/>
                <Text style={AuthStyles.LogoName}>FFL</Text>
                <TextInput
                    placeholder = 'Введите логин'
                    placeholderTextColor='rgba(0,0,0,0.5)'
                    style = {AuthStyles.MyInput}
                    value = {login}
                    maxLength={16}
                    onChangeText = {SetLogin}
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
                />
                <TextInput
                    placeholder = 'Повторите пароль'
                    placeholderTextColor='rgba(0,0,0,0.5)'
                    style = {AuthStyles.MyInput}
                    secureTextEntry
                    value = {passwordCopy}
                    onChangeText = {SetPasswordCopy}
                />

                {errors.password && (
                    <Text style={AuthStyles.MyError}>{errors.password}</Text>
                )}

                <Pressable
                    disabled = {!isFormValid}
                    onPress={handleSubmit}
                    style = {AuthStyles.MyButton}
                >
                    <Text style = {AuthStyles.MyButtonText}>Создать аккаунт</Text>
                </Pressable>

                <Pressable
                    style = {{marginTop: 15}}
                    onPress={()=>navigation.navigate('Login' as never)}
                >
                    <Text style = {{fontSize: 20}}>Уже есть аккаунт?</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Registration;