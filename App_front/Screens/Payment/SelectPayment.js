import * as React from "react";
import {Text, StyleSheet, View, TouchableOpacity, Dimensions} from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily } from "../../GlobalStyles";
import {useState} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import {heightPercentage, topPercentage} from "../Window";
import orderList from "../OrderList";

const {width, height} = Dimensions.get("window");
const SelectPayment  = ({}) => {
    const [PaymentType, setPaymentType] = useState('');
    const route = useRoute();
    const { totalPrice, userid } = route.params;
    const orderList = route.params?.orderList;
    const orderid = route.params?.orderid;
    const storeid = route.params?.storeid;
    const tablenumber = route.params?.tablenumber;
    const navigation = useNavigation();
    const handlePaymentType = (type) => {
        setPaymentType(type);
        console.log(type);  // PaymentType 대신 type을 출력
        console.log("결제하는 유저아이디 :",userid)
        navigation.navigate("PAY", { payType: type, totalPrice: totalPrice, userid: userid ,orderList,orderid, storeid, tablenumber});
        console.log("보내는 금액 : ", totalPrice);
    };

    return (
        <View style={styles.view}>
            <Text style={[styles.text, styles.textTypo]}>
                결제수단을 선택해 주세요.
            </Text>
            <TouchableOpacity onPress={() => handlePaymentType("tosspay")}>
                <Image
                    style={[styles.tosspayBtIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../../assets/TossPay-bt.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePaymentType("kakaopay")}>
                <Image
                    style={[styles.kakaopayBtIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../../assets/KakaoPay-bt.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.gobackBt, styles.gobackLayout]}
                              onPress={() => navigation.goBack()}>
                <View style={[styles.gobackBtChild, styles.gobackLayout]} />
                <Text style={[styles.goback, styles.textTypo]}>이전화면</Text>
                <Image
                    style={styles.epbackIcon}
                    contentFit="cover"
                    source={require("../../assets/ep_back.png")}
                />
            </TouchableOpacity>
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
        alignSelf: "center",
        position: "absolute",
    },
    appNupan: {
        top: topPercentage(50),
        alignSelf: "center",
        fontSize: 24,
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
        top: topPercentage(637),
        alignSelf: "center",
    },
    text: {
        top: topPercentage(154),
        alignSelf: "center",
        fontWeight: "500",
        fontFamily: FontFamily.interMedium,
    },
    tosspayBtIcon: {
        top: topPercentage(370),
    },
    kakaopayBtIcon: {
        top: topPercentage(245),
    },
    view: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        width: "100%",
        height: height,
        overflow: "hidden",
    },
});

export default SelectPayment;
