import * as React from "react";
import {Text, StyleSheet, View, TouchableOpacity, SafeAreaView} from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import {useNavigation, useRoute} from "@react-navigation/native";
import {heightPercentage, widthPercentage} from "./Window";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const UserPage =  () => {
    // const userEmail = await AsyncStorage.getItem('userEmail');
    const navigation = useNavigation();
    const route = useRoute();
    const { userEmail } = route.params;
    return (
        <SafeAreaView style={styles.view}>
            <Text style={styles.appNupan}>App-nupan</Text>
            <TouchableOpacity onPress={() => navigation.navigate('QR', userEmail)}>
                <View style={[styles.qr, styles.qrLayout]}>
                    <Image
                        style={[styles.qrChild, styles.childPosition]}
                        contentFit="cover"
                        source={require("../assets/qrback.png")}
                    />
                    <Image
                        style={[styles.riqrScan2LineIcon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/ri_qr-scan-2-line.png")}
                    />
                    <Text style={[styles.qr1, styles.iconLayout1]}>{`QR 코드스캔 `}</Text>
                </View>
            </TouchableOpacity>
            <Text style={[styles.text, styles.textLayout]}>
                내가 이용했던 가게가 궁금하다면?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('UsedStore')}>
                <View style={[styles.view1, styles.view1Layout]}>
                    <View style={[styles.child, styles.view1Layout]}/>
                    <Image
                        style={[styles.mingcuteshopFillIcon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/mingcute_shop-fill.png")}/>
                    <Text style={[styles.text1, styles.textTypo]}>내가 들렀던 가게</Text>
                </View>
            </TouchableOpacity>
            <View style={[styles.view2, styles.iconLayout]}>
                <Image
                    style={[styles.icon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/userpro.png")}
                />
                <Text
                    style={[styles.userName, styles.text3Position]}>{userEmail}</Text>
                <Text style={[styles.text2, styles.textTypo]}>님</Text>
                <Text style={[styles.text3, styles.text3Position]}>환영합니다.</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    qrLayout: {
        height: 81,
        width: 262,
        position: "absolute",
    },
    childPosition: {
        left: 0,
        top: 0,
    },
    iconLayout1: {
        height: 30,
        position: "absolute",
    },
    textLayout: {
        height: 22,
        fontSize: FontSize.size_lg,
    },
    view1Layout: {
        height: 46,
        width: 196,
        position: "absolute",
    },
    textTypo: {
        textAlign: "center",
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        position: "absolute",
    },
    iconLayout: {
        height: 100,
        position: "absolute",
    },
    text3Position: {
        left: 107,
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    appNupan: {
        top: 35,
        alignSelf: "center",
        fontSize: FontSize.size_5xl,
        width: 150,
        height: 29,
        textAlign: "left",
        color: Color.colorBlack,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        fontStyle: "italic",
        position: "absolute",
    },
    qrChild: {
        borderRadius: Border.br_4xl,
        height: 81,
        width: 262,
        position: "absolute",
    },
    riqrScan2LineIcon: {
        left: 27,
        width: 30,
        height: 30,
        overflow: "hidden",
        top: 26,
    },
    qr1: {
        left: 69,
        fontSize: FontSize.size_8xl,
        width: 159,
        color: Color.colorWhite,
        top: 26,
        textAlign: "left",
        fontStyle: "italic",
        height: 30,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
    },
    qr: {
        top: 400,
        alignSelf: "center"
    },
    text: {
        top: 650,
        alignSelf: "center",
        fontWeight: "300",
        fontFamily: FontFamily.interLight,
        width: 260,
        textAlign: "left",
        fontStyle: "italic",
        color: Color.colorBlack,
        position: "absolute",
        height: 22,
    },
    child: {
        backgroundColor: Color.colorOrangered,
        left: 0,
        top: 0,
    },
    mingcuteshopFillIcon: {
        top: 8,
        left: 11,
        width: 30,
        height: 30,
        overflow: "hidden",
    },
    text1: {
        top: 12,
        left: 54,
        width: 128,
        height: 22,
        fontSize: FontSize.size_lg,
        color: Color.colorWhite,
    },
    view1: {
        top: 650,
        alignSelf: "center"
    },
    icon: {
        width: 100,
        left: 0,
        top: 0,
    },
    userName: {
        top: 21,
        fontSize: 28,
        width: 158,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        left: 107,
        height: 29,
    },
    text2: {
        top: 36,
        left: 272,
        fontSize: FontSize.size_xl,
        width: 32,
        height: 23,
        color: Color.colorBlack,
    },
    text3: {
        top: 66,
        fontWeight: "500",
        fontFamily: FontFamily.interMedium,
        width: 95,
        height: 27,
        left: 107,
        fontSize: FontSize.size_lg,
    },
    view2: {
        top: 124,
        left: 12,
        width: 304,
    },
    view: {
        backgroundColor: Color.colorWhite,
        // flex: 1,
        width: widthPercentage(360),
        height: heightPercentage(800),
        overflow: "hidden",
    },
});

export default UserPage;
