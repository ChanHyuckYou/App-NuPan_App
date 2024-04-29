// 회원가입 페이지 Sign_In.js
import * as React from "react";
import {Text, StyleSheet, View, TouchableOpacity, Alert, TextInput, SafeAreaView} from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import {useState} from "react";
import axios from "axios";

const Sign_In = () => {
    const navigation = useNavigation();

    const [userEmail, setuserEmail] = useState('');
    // const [userId, setUserId] = useState('');
    const [userPwd, setuserPwd] = useState('');
    const [userName, setuserName] = useState('');
    const [usercontact , setuserContact] = useState('');

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
            const response = await axios.post('http://43.201.92.62/user/register', {
                userid: userEmail,
                password: userPwd,
                username: userName,
                usercontact: '1'

            });

            // 성공적으로 회원가입이 완료되면, 로그인 화면이나 메인 화면으로 이동
            navigation.navigate('Frame7');
            Alert.alert("회원가입에 성공하였습니다.")
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
        <SafeAreaView style={styles.view}>
            <Text style={styles.appNupan}>App-nupan</Text>
            <Text style={[styles.text, styles.idTypo]}>이름</Text>
            <Text style={[styles.text1, styles.textTypo3]}>비밀번호</Text>
            <Text style={[styles.text2, styles.textTypo3]}>비밀번호 확인</Text>
            <Text style={[styles.id, styles.idTypo]}>ID</Text>
            <View style={[styles.view1, styles.viewLayout1]}>
                <View style={[styles.child, styles.childBorder]} />
                <TextInput style={[styles.text3, styles.textLayoutpwd]}
                           placeholder={"비밀번호"}
                           value={userPwd}
                           secureTextEntry={true}
                           onChangeText={setuserPwd}></TextInput>
            </View>
            <View style={[styles.view2, styles.viewLayout1]}>
                <View style={[styles.child, styles.childBorder]} />
                <TextInput style={[styles.text4, styles.textLayoutpwd]}
                           placeholder={"비밀번호 확인"}
                           secureTextEntry={true}
                ></TextInput>
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
                    value={userEmail}               //value 지정해서 email ㅇㅣㅂㄹㅕㄱ ㅂㅏㄷㄱㅣ
                    onChangeText={setuserEmail}>

                </TextInput>
            </View>
            <View style={[styles.view3, styles.id2Layout]}>
                <View style={[styles.idItem, styles.id2Layout]} />
                <TextInput
                    style={[styles.id3, styles.textLayout]}
                    placeholder={"NickName"}
                    onChangeText={setuserName}>
                </TextInput>
            </View>
            <Text style={styles.text7}>회원가입</Text>
            <TouchableOpacity style={[styles.view4, styles.viewLayout]} onPress={() => navigation.goBack()}>
                <View style={[styles.rectangleView, styles.viewLayout]} />
                <Image
                    style={[styles.epbackIcon, styles.text8Position]}
                    contentFit="cover"
                    source={require("../assets/ep_back.png")}
                />
                <Text style={[styles.text8, styles.text8Position]}>이전화면</Text>
            </TouchableOpacity>

            <TouchableOpacity       //다음으로 버튼 누를 시 HandleSineup
                onPress={handleSignUp}
                style={[styles.view5, styles.viewLayout]}>
                <View style={[styles.child1, styles.viewLayout]} />
                <Text style={[styles.text9, styles.textTypo]}>다음으로</Text>
            </TouchableOpacity>

        </SafeAreaView>
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
        width: 200,
        height: 23,
        top: 10,
    },
    textLayoutpwd: {
        width: 400,
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
        width: 150,
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

export default Sign_In;
