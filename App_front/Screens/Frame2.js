import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Frame2 = () => {
    return (
        <View style={styles.view}>
            <View style={[styles.view1, styles.viewLayout1]}>
                <View style={[styles.child, styles.viewLayout1]} />
                <Text style={styles.text}>주문확정</Text>
                <Image
                    style={styles.epbackIcon}
                    contentFit="cover"
                    source={require("../assets/ep_back.png")}
                />
            </View>
            <Text style={[styles.text1, styles.textTypo1]}>선택한 메뉴</Text>
            <View style={[styles.view2, styles.viewLayout]}>
                <View style={[styles.item, styles.viewLayout]} />
                <View style={[styles.inner, styles.innerBg]} />
                <Text style={[styles.text2, styles.textLayout]}>메뉴1 이름</Text>
                <Text style={[styles.text3, styles.textTypo2]}>8,000₩</Text>
            </View>
            <View style={[styles.view3, styles.viewLayout]}>
                <View style={[styles.item, styles.viewLayout]} />
                <View style={[styles.inner, styles.innerBg]} />
                <Text style={[styles.text2, styles.textLayout]}>메뉴2 이름</Text>
                <Text style={[styles.text3, styles.textTypo2]}>7,000₩</Text>
            </View>
            <View style={[styles.view4, styles.viewLayout1]}>
                <Text style={styles.text6}>총 결제금액</Text>
                <Text style={[styles.text7, styles.textTypo]}>15,000₩</Text>
            </View>
            <View style={[styles.view5, styles.view5Layout]}>
                <View style={[styles.child2, styles.view5Layout]} />
                <Text style={[styles.text8, styles.textTypo]}>즉시 결제</Text>
            </View>
            <View style={[styles.child3, styles.innerBg]} />
            <Text style={[styles.text9, styles.textTypo2]}>추후 결제</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewLayout1: {
        width: 360,
        position: "absolute",
    },
    textTypo1: {
        fontFamily: FontFamily.interRegular,
        fontSize: FontSize.size_xl,
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    viewLayout: {
        height: 100,
        width: 360,
        left: 0,
        position: "absolute",
    },
    innerBg: {
        backgroundColor: Color.colorGainsboro,
        position: "absolute",
    },
    textLayout: {
        height: 29,
        top: 12,
    },
    textTypo2: {
        fontSize: FontSize.size_xl,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        position: "absolute",
    },
    textTypo: {
        fontSize: FontSize.size_5xl,
        textAlign: "center",
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        position: "absolute",
    },
    view5Layout: {
        width: 306,
        height: 52,
        position: "absolute",
    },
    child: {
        backgroundColor: Color.colorOrangered,
        height: 70,
        left: 0,
        top: 0,
    },
    text: {
        top: 16,
        left: 45,
        fontSize: FontSize.size_11xl,
        width: 270,
        height: 56,
        textAlign: "center",
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        color: Color.colorBlack,
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
    view1: {
        height: 72,
        left: 0,
        top: 0,
    },
    text1: {
        top: 112,
        left: -15,
        width: 173,
        height: 30,
    },
    item: {
        borderStyle: "solid",
        borderColor: Color.colorBlack,
        borderWidth: 1,
        top: 0,
        height: 100,
        backgroundColor: Color.colorWhite,
    },
    inner: {
        top: 10,
        left: 18,
        width: 107,
        height: 80,
    },
    text2: {
        left: 164,
        width: 158,
        fontFamily: FontFamily.interRegular,
        fontSize: FontSize.size_xl,
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    text3: {
        top: 59,
        left: 259,
        width: 98,
        height: 31,
    },
    view2: {
        top: 183,
    },
    view3: {
        top: 283,
    },
    text6: {
        top: 2,
        width: 127,
        height: 52,
        fontSize: FontSize.size_5xl,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        left: 0,
        position: "absolute",
    },
    text7: {
        left: 204,
        width: 156,
        height: 51,
        color: Color.colorBlack,
        fontSize: FontSize.size_5xl,
        top: 0,
    },
    view4: {
        top: 592,
        left: 13,
        height: 54,
    },
    child2: {
        backgroundColor: "#4097e8",
        left: 0,
        top: 0,
    },
    text8: {
        left: 41,
        color: Color.colorWhite,
        width: 224,
        height: 29,
        top: 12,
    },
    view5: {
        top: 663,
        left: 27,
    },
    child3: {
        top: 732,
        left: 59,
        width: 241,
        height: 40,
    },
    text9: {
        top: 740,
        left: 123,
        width: 113,
        height: 24,
    },
    view: {
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
    },
});

export default Frame2;
