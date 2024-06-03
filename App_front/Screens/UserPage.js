import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { heightPercentage, topPercentage, widthPercentage } from "./Window";

const UserPage = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const userid = route.params?.userid ?? "Guest"; // 기본값 설정

    return (
        <SafeAreaView style={styles.view}>
            <Text style={styles.appNupan}>App-nupan</Text>
            <View style={[styles.view2, styles.iconLayout]}>
                <Image
                    style={[styles.icon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/userpro.png")}
                />
                <Text style={[styles.userName, styles.text3Position]}>{userid}</Text>
                <Text style={[styles.text2, styles.textTypo]}>님</Text>
                <Text style={[styles.text3, styles.text3Position]}>환영합니다.</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('QR', userid )}>
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
            <View style={styles.usedStoreContainer}>
                <Text style={[styles.text, styles.textLayout]}>
                    내가 이용했던 가게가 궁금하다면?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('UsedStore', { userid })}>
                    <View style={[styles.view1, styles.view1Layout]}>
                        <View style={[styles.child, styles.view1Layout]} />
                        <Image
                            style={[styles.mingcuteshopFillIcon, styles.iconLayout1]}
                            contentFit="cover"
                            source={require("../assets/mingcute_shop-fill.png")} />
                        <Text style={[styles.text1, styles.textTypo]}>내가 들렀던 가게</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

// 스타일 정의
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
        position: "absolute",
    },
    textLayout: {
        fontSize: FontSize.size_sm,
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
        left: 115,
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    appNupan: {
        top: topPercentage(5),
        alignSelf: "center",
        fontSize: FontSize.size_5xl,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        color: Color.colorBlack,
        fontStyle: "italic",
        textAlign: "left",
        position: "relative",
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
        left: 65,
        fontSize: FontSize.size_8xl,
        color: Color.colorWhite,
        top: 26,
        textAlign: "left",
        fontStyle: "italic",
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
    },
    qr: {
        top: topPercentage(350),
        alignSelf: "center"
    },
    text: {
        alignSelf: "center",
        fontWeight: "300",
        fontFamily: FontFamily.interLight,
        textAlign: "left",
        fontStyle: "italic",
        color: Color.colorBlack,
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
        fontSize: FontSize.size_lg,
        color: Color.colorWhite,
    },
    view1: {
        top: 15,
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
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
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
        height: 27,
        fontSize: FontSize.size_lg,
    },
    view2: {
        top: topPercentage(150),
        left: 12,
        width: 304,
    },
    view: {
        backgroundColor: Color.colorWhite,
        width: widthPercentage(360),
        height: heightPercentage(800),
        overflow: "hidden",
    },
    usedStoreContainer: {
        top: topPercentage(500)
    },
});

export default UserPage;
