import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import QR from "./Screens/Qr";
import AppMain from "./Screens/AppMain";
import Frame1 from "./Screens/Frame1";
import OrderCheck from "./Screens/OrderCheck";
import OrderList from "./Screens/OrderList";
import StaffCall from "./Screens/StaffCall";
import OrderConfirm_pay from "./Screens/OrderConfirm_pay";
import OrderConfirm_cash from "./Screens/OrderConfirm_cash";
import AppLogin from "./Screens/AppLogin";
import UserPage from "./Screens/UserPage";
import UsedStore from "./Screens/UsedStore";
import Sign_In from "./Screens/Sign_In";
import EmailCheck from "./Screens/EmailCheck";
import Sign_InConfirm from "./Screens/Sign_InConfirm";
import MenuPage from "./Screens/MenuPage";
import SelectPayment from "./Screens/Payment/SelectPayment";
import PAY from "./Screens/Payment/pay";
import ID from "./Screens/ID";
import Certification from "./Screens/Certification";
import TestConfig from "./Screens/testConfig";
import firebaseConfig from "./Screens/firebaseConfig";



const App = () => {
    const RootStack = createNativeStackNavigator();
    const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

    return (
        <NativeBaseProvider>
            <SafeAreaProvider>
                    <NavigationContainer>
                            <RootStack.Navigator
                            initialRouteName={"Frame"}
                                screenOptions={{ headerShown: false}}
                                    >

                                <RootStack.Screen
                                    name="Frame"
                                    component={AppMain}
                                />
                                {/*<RootStack.Screen*/}
                                {/*    name="firebaseConfig"*/}
                                {/*    component={firebaseConfig}*/}
                                {/*/>*/}
                                <RootStack.Screen
                                    name="Certification"
                                    component={Certification}
                                />
                                <RootStack.Screen
                                    name="TestConfig"
                                    component={TestConfig}
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
                                    component={OrderCheck}
                                />
                                <RootStack.Screen
                                    name="Frame3"
                                    component={OrderList}
                                />
                                <RootStack.Screen
                                    name="StaffCall"
                                    component={StaffCall}
                                />
                                <RootStack.Screen
                                    name="Frame5"
                                    component={OrderConfirm_pay}
                                />
                                <RootStack.Screen
                                    name="Frame6"
                                    component={OrderConfirm_cash}
                                />
                                <RootStack.Screen
                                    name="Frame7"
                                    component={AppLogin}
                                />
                                <RootStack.Screen
                                    name="UserPage"
                                    component={UserPage}
                                />
                                <RootStack.Screen
                                    name="Frame9"
                                    component={UsedStore}
                                />
                                <RootStack.Screen
                                    name="Sign_In"
                                    component={Sign_In}
                                />
                                <RootStack.Screen
                                    name="Frame11"
                                    component={EmailCheck}
                                />
                                <RootStack.Screen
                                    name="Frame12"
                                    component={Sign_InConfirm}
                                />
                                <RootStack.Screen
                                    name="Frame13"
                                    component={MenuPage}
                                />
                                <RootStack.Screen
                                    name="SelectPayment"
                                    component={SelectPayment}
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
