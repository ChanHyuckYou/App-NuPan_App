import * as React from "react";
import {Text, StyleSheet, View, TouchableOpacity, Alert, TextInput} from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import {useState} from "react";
import axios from "axios";

const Frame10 = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    // const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    // const [passwordConfirm, setPasswordConfirm] = useState('');

    // const handleSignUp = () => {
        // 비밀번호와 비밀번호 확인이 일치하는지 확인
        // if (password !== passwordConfirm) {
        //     Alert.alert('비밀번호 오류', '비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        //     return;
        // }

        // 사용자 정보를 서버로 전송
    const handleSignUp = async () => {
        try {
            const response = await axios.post('http://10.0.2.2:8080/user/create', {
                email: email,
                password: password,
            });

            // 성공적으로 회원가입이 완료되면, 로그인 화면이나 메인 화면으로 이동
            navigation.navigate('Frame7');
        } catch (error) {
            if (error.response) {
                // 서버로부터 응답을 받았지만 응답 코드가 에러인 경우
                console.error("HTTP Error:", error.response.status, error.response.data);
                Alert.alert('HTTP 오류', `HTTP 오류가 발생했습니다: ${error.response.status}, 메시지: ${error.response.data}`);
            } else if (error.request) {
                // 요청을 보냈지만 응답을 받지 못한 경우
                console.error("Request Error:", error.request);
                Alert.alert('요청 오류', '서버로부터 응답을 받지 못했습니다.');
            } else {
                // 요청을 보내기 전에 발생한 오류
                console.error("Axios Error:", error.message);
                Alert.alert('네트워크 오류', '요청을 보내는 도중 오류가 발생했습니다.');
            }
        }
    };
    return (
        <View style={styles.view}>
            <Text style={styles.appNupan}>App-nupan</Text>
            <Text style={[styles.text, styles.idTypo]}>이름</Text>
            <Text style={[styles.text1, styles.textTypo3]}>비밀번호</Text>
            <Text style={[styles.text2, styles.textTypo3]}>비밀번호 확인</Text>
            <Text style={[styles.id, styles.idTypo]}>ID</Text>
            <View style={[styles.view1, styles.viewLayout1]}>
                <View style={[styles.child, styles.childBorder]} />
                <TextInput style={[styles.text3, styles.textLayout]}
                           placeholder={"비밀번호"}
                           value={password}
                           onChangeText={setPassword}></TextInput>
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
                <TextInput
                    style={[styles.id3, styles.textLayout]}
                    placeholder="ID"
                value={email}               //value 지정해서 email ㅇㅣㅂㄹㅕㄱ ㅂㅏㄷㄱㅣ
                onChangeText={setEmail}>

                </TextInput>
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

                <TouchableOpacity       //다음으로 버튼 누를 시 HandleSineup
                    onPress={handleSignUp}
                    style={[styles.view5, styles.viewLayout]}>
                    <View style={[styles.child1, styles.viewLayout]} />
                    <Text style={[styles.text9, styles.textTypo]}>다음으로</Text>
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
