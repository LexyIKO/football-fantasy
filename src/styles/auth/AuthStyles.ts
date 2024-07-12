import { StyleSheet } from "react-native";

const AuthStyles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: "center",
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    },
    Box: {
        display: 'flex',
        marginTop: 60,
        alignItems: 'center',

    },
    Logo: {
        // marginTop: 140,
    },
    LogoName:{
        fontFamily: 'Unbounded-Bold',
        fontSize: 40,
        marginTop: 10,
        marginBottom: 34,
    },
    MyInput: {
        fontFamily: 'Unbounded-Regular',
        marginTop: 10,
        paddingHorizontal: 30,
        paddingVertical: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        width: 320,
        height: 48,
        fontSize: 18,
    },
    MyButton: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginTop: 10,
        height: 48,
        width: 320,
        backgroundColor: '#29292A',

    },
    MyButtonText: {

        fontFamily: 'Unbounded-Regular',
        fontSize: 16,
        color: "white"
    },
    MyError: {
        color: 'red',
        textAlign: 'center'
    },
    Loading: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default AuthStyles
