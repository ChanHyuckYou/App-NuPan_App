import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const Frame1 = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.appNupan}>App-nupan</Text>
            <View style={[styles.gobackBt, styles.gobackLayout]}>
                <View style={[styles.gobackBtChild, styles.gobackLayout]} />
                <Text style={[styles.goback, styles.textTypo]}>이전화면</Text>
                <Image
                    style={styles.epbackIcon}
                    contentFit="cover"
                    source={require("../assets/ep_back.png")}
                />
            </View>
            <Text style={[styles.text, styles.textTypo]}>
                결제수단을 선택해 주세요
            </Text>
            <Image
                style={[styles.tosspayBtIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/tosspay-bt.png")}
            />
            <Image
                style={[styles.naverpayBtIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/naverpay-bt.png")}
            />
            <Image
                style={[styles.kakaopayBtIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/kakaopay-bt.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    gobackLayout: {
        height: 40,
        width: 111,
        position: "absolute",
    },
    textTypo: {
        fontSize: FontSize.size_lg,
        textAlign: "left",
        color: Color.colorBlack,
        fontStyle: "italic",
        position: "absolute",
    },
    iconLayout: {
        height: 91,
        width: 256,
        left: 52,
        position: "absolute",
    },
    appNupan: {
        top: 35,
        left: 112,
        fontSize: 24,
        width: 136,
        height: 29,
        textAlign: "left",
        color: Color.colorBlack,
        fontStyle: "italic",
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        position: "absolute",
    },
    gobackBtChild: {
        top: 0,
        left: 0,
        backgroundColor: Color.colorGainsboro,
    },
    goback: {
        top: 8,
        left: 34,
        width: 71,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        fontSize: FontSize.size_lg,
    },
    epbackIcon: {
        top: 9,
        left: 10,
        width: 20,
        height: 20,
        position: "absolute",
        overflow: "hidden",
    },
    gobackBt: {
        top: 637,
        left: 124,
    },
    text: {
        top: 189,
        left: 84,
        fontWeight: "500",
        fontFamily: FontFamily.interMedium,
    },
    tosspayBtIcon: {
        top: 464,
    },
    naverpayBtIcon: {
        top: 353,
    },
    kakaopayBtIcon: {
        top: 245,
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
