import * as React from "react";
import {Text, StyleSheet, View, SafeAreaView} from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const OrderConfirm_cash = () => {
    return (
        <SafeAreaView style={styles.view}>
            <Text style={[styles.appNupan, styles.appTypo]}>App-nupan</Text>
            <Text style={[styles.text, styles.textFlexBox]}>
                나가기 전 꼭 결제해 주세요.
            </Text>
            <Text style={[styles.text1, styles.textFlexBox]}>추가주문을 원하면?</Text>
            <View style={[styles.view1, styles.view1Layout]}>
                <Image
                    style={styles.materialSymbolsfoodBankRouIcon}
                    contentFit="cover"
                    source={require("../assets/material-symbols_food-bank-rounded.png")}
                />
                <Text style={[styles.text2, styles.view1Layout]}>
                    주문이 완료되었습니다.
                </Text>
            </View>
            <View style={[styles.view2, styles.view2Layout]}>
                <View style={[styles.child, styles.view2Layout]} />
                <Text style={[styles.appNupan1, styles.textFlexBox]}>
                    App-nupan 홈으로
                </Text>
            </View>
            <View style={[styles.view3, styles.itemLayout]}>
                <View style={[styles.item, styles.itemLayout]} />
                <Text style={[styles.text3, styles.textFlexBox]}>메뉴화면으로</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    appTypo: {
        height: 29,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        fontStyle: "italic",
    },
    textFlexBox: {
        textAlign: "center",
        position: "absolute",
    },
    view1Layout: {
        width: 304,
        position: "absolute",
    },
    view2Layout: {
        height: 57,
        width: 253,
        position: "absolute",
    },
    itemLayout: {
        height: 47,
        width: 198,
        position: "absolute",
    },
    appNupan: {
        top: 35,
        alignSelf: "center",
        width: 136,
        textAlign: "left",
        color: Color.colorBlack,
        fontSize: FontSize.size_5xl,
        position: "absolute",
    },
    text: {
        top: 523,
        alignSelf: "center",
        fontSize: FontSize.size_lg,
        fontWeight: "500",
        fontFamily: FontFamily.interMedium,
        width: 207,
        height: 22,
        color: Color.colorBlack,
        textAlign: "center",
    },
    text1: {
        top: 647,
        alignSelf: "center",
        fontSize: FontSize.size_mid,
        fontFamily: FontFamily.interLight,
        width: 149,
        height: 25,
        color: Color.colorBlack,
        textAlign: "center",
        fontStyle: "italic",
    },
    materialSymbolsfoodBankRouIcon: {
        left: 47,
        width: 200,
        height: 200,
        top: 0,
        position: "absolute",
        overflow: "hidden",
    },
    text2: {
        top: 221,
        fontSize: FontSize.size_11xl,
        height: 36,
        left: 14,
        textAlign: "left",
        color: Color.colorBlack,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        fontStyle: "italic",
    },
    view1: {
        top: 180,
        alignSelf: "center",
        height: 257,
    },
    child: {
        backgroundColor: Color.colorOrangered,
        left: 0,
        top: 0,
    },
    appNupan1: {
        top: 14,
        left: 16,
        fontSize: FontSize.size_6xl,
        color: Color.colorWhite,
        width: 222,
        height: 29,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        fontStyle: "italic",
    },
    view2: {
        top: 559,
        alignSelf: "center",
    },
    item: {
        backgroundColor: Color.colorGainsboro,
        left: 0,
        top: 0,
    },
    text3: {
        top: 11,
        left: 27,
        width: 144,
        height: 32,
        color: Color.colorBlack,
        textAlign: "center",
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        fontStyle: "italic",
        fontSize: FontSize.size_5xl,
    },
    view3: {
        top: 682,
        alignSelf: "center",
    },
    view: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
    },
});

export default OrderConfirm_cash;
