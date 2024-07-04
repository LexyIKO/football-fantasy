import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator, SafeAreaView} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import login from "./src/screens/auth/login";
import registration from "./src/screens/auth/registration";
import AuthStyles from "./src/styles/auth/AuthStyles";
import {LinearGradient} from "expo-linear-gradient";



const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
// const MainStack = createNativeStackNavigator();



function AuthLayout(){
  return(
      <AuthStack.Navigator initialRouteName='Login'>
        <AuthStack.Screen name = 'Login' component={login} options={{headerShown: false}}/>
        <AuthStack.Screen name = 'Register' component={registration} options={{headerShown: false}}/>
      </AuthStack.Navigator>
  );
}

// function MainLayout(){
//     return(
//         <MainStack.Navigator initialRouteName='MainScreen'>
//             <MainStack.Screen name = 'MainScreen' component={MainScreen} options={{headerShown: false}}/>
//             <MainStack.Screen name = 'ProfileScreen' component={ProfileScreen} options={{headerShown: false}}/>
//         </MainStack.Navigator>
//     );
// }

export default function App() {
    const [loaded, error] = useFonts({
        'Unbounded-Bold': require('./src/fonts/Unbounded-Bold.ttf'),
        'Unbounded-Regular': require('./src/fonts/Unbounded-Regular.ttf'),
    });

    if(loaded) {
        return (

            <NavigationContainer>
                <Stack.Navigator initialRouteName='Auth' >
                    {/*<Stack.Screen name = 'Main' component={MainLayout} options={{headerShown: false}}/>*/}
                    <Stack.Screen name = 'Auth' component={AuthLayout} options={{headerShown: false}}/>
                </Stack.Navigator>

                <StatusBar style='auto' />
            </NavigationContainer>

        );
    }
    else{
        return(
            <SafeAreaView style={AuthStyles.Loading}>
                <LinearGradient
                    colors={["rgba(245, 168, 252, 0.5)", "rgba(168, 176, 252, 0.5)"]}
                    style={AuthStyles.gradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                />
                <ActivityIndicator size="large" />
            </SafeAreaView>

        )
    }


}
