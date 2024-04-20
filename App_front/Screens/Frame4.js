import * as React from "react";
import {StyleSheet, View, Text, SafeAreaView} from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Frame4 = () => {
    return (
        <SafeAreaView style={styles.view}>
            <View style={styles.view1Position}>
                <View style={[styles.child, styles.view1Position]} />
                <Text style={styles.text}>직원호출</Text>
                <Image
                    style={[styles.epbackIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/ep_back.png")}
                />
            </View>
            <View style={[styles.view2, styles.viewLayout]}>
                <View style={[styles.item, styles.viewLayout]} />
                <Text style={[styles.text1, styles.textTypo1]}>컵이 필요해요.</Text>
            </View>
            <View style={[styles.view3, styles.viewLayout]}>
                <View style={[styles.item, styles.viewLayout]} />
                <Text style={[styles.text2, styles.textTypo1]}>물이 필요해요.</Text>
            </View>
            <View style={[styles.view4, styles.viewLayout]}>
                <View style={[styles.item, styles.viewLayout]} />
                <Text style={[styles.text3, styles.textTypo1]}>접시가 필요해요.</Text>
            </View>
            <Text style={[styles.text4, styles.textTypo1]}>간편 호출</Text>
            <View style={[styles.view5, styles.view5Layout]}>
                <View style={[styles.child1, styles.view5Layout]} />
                <Image
                    style={[styles.fa6SolidbellConciergeIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/fa6-solid_bell-concierge.png")}
                />
                <Text style={[styles.text5, styles.textTypo]}>직원호출하기</Text>
            </View>
            <Text style={[styles.text6, styles.textTypo]}>
                간편 호출에 원하시는 옵션이 없다면?
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    view1Position: {
        height: 70,
        width: 360,
        position: "absolute",
        left: 0,
        top: 0,
    },
    iconLayout: {
        height: 30,
        width: 30,
        position: "absolute",
        overflow: "hidden",
    },
    viewLayout: {
        height: 60,
        width: 360,
        left: 0,
        position: "absolute",
    },
    textTypo1: {
        height: 23,
        textAlign: "left",
        fontFamily: FontFamily.interRegular,
        color: Color.colorBlack,
        position: "absolute",
    },
    view5Layout: {
        height: 81,
        width: 126,
        position: "absolute",
    },
    textTypo: {
        fontSize: FontSize.size_mid,
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    child: {
        backgroundColor: Color.colorOrangered,
    },
    text: {
        top: 14,
        left: 45,
        fontSize: FontSize.size_11xl,
        fontWeight: "600",
        fontFamily: FontFamily.interSemiBold,
        width: 270,
        height: 56,
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    epbackIcon: {
        top: 20,
        left: 23,
    },
    item: {
        borderStyle: "solid",
        borderColor: Color.colorBlack,
        borderWidth: 1,
        top: 0,
        height: 60,
        backgroundColor: Color.colorWhite,
    },
    text1: {
        width: 149,
        fontSize: FontSize.size_5xl,
        left: 9,
        top: 17,
        height: 23,
        textAlign: "left",
        fontFamily: FontFamily.interRegular,
    },
    view2: {
        top: 190,
    },
    text2: {
        width: 147,
        fontSize: FontSize.size_5xl,
        left: 9,
        top: 17,
        height: 23,
        textAlign: "left",
        fontFamily: FontFamily.interRegular,
    },
    view3: {
        top: 308,
    },
    text3: {
        width: 174,
        fontSize: FontSize.size_5xl,
        left: 9,
        top: 17,
        height: 23,
        textAlign: "left",
        fontFamily: FontFamily.interRegular,
    },
    view4: {
        top: 249,
    },
    text4: {
        top: 147,
        left: 14,
        fontSize: FontSize.size_xl,
        width: 105,
    },
    child1: {
        borderRadius: Border.br_xl,
        backgroundColor: Color.colorGainsboro,
        left: 0,
        height: 81,
        width: 126,
        top: 0,
    },
    fa6SolidbellConciergeIcon: {
        top: 10,
        left: 48,
    },
    text5: {
        top: 49,
        left: 18,
        fontWeight: "700",
        fontFamily: FontFamily.interBold,
    },
    view5: {
        top: 649,
        left: 117,
    },
    text6: {
        top: 608,
        left: 49,
        fontWeight: "500",
        fontFamily: FontFamily.interMedium,
    },
    view: {
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
    },
});

export default Frame4;
