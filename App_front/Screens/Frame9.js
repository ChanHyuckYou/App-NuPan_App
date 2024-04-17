import * as React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import {useNavigation} from "@react-navigation/native";

const Frame9 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.view}>
            <View style={styles.view1Position}>
                <View style={[styles.child, styles.view1Position]} />
                <Text style={styles.text}>내가 들렀던 가게</Text>
                <Image
                    style={styles.epbackIcon}
                    contentFit="cover"
                    source={require("../assets/ep_back.png")}
                />
            </View>
            <Text style={styles.text1}>정렬기준은 최근 순입니다.</Text>
            <View style={styles.view2}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Frame13')}>
                <View
                    style={[styles.view3, styles.viewLayout]}>
                    <View style={[styles.item, styles.viewLayout]} />
                    <View style={styles.view4} />
                    <Text style={[styles.text2, styles.textPosition]}>경동대학교</Text>
                    <Text style={[styles.text3, styles.textPosition]}>양주지점</Text>
                    <Text
                        style={[styles.text4, styles.textPosition]}
                    >{`가게주소 - 양주시 고압동... `}</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view1Position: {
        height: 70,
        width: 360,
        left: 0,
        top: 0,
        position: "absolute",
    },
    viewLayout: {
        height: 141,
        width: 360,
        left: 0,
        position: "absolute",
    },
    textPosition: {
        left: 180,
        textAlign: "left",
        fontStyle: "italic",
        color: Color.colorBlack,
        position: "absolute",
    },
    child: {
        backgroundColor: Color.colorOrangered,
    },
    text: {
        left: 74,
        fontSize: FontSize.size_11xl,
        textAlign: "center",
        width: 211,
        height: 36,
        color: Color.colorBlack,
        top: 17,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        position: "absolute",
    },
    epbackIcon: {
        top: 20,
        left: 23,
        width: 30,
        height: 30,
        position: "absolute",
        overflow: "hidden",
    },
    text1: {
        top: 154,
        fontSize: FontSize.size_mid,
        width: 193,
        height: 25,
        textAlign: "left",
        fontStyle: "italic",
        fontFamily: FontFamily.interLight,
        left: 13,
        color: Color.colorBlack,
        position: "absolute",
    },
    item: {
        borderStyle: "solid",
        borderColor: Color.colorBlack,
        borderWidth: 1,
        top: 0,
        height: 141,
        backgroundColor: Color.colorWhite,
    },
    view4: {
        backgroundColor: Color.colorGainsboro,
        width: 143,
        height: 107,
        left: 13,
        top: 17,
        position: "absolute",
    },
    text2: {
        top: 29,
        fontSize: FontSize.size_5xl,
        width: 118,
        height: 29,
        left: 180,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
    },
    text3: {
        top: 64,
        fontSize: FontSize.size_xl,
        left: 180,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
    },
    text4: {
        top: 94,
        fontSize: FontSize.size_sm,
        fontFamily: FontFamily.interLight,
        left: 180,
    },
    view3: {
        top: 0,
        height: 141,
    },
    view5: {
        top: 141,
    },
    view7: {
        top: 282,
    },
    view2: {
        top: 185,
        height: 423,
        width: 360,
        left: 0,
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

export default Frame9;
