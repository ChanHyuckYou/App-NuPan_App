import * as React from "react";
import { Image } from "expo-image";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import {useNavigation} from "@react-navigation/native";

const Sign_InConfirm = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.view}>
            <Image
                style={styles.bipersonCheckIcon}
                contentFit="cover"
                source={require("../assets/bi_person-check.png")}
            />
            <Text style={[styles.appNupan, styles.text1Typo]}>App-nupan</Text>
            <Text style={[styles.text, styles.textClr]}>{`회원가입이 
완료되었습니다.`}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Frame7')}>
            <View style={[styles.view1, styles.view1Layout]}>
                <View style={[styles.child, styles.view1Layout]} />
                <Text style={[styles.text1, styles.text1Typo]}>{`로그인 화면으로`}</Text>
            </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    text1Typo: {
        height: 29,
        textAlign: "left",
        fontSize: FontSize.size_5xl,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        position: "absolute",
    },
    textClr: {
        color: Color.colorBlack,
        fontStyle: "italic",
    },
    view1Layout: {
        height: 50,
        width: 200,
        position: "absolute",
    },
    bipersonCheckIcon: {
        top: 172,
        height: 200,
        width: 200,
        position: "absolute",
        left: 80,
        overflow: "hidden",
    },
    appNupan: {
        top: 35,
        left: 112,
        width: 150,
        color: Color.colorBlack,
        fontStyle: "italic",
        textAlign: "left",
        fontSize: FontSize.size_5xl,
    },
    text: {
        top: 420,
        left: 79,
        fontSize: FontSize.size_11xl,
        textAlign: "center",
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        color: Color.colorBlack,
        fontStyle: "italic",
        position: "absolute",
    },
    child: {
        top: 0,
        left: 0,
        backgroundColor: Color.colorOrangered,
    },
    text1: {
        top: 12,
        left: 19,
        color: Color.colorWhite,
        width: 167,
        textAlign: "left",
        fontSize: FontSize.size_5xl,
    },
    view1: {
        top: 556,
        left: 80,
        height: 50,
    },
    view: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
    },
});

export default Sign_InConfirm;
