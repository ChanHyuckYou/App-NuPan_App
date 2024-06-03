import * as React from "react";
import {Text, StyleSheet, View, TouchableOpacity, SafeAreaView} from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import {Dimensions} from "react-native";
import {topPercentage} from "./Window";

// 기기의 너비와 높이를 가져옵니다.

const {width, height} = Dimensions.get("window");
const AppMain = ({}) => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.view}>
        {/*<View style={styles.view}>*/}
            <Text style={styles.appNupan}>App-nupan</Text>
            <View style={styles.iconContainer}>
                <Image style={styles.view1}
                       contentFit="cover"
                       source={require("../assets/IconSample.png")}/>
                <Text style={[styles.appNupan2, styles.appFlexBox]}>
                    App-nupan으로 손쉽게 메뉴를 주문해보세요!
                </Text>
            </View>

            <View style={[styles.view2, styles.view2Layout]}>
                <TouchableOpacity
                    style={[styles.child, styles.childPosition]}
                    onPress={() => navigation.navigate('AppLogin')}>
                    <Text style={[styles.appNupan1, styles.appFlexBox]}>
                        App-nupan 로그인
                    </Text>
                </TouchableOpacity>
            </View>

        {/*</View>*/}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    view2Layout: {
        height: 60,
        width: 180,
        position: "absolute",
    },
    childPosition: {
        left: 0,
        top: 0,
    },
    appFlexBox: {
        textAlign: "center",
        position: "absolute",
    },
    qrLayout: {
        height: 81,
        width: 262,
        position: "absolute",
    },
    qr1Position: {
        height: 30,
        top: 26,
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
    view1: {
        alignSelf: "center",
        width: 250,
        height: 250,
        position: "absolute",
    },
    child: {
        backgroundColor: Color.colorOrangered,
        height: 60,
        width: 180,
        position: "absolute",
    },
    appNupan1: {
        top: 16,
        left: 16,
        fontSize: 18,
        color: Color.colorWhite,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        fontStyle: "italic",
    },
    view2: {
        top: topPercentage(580),
        alignSelf: "center",
    },
    qrChild: {
        borderRadius: Border.br_4xl,
        left: 0,
        top: 0,
    },
    riqrScan2LineIcon: {
        left: 27,
        width: 30,
        overflow: "hidden",
    },
    qr1: {
        left: 80,
        fontSize: FontSize.size_8xl,
        width: 159,
        color: Color.colorWhite,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        fontStyle: "italic",
        textAlign: "left",
    },
    qr: {
        top: 460,
        alignSelf: "center",
    },
    appNupan2: {
        top: 270,
        alignSelf: "center",
        fontSize: FontSize.size_mini,
        fontWeight: "500",
        fontFamily: FontFamily.interMedium,
        color: Color.colorBlack,
    },
    view: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        // position: 'center',
        // justifyContent: 'center', // 수직 방향으로 가운데 정렬
        // alignItems: 'center', // 수평 방향으로 가운데 정렬
        // overflow: "hidden",
        width: "100%",
        height: height,
        marginHorizontal: 0,
    },

    container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Color.colorWhite,
        },
    iconContainer: {
        top: topPercentage(100),
    },

});

export default AppMain;
