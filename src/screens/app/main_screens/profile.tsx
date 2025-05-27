import React, { useState, useEffect } from 'react';
import {Alert, Image, Linking, Pressable, SafeAreaView, StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { logout } from "../../../../requests/auth/authRequets";
import { useNavigation } from '@react-navigation/native';
import Navbar from "../../../components/navbar";
import IconLogout from "../../../images/icons/profile/iconLogout";
import IconCamera from '../../../images/icons/profile/iconCamera';
import {getAvatar, postAvatar} from "../../../../requests/main/profileRequests";
import {userType} from "../../../types";

const AVATAR_URL_KEY = 'user_avatar_url';

const Profile = () => {
    const navigation = useNavigation();
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [user, setUser] = useState<userType>({id: 1, login: 'LexyIKO', avatar: 'https://sun9-61.userapi.com/impg/yNTCJexCIX2R-Z0VyUCb01NDAZ-kyY8NhzyjZw/CPTOyHRSn_M.jpg?size=2560x2560&quality=95&sign=619dde198ff144ce80ad2eeef47ba006&type=album', rating: 15})

    //Временно
    useEffect(() => {
        setAvatarUrl(user.avatar)
    }, []);


    // Загрузка URL аватарки при монтировании компонента
    // useEffect(() => {
    //     const loadAvatarUrl = async () => {
    //         try {
    //             setIsLoading(true);
    //             const savedUrl = await AsyncStorage.getItem(AVATAR_URL_KEY);
    //             if (savedUrl) {
    //                 setAvatarUrl(savedUrl);
    //             }
    //         } catch (error) {
    //             console.error('Error loading avatar URL:', error);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };
    //
    //     loadAvatarUrl();
    // }, []);

    const handleLogout = async () => {
        await logout();
        navigation.navigate("Auth" as never);
    };

    const pickImage = async () => {
        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert(
                    'Permission required',
                    'Please enable photo library access in settings to change your avatar',
                    [{ text: 'OK' }, { text: 'Open Settings', onPress: () => Linking.openSettings() }]
                );
                return;
            }

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: 'images',
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.8,
            });

            if (!result.canceled && result.assets?.[0]?.uri) {
                await uploadAvatar(result.assets[0].uri);
            }
        } catch (error) {
            console.error('Error picking image:', error);
            Alert.alert('Error', 'Failed to select image. Please try again.');
        }
    };

    const uploadAvatar = async (uri: string) => {
        try {
            setIsUploading(true);

            const processedImage = await manipulateAsync(
                uri,
                [{ resize: { width: 128, height: 128 } }],
                { compress: 0.8, format: SaveFormat.PNG }
            );

            // Создаем FormData для отправки
            const formData = new FormData();
            formData.append('avatar', {
                uri: processedImage.uri,
                name: 'avatar.png',
                type: 'image/png'
            } as any);

            // const response = await postAvatar(formData);
            //
            // if (response.data && response.data.url) {
            //     // Сохраняем новый URL в AsyncStorage
            //     await AsyncStorage.setItem(AVATAR_URL_KEY, response.data.url);
            //     setAvatarUrl(response.data.url);
            //     Alert.alert('Success', 'Avatar updated successfully!');
            // }
        } catch (error) {
            console.error('Error uploading avatar:', error);
            Alert.alert('Error', 'Failed to upload avatar. Please try again.');
        } finally {
            setIsUploading(false);
        }
    };

    // const fetchAvatarIfNeeded = async () => {
    //     if (!avatarUrl) {
    //         try {
    //             setIsLoading(true);
    //             const response = await getAvatar();
    //
    //             if (response.data && response.data.url) {
    //                 await AsyncStorage.setItem(AVATAR_URL_KEY, response.data.url);
    //                 setAvatarUrl(response.data.url);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching avatar:', error);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     }
    // };

    // Проверяем аватар при загрузке
    // useEffect(() => {
    //     fetchAvatarIfNeeded();
    // }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Pressable onPress={handleLogout} style={styles.logout}>
                <IconLogout />
            </Pressable>

            <View style={styles.avatarContainer}>
                <View style={styles.avatarWrapper}>
                    {isLoading ? (
                        <ActivityIndicator size="large" color="#0000ff" />
                    ) : avatarUrl ? (
                        <Image
                            source={{ uri: avatarUrl }}
                            style={styles.avatar}
                            onError={() => setAvatarUrl(null)}
                        />
                    ) : (
                        <View style={[styles.avatar, styles.emptyAvatar]} />
                    )}

                    <Pressable
                        style={styles.cameraButton}
                        onPress={pickImage}
                        disabled={isUploading}
                    >
                        {isUploading ? (
                            <ActivityIndicator size="small" color="white" />
                        ) : (
                            <IconCamera />
                        )}
                    </Pressable>
                </View>
            </View>

            <Text style={styles.login}>{user.login}</Text>

            <Text style={styles.rating}>Ваш рейтинг</Text>
            <Text style={styles.rating}>{user.rating}</Text>


            <Navbar currentPageName={'Profile'} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 80,
    },
    logout: {
        position: 'absolute',
        right: 20,
        top: 40
    },
    avatarContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 30,
    },
    avatarWrapper: {
        position: 'relative',
        marginBottom: 20,
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 180,
    },
    emptyAvatar: {
        backgroundColor: '#E0E0E0',
        borderWidth: 1,
        borderColor: '#BDBDBD',
    },
    cameraButton: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 180,
        padding: 4,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    login: {
        fontFamily: 'Unbounded-Bold',
        fontSize: 32,
        marginBottom: 20,
    },
    rating: {
        fontFamily: 'Unbounded-Regular',
        fontSize: 32
    }
});

export default Profile;