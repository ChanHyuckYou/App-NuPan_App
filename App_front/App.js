import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import QR from "./Screens/Qr";
import Frame from "./Screens/Frame";
import Frame1 from "./Screens/Frame1";
import Frame2 from "./Screens/Frame2";
import Frame3 from "./Screens/Frame3";
import Frame4 from "./Screens/Frame4";
import Frame5 from "./Screens/Frame5";
import Frame6 from "./Screens/Frame6";
import Frame7 from "./Screens/Frame7";
import Frame8 from "./Screens/Frame8";
import Frame9 from "./Screens/Frame9";
import Frame10 from "./Screens/Frame10";
import Frame11 from "./Screens/Frame11";
import Frame12 from "./Screens/Frame12";
import Frame13 from "./Screens/Frame13";
import PAY from "./Screens/pay";
import ID from "./Screens/ID";



const App = () => {
    const RootStack = createStackNavigator();
    const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

    return (
        <NativeBaseProvider>
            <SafeAreaProvider>
                    <NavigationContainer>
                            <RootStack.Navigator
                            initialRouteName={"Frame"}
                                // screenOptions={{ headerShown: false}
                                    >
                                <RootStack.Screen
                                    name="Frame"
                                    component={Frame}
                                />
                                <RootStack.Screen
                                    name="QR"
                                    component={QR}
                                />
                                <RootStack.Screen
                                    name="Frame1"
                                    component={Frame1}
                                />
                                <RootStack.Screen
                                    name="Frame2"
                                    component={Frame2}
                                />
                                <RootStack.Screen
                                    name="Frame3"
                                    component={Frame3}
                                />
                                <RootStack.Screen
                                    name="Frame4"
                                    component={Frame4}
                                />
                                <RootStack.Screen
                                    name="Frame5"
                                    component={Frame5}
                                />
                                <RootStack.Screen
                                    name="Frame6"
                                    component={Frame6}
                                />
                                <RootStack.Screen
                                    name="Frame7"
                                    component={Frame7}
                                />
                                <RootStack.Screen
                                    name="Frame8"
                                    component={Frame8}
                                />
                                <RootStack.Screen
                                    name="Frame9"
                                    component={Frame9}
                                />
                                <RootStack.Screen
                                    name="Frame10"
                                    component={Frame10}
                                />
                                <RootStack.Screen
                                    name="Frame11"
                                    component={Frame11}
                                />
                                <RootStack.Screen
                                    name="Frame12"
                                    component={Frame12}
                                />
                                <RootStack.Screen
                                    name="Frame13"
                                    component={Frame13}
                                />
                                <RootStack.Screen
                                    name="ID"
                                    component={ID}
                                />
                                <RootStack.Screen
                                    name="PAY"
                                    component={PAY}
                                />
                            </RootStack.Navigator>
                    </NavigationContainer>
            </SafeAreaProvider>
        </NativeBaseProvider>
    );
}
export default App;
