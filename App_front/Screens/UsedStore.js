import * as React from "react";
import {StyleSheet, View, Text, TouchableOpacity, SafeAreaView} from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import {useNavigation} from "@react-navigation/native";
import {ScrollView} from "native-base";
import {useEffect, useState} from "react";

const UsedStore = () => {
    const [stores, setStores] = useState([]); // 서버로부터 받은 가게 목록을 저장할 상태

    const navigation = useNavigation();

    useEffect(() => {
        fetchStores();
    }, []);

    const fetchStores = async () => {
        try {
            const response = await fetch('http://43.201.92.62/store/11111');
            if (!response.ok) {
                throw new Error('서버 응답 오류');
            }
            const text = await response.text(); // 먼저 텍스트로 응답을 받습니다.
            try {
                const data = JSON.parse(text); // 응답을 JSON으로 파싱합니다.
                setStores(data); // 파싱이 성공하면 상태에 저장
            } catch (error) {
                console.error("JSON 파싱 오류:", error);
                // 이 경우 text는 JSON이 아님. 오류 처리 로직을 추가할 수 있습니다.
            }
        } catch (error) {
            console.error("네트워크 오류:", error);
        }
    };

    return (
        <SafeAreaView style={styles.view}>
            <View style={styles.view1Position}>
                <View style={[styles.child, styles.view1Position]} />
                <Text style={styles.text}>내가 들렀던 가게</Text>
                <TouchableOpacity style={styles.backBtLayout}
                onPress={() => navigation.goBack()}>
                <Image
                    style={styles.epbackIcon}
                    contentFit="cover"
                    source={require("../assets/ep_back.png")}
                />
                </TouchableOpacity>
            </View>
            <Text style={styles.text1}>정렬기준은 최근 순입니다.</Text>
            <ScrollView style={styles.view2}>
                {stores.map((store, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => navigation.navigate('Frame13')}>
                        <View style={[styles.view3, styles.viewLayout]}>
                            <View style={[styles.item, styles.viewLayout]} />
                            <View style={styles.view4} />
                            <Text style={[styles.text2, styles.textPosition]}>{store.storename}</Text>
                            <Text style={[styles.text3, styles.textPosition]}>{store.storeid}</Text>
                            <Text
                                style={[styles.text4, styles.textPosition]}
                            >{`가게주소 - ${store.address}`}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    view1Position: {
        height: 70,
        width: "100%",
        left: 0,
        top: 0,
        position: "absolute",
    },
    viewLayout: {
        height: 141,
        width: "100%",
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
        top: 24,
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
        top: 10,
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
        height: 700,
        width: "100%",
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
    backBtLayout: {
        width: 40,
        height: 80,
    },
});

export default UsedStore;
