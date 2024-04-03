import * as React from "react";
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';

const Frame10 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.view}>
            <Text style={styles.appNupan}>App-nupan</Text>
            <Text style={[styles.text, styles.idTypo]}>이름</Text>
            <Text style={[styles.text1, styles.textTypo3]}>비밀번호</Text>
            <Text style={[styles.text2, styles.textTypo3]}>비밀번호 확인</Text>
            <Text style={[styles.id, styles.idTypo]}>ID</Text>
            <View style={[styles.view1, styles.viewLayout1]}>
                <View style={[styles.child, styles.childBorder]} />
                <Text style={[styles.text3, styles.textLayout]}>비밀번호</Text>
            </View>
            <View style={[styles.view2, styles.viewLayout1]}>
                <View style={[styles.child, styles.childBorder]} />
                <Text style={[styles.text4, styles.textLayout]}>비밀번호 확인</Text>
            </View>
            <View style={[styles.id1, styles.id1Layout]}>
                <View style={[styles.idChild, styles.childPosition]} />
                <Text style={[styles.text5, styles.textTypo]}>중복확인</Text>
            </View>
            <View style={[styles.id2, styles.id2Layout]}>
                <View style={[styles.idItem, styles.id2Layout]} />
                <Text style={[styles.id3, styles.textLayout]}>ID</Text>
            </View>
            <View style={[styles.view3, styles.id2Layout]}>
                <View style={[styles.idItem, styles.id2Layout]} />
                <Text style={[styles.id3, styles.textLayout]}>이름</Text>
            </View>
            <Text style={styles.text7}>회원가입</Text>
            <View style={[styles.view4, styles.viewLayout]}>
                <View style={[styles.rectangleView, styles.viewLayout]} />
                <Image
                    style={[styles.epbackIcon, styles.text8Position]}
                    contentFit="cover"
                    source={require("../assets/ep_back.png")}
                />
                <Text style={[styles.text8, styles.text8Position]}>이전화면</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Frame11')}>
                <View style={[styles.view5, styles.viewLayout]}>
                    <View style={[styles.child1, styles.viewLayout]} />
                    <Text style={[styles.text9, styles.textTypo]}>다음으로</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    idTypo: {
        width: 47,
        fontFamily: FontFamily.interLight,
        height: 21,
        fontSize: FontSize.size_mid,
        textAlign: "left",
        color: Color.colorBlack,
        fontStyle: "italic",
        position: "absolute",
    },
    textTypo3: {
        left: 48,
        height: 21,
        fontFamily: FontFamily.interLight,
        fontSize: FontSize.size_mid,
        textAlign: "left",
        color: Color.colorBlack,
        fontStyle: "italic",
        position: "absolute",
    },
    viewLayout1: {
        height: 41,
        width: 267,
        position: "absolute",
    },
    childBorder: {
        borderWidth: 3,
        borderColor: Color.colorOrangered,
        borderStyle: "solid",
        left: 0,
        top: 0,
        backgroundColor: Color.colorWhite,
    },
    textLayout: {
        height: 23,
        top: 10,
    },
    id1Layout: {
        width: 73,
        height: 41,
        position: "absolute",
    },
    childPosition: {
        backgroundColor: Color.colorOrangered,
        left: 0,
        top: 0,
    },
    textTypo: {
        width: 65,
        color: Color.colorWhite,
        fontSize: FontSize.size_mid,
        textAlign: "left",
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        position: "absolute",
    },
    id2Layout: {
        width: 187,
        height: 41,
        position: "absolute",
    },
    viewLayout: {
        height: 36,
        width: 98,
        position: "absolute",
    },
    text8Position: {
        top: 8,
        position: "absolute",
    },
    appNupan: {
        top: 35,
        left: 112,
        width: 136,
        height: 29,
        textAlign: "left",
        color: Color.colorBlack,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        fontStyle: "italic",
        fontSize: FontSize.size_5xl,
        position: "absolute",
    },
    text: {
        top: 179,
        left: 50,
        height: 21,
    },
    text1: {
        top: 332,
        width: 66,
    },
    text2: {
        top: 417,
        width: 102,
    },
    id: {
        top: 247,
        left: 49,
        height: 21,
    },
    child: {
        height: 41,
        width: 267,
        position: "absolute",
    },
    text3: {
        width: 106,
        color: Color.colorGray,
        fontSize: FontSize.size_xl,
        height: 23,
        top: 10,
        fontFamily: FontFamily.interLight,
        textAlign: "left",
        fontStyle: "italic",
        position: "absolute",
        left: 13,
    },
    view1: {
        top: 353,
        left: 47,
    },
    text4: {
        width: 117,
        color: Color.colorGray,
        fontSize: FontSize.size_xl,
        height: 23,
        top: 10,
        fontFamily: FontFamily.interLight,
        textAlign: "left",
        fontStyle: "italic",
        position: "absolute",
        left: 13,
    },
    view2: {
        top: 438,
        left: 47,
    },
    idChild: {
        width: 73,
        height: 41,
        position: "absolute",
    },
    text5: {
        left: 5,
        height: 23,
        top: 10,
        width: 65,
        color: Color.colorWhite,
    },
    id1: {
        left: 245,
        top: 268,
    },
    idItem: {
        borderWidth: 3,
        borderColor: Color.colorOrangered,
        borderStyle: "solid",
        left: 0,
        top: 0,
        backgroundColor: Color.colorWhite,
    },
    id3: {
        left: 9,
        width: 74,
        color: Color.colorGray,
        fontSize: FontSize.size_xl,
        height: 23,
        top: 10,
        fontFamily: FontFamily.interLight,
        textAlign: "left",
        fontStyle: "italic",
        position: "absolute",
    },
    id2: {
        top: 268,
        left: 49,
    },
    view3: {
        top: 200,
        left: 47,
    },
    text7: {
        top: 107,
        left: 32,
        width: 98,
        height: 29,
        textAlign: "left",
        color: Color.colorBlack,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        fontStyle: "italic",
        fontSize: FontSize.size_5xl,
        position: "absolute",
    },
    rectangleView: {
        backgroundColor: Color.colorGainsboro,
        left: 0,
        top: 0,
        height: 36,
    },
    epbackIcon: {
        width: 20,
        height: 20,
        left: 5,
        overflow: "hidden",
    },
    text8: {
        left: 25,
        textAlign: "center",
        width: 64,
        height: 21,
        fontSize: FontSize.size_mid,
        top: 8,
        color: Color.colorBlack,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
    },
    view4: {
        left: 64,
        top: 632,
        height: 36,
    },
    child1: {
        backgroundColor: Color.colorOrangered,
        left: 0,
        top: 0,
    },
    text9: {
        top: 6,
        left: 17,
        height: 21,
    },
    view5: {
        left: 198,
        top: 632,
        height: 36,
    },
    view: {
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
    },
});

export default Frame10;
