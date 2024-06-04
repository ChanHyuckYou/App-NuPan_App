import * as React from "react";
import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize } from "../GlobalStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import {topPercentage} from "./Window";

const OrderConfirm_pay = () => {
    const route = useRoute();
    const userid  = route.params?.userid; // userEmail 기본값을 설정합니다.
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.view}>
            <Text style={[styles.appNupan, styles.appTypo]}>App-nupan</Text>
            <Text style={[styles.text, styles.textFlexBox]}>
                주문하신 음식이 곧 나옵니다.
            </Text>
            <View style={[styles.view1, styles.view1Layout]}>
                <Image
                    style={styles.materialSymbolsfoodBankRouIcon}
                    contentFit="cover"
                    source={require("../assets/material-symbols_food-bank-rounded.png")}
                />
                <Text style={[styles.text2, styles.view1Layout]}>
                    결제가 완료되었습니다.
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("UserPage", { userid })}
                style={[styles.view2, styles.view2Layout]}>
                <View style={[styles.child, styles.view2Layout]} />
                <Text style={[styles.appNupan2, styles.textFlexBox]}>
                    App-nupan 홈으로
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    appTypo: {
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        fontStyle: "italic",
    },
    textFlexBox: {
        textAlign: "center",
        position: "absolute",
    },
    view1Layout: {
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
    text: {
        top: topPercentage(540),
        alignSelf: "center",
        fontSize: FontSize.size_lg,
        fontWeight: "500",
        fontFamily: FontFamily.interMedium,
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
        alignSelf: "center",
        width: 200,
        height: 200,
        top: 0,
        position: "absolute",
        overflow: "hidden",
    },
    text2: {
        top: 221,
        fontSize: FontSize.size_11xl,
        alignSelf: "center",
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
    appNupan2: {
        top: 14,
        alignSelf: "center",
        fontSize: FontSize.size_6xl,
        color: Color.colorWhite,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        fontStyle: "italic",
    },
    view2: {
        top: topPercentage(580),
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

export default OrderConfirm_pay;
