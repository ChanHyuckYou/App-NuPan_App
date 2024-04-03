

const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Frame from "./Screens/Frame";
import QR from "./Screens/Qr";
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
import ID from "./Screens/ID";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
    const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

    return (
        <>
            <NavigationContainer>
                {hideSplashScreen ? (
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen
                            name="Frame"
                            component={Frame}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="QR"
                            component={QR}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Frame1"
                            component={Frame1}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Frame2"
                            component={Frame2}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Frame3"
                            component={Frame3}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Frame4"
                            component={Frame4}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Frame5"
                            component={Frame5}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Frame6"
                            component={Frame6}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Frame7"
                            component={Frame7}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Frame8"
                            component={Frame8}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Frame9"
                            component={Frame9}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Frame10"
                            component={Frame10}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Frame11"
                            component={Frame11}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Frame12"
                            component={Frame12}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="ID"
                            component={ID}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                ) : null}
            </NavigationContainer>
        </>
    );
};
export default App;
