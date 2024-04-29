import * as React from "react";
import {Text, StyleSheet, View, TouchableOpacity, SafeAreaView} from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily } from "../GlobalStyles";
import {useNavigation} from "@react-navigation/native";

const EmailCheck = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.view}>
            <Text style={[styles.appNupan, styles.text5Typo]}>App-nupan</Text>
            <Text style={[styles.text, styles.textLayout]}>이메일</Text>
            <Text style={[styles.text1, styles.textLayout]}>인증번호 입력</Text>
            <View style={[styles.view1, styles.viewLayout2]}>
                <View style={[styles.child, styles.childPosition]} />
                <Text style={[styles.eMail, styles.textTypo1]}>E-mail</Text>
            </View>
            <View style={[styles.view2, styles.viewLayout2]}>
                <View style={[styles.child, styles.childPosition]} />
                <Text style={[styles.eMail, styles.textTypo1]}>인증번호</Text>
            </View>
            <View style={[styles.view3, styles.viewLayout]}>
                <View style={[styles.inner, styles.innerPosition]} />
                <Text style={[styles.text3, styles.textTypo]}>인증번호 발송</Text>
            </View>
            <View style={[styles.view4, styles.viewLayout]}>
                <View style={[styles.inner, styles.innerPosition]} />
                <Text style={[styles.text3, styles.textTypo]}>인증번호 확인</Text>
            </View>
            <Text style={[styles.text5, styles.text5Typo]}>이메일 인증</Text>
            <View style={[styles.view5, styles.viewChildLayout]}>
                <View style={[styles.child1, styles.viewChildLayout]} />
                <Image
                    style={styles.epbackIcon}
                    contentFit="cover"
                    source={require("../assets/ep_back.png")}
                />
                <Text style={[styles.text6, styles.textLayout]}>이전화면</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Frame12')}>
                <View style={[styles.view6, styles.viewChildLayout]}>
                    <View style={[styles.child2, styles.viewChildLayout]} />
                    <Text style={[styles.text7, styles.textTypo]}>다음으로</Text>
                </View>
            </TouchableOpacity>
            <Text style={[styles.text8, styles.textTypo1]}>
                이메일이 오지 않을경우 스팸함을 확인해주세요!
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    text5Typo: {
        height: 29,
        textAlign: "left",
        fontSize: FontSize.size_5xl,
        color: Color.colorBlack,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        fontStyle: "italic",
        position: "absolute",
    },
    textLayout: {
        height: 21,
        fontSize: FontSize.size_mid,
        color: Color.colorBlack,
        position: "absolute",
    },
    viewLayout2: {
        height: 41,
        width: 267,
        position: "absolute",
    },
    childPosition: {
        left: 0,
        top: 0,
    },
    textTypo1: {
        fontFamily: FontFamily.interLight,
        textAlign: "left",
    },
    viewLayout: {
        height: 38,
        width: 118,
        position: "absolute",
    },
    innerPosition: {
        backgroundColor: Color.colorOrangered,
        left: 0,
        top: 0,
    },
    textTypo: {
        color: Color.colorWhite,
        height: 21,
        fontSize: FontSize.size_mid,
        textAlign: "left",
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        position: "absolute",
    },
    viewChildLayout: {
        height: 36,
        width: 98,
        position: "absolute",
    },
    appNupan: {
        top: 35,
        left: 112,
        width: 150,
    },
    text: {
        top: 179,
        width: 47,
        fontFamily: FontFamily.interLight,
        textAlign: "left",
        left: 46,
        fontStyle: "italic",
    },
    text1: {
        top: 314,
        width: 103,
        fontFamily: FontFamily.interLight,
        textAlign: "left",
        left: 46,
        fontStyle: "italic",
    },
    child: {
        borderStyle: "solid",
        borderColor: Color.colorOrangered,
        borderWidth: 3,
        height: 41,
        width: 267,
        position: "absolute",
        backgroundColor: Color.colorWhite,
    },
    eMail: {
        top: 10,
        left: 13,
        fontSize: FontSize.size_xl,
        color: Color.colorGray,
        width: 106,
        height: 23,
        fontFamily: FontFamily.interLight,
        fontStyle: "italic",
        position: "absolute",
    },
    view1: {
        top: 200,
        left: 46,
    },
    view2: {
        top: 335,
        left: 46,
    },
    inner: {
        height: 38,
        width: 118,
        position: "absolute",
    },
    text3: {
        left: 10,
        top: 8,
        width: 103,
    },
    view3: {
        top: 254,
        left: 195,
        height: 38,
        width: 118,
    },
    view4: {
        top: 389,
        left: 195,
        height: 38,
        width: 118,
    },
    text5: {
        top: 107,
        left: 32,
        width: 117,
    },
    child1: {
        backgroundColor: Color.colorGainsboro,
        left: 0,
        top: 0,
    },
    epbackIcon: {
        left: 5,
        width: 20,
        height: 20,
        top: 8,
        position: "absolute",
        overflow: "hidden",
    },
    text6: {
        left: 25,
        textAlign: "center",
        width: 64,
        top: 8,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        height: 21,
        fontSize: FontSize.size_mid,
    },
    view5: {
        left: 64,
        top: 632,
        width: 98,
    },
    child2: {
        backgroundColor: Color.colorOrangered,
        left: 0,
        top: 0,
    },
    text7: {
        top: 6,
        left: 17,
        width: 65,
    },
    view6: {
        left: 198,
        top: 632,
        width: 98,
    },
    text8: {
        top: 453,
        fontSize: FontSize.size_sm,
        fontWeight: "300",
        width: 280,
        height: 17,
        left: 46,
        color: Color.colorBlack,
        fontFamily: FontFamily.interLight,
        position: "absolute",
    },
    view: {
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
    },
});

export default EmailCheck;
