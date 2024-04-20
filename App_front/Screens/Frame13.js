import * as React from "react";
import {StyleSheet, View, Text, TouchableOpacity, SafeAreaView} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

const Frame13 = () => {
    const navigation = useNavigation();
    const [showDetails, setShowDetails] = useState(false); // 상세 정보 표시 여부를 관리하는 상태
    return (
        <SafeAreaView style={styles.view}>
            <View style={[styles.view1, styles.viewLayout3]}>
                <View style={[styles.child, styles.itemBorder]} />
                <Text style={[styles.text, styles.textTypo5]}>직원호출</Text>
                <Image
                    style={[styles.fa6SolidbellConciergeIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/fa6-solid_bell-concierge.png")}
                />
            </View>
            <View style={[styles.view2, styles.itemLayout]}>
                <View style={[styles.item, styles.itemLayout]} />
                <Text style={[styles.text1, styles.textTypo6]}>주문확정</Text>
                <Image
                    style={[styles.solarbag5BoldIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/ion_receipt.png")}
                />
            </View>
            <View style={[styles.view3, styles.viewLayout3]}>
                <View style={[styles.child, styles.itemBorder]} />
                <Image
                    style={[styles.ionreceiptIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/jumoon.png")}
                />
                <Text style={[styles.text2, styles.textTypo5]}>주문현황</Text>
            </View>
            {/* 메뉴 클릭 시 상세 정보 표시를 위한 TouchableOpacity 추가 */}
            <View style={[styles.view4, styles.viewPosition]}>
                <TouchableOpacity onPress={() => setShowDetails(!showDetails)}>
                <View style={[styles.view9, styles.viewLayout2]}>
                    <View style={[styles.rectangleView, styles.viewLayout2]} />
                    <Text style={[styles.text3, styles.textTypo4]}>아메리카노</Text>
                    <Text style={[styles.text4, styles.textTypo4]}>더보기..</Text>
                    <Text style={[styles.text5, styles.textTypo6]}>8,000 ₩</Text>

                    <Image source={require("../assets/cofffefe.png")}
                           style={[styles.view6, styles.view6Layout]}/>

                </View>
                </TouchableOpacity>
            </View>
            <View style={[styles.view11, styles.viewLayout1]}>
                <View style={[styles.view12, styles.viewLayout1]}>
                    <View style={styles.viewLayout} />
                    <Text style={[styles.text12, styles.textTypo3]}>사이드</Text>
                </View>
                <View style={[styles.view14, styles.viewLayout1]}>
                    <View style={styles.viewLayout} />
                    <Text style={[styles.text12, styles.textTypo3]}>주메뉴</Text>
                </View>
                <View style={[styles.view16, styles.viewLayout1]}>
                    <View style={[styles.view17, styles.viewLayout]} />
                    <Text style={[styles.text14, styles.textTypo3]}>추천메뉴</Text>
                </View>
            </View>
            <View style={[styles.view18, styles.viewPosition]}>
                <View style={[styles.child3, styles.viewPosition]} />
                <Text style={[styles.text15, styles.textTypo2]}>매장이름</Text>
                <Text style={[styles.text16, styles.textTypo2]}>(번호)</Text>
            </View>
            {showDetails && (
                <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                    <View style={[styles.groupChild, styles.groupChildLayout]} />
                    <Text style={[styles.text17, styles.textTypo1]}>아이스 아메리카노</Text>

                        <TouchableOpacity style={[styles.groupItem, styles.groupLayout]} onPress={() => setShowDetails(false)}>
                        <Text style={[styles.textTypo]}>취소</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={[styles.groupInner, styles.groupLayout]} onPress={() => navigation.navigate('Frame2')}>
                            <Text style={[ styles.textTypo]}>담기</Text>
                        </TouchableOpacity>

                    <Image
                        style={[styles.image1Icon, styles.view6Layout]}
                        contentFit="cover"
                        source={require("../assets/testcoffee.png")}
                    />
                    <Text style={[styles.text20, styles.textTypo1]}>
                        “아메리카노는 에스프레소의 진한 풍미를 잘 느낄 수 있는 음료입니다. ”
                        아메리카노는 에스프레소 샷 두 개를 추출하여 바로 컵에 붓고, 그 위에
                        뜨거운 물을 재빠르게 부어 얇은 크레마 층이 형성되는 음료입니다.
                    </Text>
                    <Text style={styles.text21}>8,000₩</Text>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    viewLayout3: {
        height: 73,
        position: "absolute",
        width: 118,
    },
    itemBorder: {
        borderWidth: 1,
        borderStyle: "solid",
        top: 0,
    },
    textTypo5: {
        height: 20,
        width: 82,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        fontSize: FontSize.size_xl,
        position: "absolute",
    },
    iconLayout: {
        height: 30,
        width: 30,
        position: "absolute",
        overflow: "hidden",
    },
    itemLayout: {
        height: 87,
        width: 115,
        position: "absolute",
    },
    textTypo6: {
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        fontSize: FontSize.size_xl,
        position: "absolute",
    },
    viewPosition: {
        width: 360,
        left: 0,
        position: "absolute",
    },
    viewLayout2: {
        height: 142,
        width: 360,
        left: 0,
        position: "absolute",
    },
    textTypo4: {
        fontFamily: FontFamily.interLight,
        fontWeight: "300",
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    view6Layout: {
        width: 119,
        position: "absolute",
    },
    viewLayout1: {
        height: 53,
        position: "absolute",
    },
    textTypo3: {
        height: 33,
        fontSize: FontSize.size_4xl,
        top: 10,
        fontFamily: FontFamily.interLight,
        fontWeight: "300",
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    viewLayout: {
        borderRadius: Border.br_xl,
        height: 53,
        backgroundColor: Color.colorGainsboro,
        left: 0,
        top: 0,
        width: 118,
        position: "absolute",
    },
    textTypo2: {
        height: 56,
        fontSize: FontSize.size_11xl,
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    groupChildLayout: {
        height: 409,
        width: 270,
        position: "absolute",
    },
    textTypo1: {
        textAlign: "left",
        fontFamily: FontFamily.interRegular,
        color: Color.colorBlack,
        position: "absolute",
    },
    groupLayout: {
        height: 40,
        width: 270,
        left: 0,
        position: "absolute",
    },
    textTypo: {
        fontSize: FontSize.size_5xl,
        left: 119,
        textAlign: "left",
        fontFamily: FontFamily.interRegular,
        color: Color.colorBlack,
        position: "absolute",
    },
    child: {
        borderColor: Color.colorBlack,
        backgroundColor: Color.colorGainsboro,
        left: 0,
        height: 73,
        position: "absolute",
        width: 118,
        borderWidth: 1,
    },
    text: {
        top: 43,
        left: 19,
    },
    fa6SolidbellConciergeIcon: {
        top: 8,
        left: 45,
    },
    view1: {
        left: 242,
        top: 727,
        height: 73,
        position: "absolute",
    },
    item: {
        borderRadius: 30,
        borderWidth: 1,
        borderStyle: "solid",
        top: 0,
        borderColor: Color.colorBlack,
        backgroundColor: Color.colorGainsboro,
        left: 0,
    },
    text1: {
        top: 51,
        left: 21,
        width: 74,
        height: 25,
    },
    solarbag5BoldIcon: {
        top: 11,
        left: 43,
    },
    view2: {
        top: 713,
        left: 122,
    },
    ionreceiptIcon: {
        top: 4,
        left: 44,
    },
    text2: {
        top: 44,
        left: 18,
    },
    view3: {
        left: 0,
        top: 727,
        height: 73,
        position: "absolute",
    },
    rectangleView: {
        borderColor: Color.colorDimgray,
        borderWidth: 1,
        borderStyle: "solid",
        top: 0,
        backgroundColor: Color.colorWhite,
    },
    text3: {
        left: 133,
        width: 184,
        height: 41,
        fontSize: FontSize.size_11xl,
        fontFamily: FontFamily.interLight,
        fontWeight: "300",
        top: 18,
    },
    text4: {
        top: 58,
        left: 142,
        fontSize: FontSize.size_lg,
        width: 131,
        height: 26,
    },
    text5: {
        top: 106,
        left: 233,
        height: 22,
        width: 118,
    },
    view6: {
        height: 107,
        left: 13,
        top: 18,
        width: 119,
        backgroundColor: Color.colorGainsboro,
    },
    view5: {
        top: 284,
    },
    view7: {
        top: 142,
    },
    view9: {
        top: 0,
    },
    view4: {
        top: 203,
        height: 426,
    },
    text12: {
        left: 12,
        width: 93,
    },
    view12: {
        left: 240,
        top: 0,
        width: 118,
    },
    view14: {
        left: 120,
        top: 0,
        width: 118,
    },
    view17: {
        borderWidth: 3,
        borderColor: Color.colorBlack,
        borderStyle: "solid",
        borderRadius: Border.br_xl,
    },
    text14: {
        left: 15,
        width: 87,
    },
    view16: {
        left: 0,
        top: 0,
        width: 118,
    },
    view11: {
        top: 85,
        width: 358,
        left: 0,
    },
    child3: {
        height: 70,
        backgroundColor: Color.colorOrangered,
        top: 0,
    },
    text15: {
        top: 16,
        fontWeight: "600",
        fontFamily: FontFamily.interSemiBold,
        width: 270,
        height: 56,
        left: 38,
    },
    text16: {
        top: 15,
        left: 260,
        fontWeight: "500",
        fontFamily: FontFamily.interMedium,
        height: 56,
        width: 82,
    },
    view18: {
        height: 72,
        top: 0,
    },
    groupChild: {
        left: 0,
        top: 0,
        backgroundColor: Color.colorWhite,
    },
    text17: {
        top: 108,
        left: 148,
        fontSize: FontSize.size_mini,
        width: 120,
        height: 25,
    },
    groupItem: {
        top: 366,
        backgroundColor: Color.colorGainsboro,
    },
    text18: {
        top: 372,
    },
    groupInner: {
        top: 326,
        backgroundColor: Color.colorOrangered,
    },
    text19: {
        top: 332,
    },
    image1Icon: {
        top: 39,
        left: 14,
        height: 159,
    },
    text20: {
        top: 207,
        fontSize: 13,
        width: 250,
        height: 121,
        left: 13,
    },
    text21: {
        top: 129,
        left: 189,
        fontFamily: FontFamily.interRegular,
        textAlign: "center",
        color: Color.colorBlack,
        fontSize: FontSize.size_xl,
        position: "absolute",
    },
    rectangleParent: {
        top: 206,
        left: 38,
        height: 409,
    },
    view: {
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
    },
});

export default Frame13;
