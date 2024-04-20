import * as React from "react";
import {Text, StyleSheet, View, SafeAreaView} from "react-native";
import { Image } from "expo-image";
import {FontSize, Color, Border, FontFamily} from "../GlobalStyles";


const Frame1 = () => {
    return (
        <SafeAreaView style={styles.view}>
            <Text style={styles.appNupan}>App-nupan</Text>
            <View style={styles.view1} />
            <View style={[styles.view2, styles.view2Layout]}>
                <View style={[styles.child, styles.childPosition]} />
                <Text style={[styles.appNupan1, styles.appFlexBox]}>
                    App-nupan 로그인
                </Text>
            </View>
            <View style={[styles.qr, styles.qrLayout]}>
                <Image
                    style={[styles.qrChild, styles.qrLayout]}
                    contentFit="cover"
                    source={require("../assets/recta.png")}
                />
                <Image
                    style={[styles.riqrScan2LineIcon, styles.qr1Position]}
                    contentFit="cover"
                    source={require("../assets/ri_qr-scan-2-line.png")}
                />
                <Text style={[styles.qr1, styles.qr1Position]}>{`QR 코드스캔 `}</Text>
            </View>
            <Text style={[styles.text, styles.appFlexBox]}>
                로그인을 통해 좀 더 다양한 기능을 체험하세요.
            </Text>
            <Text style={[styles.appNupan2, styles.appFlexBox]}>
                App-nupan으로 손쉽게 메뉴를 주문해보세요!
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    view2Layout: {
        height: 40,
        width: 156,
        position: "absolute",
    },
    childPosition: {
        left: 0,
        top: 0,
    },
    appFlexBox: {
        textAlign: "center",
        position: "absolute",
    },
    qrLayout: {
        height: 81,
        width: 262,
        position: "absolute",
    },
    qr1Position: {
        height: 30,
        top: 26,
        position: "absolute",
    },
    appNupan: {
        top: 35,
        left: 112,
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
    view1: {
        top: 155,
        left: 57,
        borderRadius: 33,
        backgroundColor: Color.colorGainsboro,
        width: 246,
        height: 216,
        position: "absolute",
    },
    child: {
        backgroundColor: Color.colorOrangered,
        height: 40,
        width: 156,
        position: "absolute",
    },
    appNupan1: {
        top: 9,
        left: 16,
        fontSize: FontSize.size_sm,
        width: 125,
        height: 21,
        color: Color.colorWhite,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        fontStyle: "italic",
    },
    view2: {
        top: 640,
        left: 102,
    },
    qrChild: {
        borderRadius: Border.br_4xl,
        left: 0,
        top: 0,
    },
    riqrScan2LineIcon: {
        left: 27,
        width: 30,
        overflow: "hidden",
    },
    qr1: {
        left: 69,
        fontSize: FontSize.size_8xl,
        width: 159,
        color: Color.colorWhite,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        fontStyle: "italic",
        textAlign: "left",
    },
    qr: {
        top: 486,
        left: 49,
    },
    text: {
        top: 611,
        left: 55,
        fontSize: 12,
        fontWeight: "100",
        fontFamily: FontFamily.interThin,
        width: 250,
        height: 23,
        color: Color.colorBlack,
    },
    appNupan2: {
        top: 420,
        left: 32,
        fontSize: FontSize.size_mini,
        fontWeight: "500",
        fontFamily: FontFamily.interMedium,
        width: 296,
        height: 35,
        color: Color.colorBlack,
    },
    view: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
    },
});

export default Frame1;
