// 로그인 페이지 AppLogin.js
import * as React from "react";
import {StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView} from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import {useState} from "react";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {heightPercentage, leftPercentage, topPercentage, widthPercentage} from "./Window";

const AppLogin = () => {
    const navigation = useNavigation();
    const [userEmail, setuserEmail] = useState("");
    const [userPwd, setuserPwd] = useState("");
    // 로그인 성공 후


    function login() {
        if (userEmail.trim() === "") {
            Alert.alert("아이디 입력 확인", "아이디가 입력되지 않았습니다.");
        } else if (userPwd.trim() === "") {
            Alert.alert("비밀번호 입력 확인", "비밀번호가 입력되지 않았습니다.");
        } else {
            // admin과 1234로 바로 로그인 처리
            if (userEmail === "admin" && userPwd === "1234") {
                console.log("관리자로 로그인 성공");
                navigation.navigate('UserPage', { userEmail: userEmail });
            } else {
                axios.post("http://43.201.92.62/user/login", {
                    userid: userEmail,
                    password: userPwd
                })
                    .then(function (resp) {
                        console.log(resp.data);

                        if (resp.data !== null && resp.data !== "") {
                            console.log("로그인 성공");
                            // 로그인 성공 후
                            // AsyncStorage.setItem('userEmail', userEmail);
                            navigation.navigate('UserPage', { userEmail: userEmail });
                        } else {
                            Alert.alert("로그인 실패", "아이디나 비밀번호를 확인하세요.");
                            setuserEmail("");
                            setuserPwd("");
                        }
                    })
                    .catch(function (err) {
                        console.log(`Error Message: ${err}`);
                        Alert.alert('로그인 실패', '로그인 처리 중 오류가 발생했습니다.');
                    });
            }
        }
    }



    return (
        <SafeAreaView style={styles.view}>
            {/*<TouchableOpacity onPress={() => navigation.navigate('UserPage')}>*/}
            <TouchableOpacity
                onPress={() => login()}
                style={[styles.view1, styles.viewLayout]}>
                <View style={[styles.child, styles.childPosition]}/>
                <Text style={[styles.text, styles.textTypo]}>로그인</Text>
            </TouchableOpacity>
            {/*</TouchableOpacity>*/}
            <TouchableOpacity
                onPress={() => navigation.navigate('Sign_In')}>
                <View style={[styles.view2, styles.viewLayout]}>
                    <View style={[styles.child, styles.childPosition]}/>
                    <Text style={[styles.text1, styles.textTypo]}>{`회원가입`}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ID')}>
                <View style={[styles.view3, styles.viewLayout]}>
                    <View style={[styles.child, styles.childPosition]}/>
                    <Text style={[styles.id, styles.textTypo]}>{`ID/비밀번호 찾기`}</Text>
                </View>
            </TouchableOpacity>
            <View style={[styles.password, styles.passwordLayout]}>
                <View style={[styles.passwordChild, styles.passwordLayout]}/>
                <TextInput style={styles.password1}
                           placeholder="Password"
                           onChangeText={(userPwd) => setuserPwd(userPwd)}
                           secureTextEntry={true}></TextInput>
            </View>
            <View style={[styles.id1, styles.passwordLayout]}>
                <View style={[styles.passwordChild, styles.passwordLayout]}/>
                <TextInput style={styles.password1}
                           onChangeText={(userEmail) => setuserEmail(userEmail)}
                           placeholder={"ID"}></TextInput>
            </View>
            <Text style={[styles.appNupan, styles.text2Typo]}>
                App-nupan 계정이 없으신가요?
            </Text>
            <Text style={[styles.text2, styles.text2Typo]}>
                계정이 기억이 안나시나요?
            </Text>
            <Text style={[styles.appNupan1, styles.id3Typo]}>App-nupan</Text>
            <Text style={[styles.id3, styles.id3Typo]}>ID/ 비밀번호 입력</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    viewLayout: {
        width: widthPercentage(267),
        height: heightPercentage(36),
        position: "absolute",
    },
    childPosition: {
        top: topPercentage(0), // 기존에 고정값으로 사용되던 top: 50 대신
        left: leftPercentage(0),
    },
    textTypo: {
        height: heightPercentage(23),
        width: widthPercentage(400),
        textAlign: "left",
        color: Color.colorWhite,
        fontSize: FontSize.size_xl,
        top: topPercentage(5),
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        position: "absolute",
    },
    passwordLayout: {
        width: widthPercentage(267),
        height: heightPercentage(41),
        position: "absolute",
    },
    text2Typo: {
        width: widthPercentage(268),
        height: heightPercentage(18),
        fontSize: FontSize.size_mini,
        alignSelf: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.interLight,
        fontStyle: "italic",
        textAlign: "left",
        position: "absolute",
    },
    id3Typo: {
        color: Color.colorBlack,
        fontStyle: "italic",
        textAlign: "left",
        position: "absolute",
    },
    child: {
        backgroundColor: Color.colorOrangered,
        width: widthPercentage(267),
        height: heightPercentage(36),
        position: "absolute",
    },
    text: {
        left: leftPercentage(105),
        width: widthPercentage(56),
    },
    view1: {

        top: topPercentage(425),
        alignSelf: "center",
    },
    text1: {
        left: leftPercentage(96),
        width: widthPercentage(74),

    },
    view2: {
        top: topPercentage(605),
        alignSelf: "center",
    },
    id: {
        left: leftPercentage(65),
        width: widthPercentage(147),

    },
    view3: {
        top: topPercentage(507),
        alignSelf: "center",
    },
    passwordChild: {
        borderStyle: "solid",
        borderColor: Color.colorOrangered,
        borderWidth: 3,
        top: topPercentage(0), // 기존에 고정값으로 사용되던 top: 50 대신
        // top: 0,
        left: leftPercentage(0),
        backgroundColor: Color.colorWhite,
    },
    password1: {
        top: topPercentage(10), // 기존에 고정값으로 사용되던 top: 50 대신
        left: leftPercentage(13),
        color: Color.colorBlack,
        fontFamily: FontFamily.interLight,
        fontStyle: "italic",
        width: widthPercentage(245),
        height: heightPercentage(23),
        textAlign: "left",
        fontSize: FontSize.size_xl,
        position: "absolute",
    },
    password: {
        top: topPercentage(311), // 기존에 고정값으로 사용되던 top: 50 대신
        alignSelf: "center",

    },
    id1: {
        top: topPercentage(239), // 기존에 고정값으로 사용되던 top: 50 대신
        alignSelf: "center",
    },
    appNupan: {
        top: topPercentage(571),
    },
    text2: {
        top: topPercentage(479),
    },
    appNupan1: {
        top: topPercentage(35),
        alignSelf: "center",
        fontSize: FontSize.size_5xl,
        width: widthPercentage(136),
        height: heightPercentage(29),
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        color: Color.colorBlack,
    },
    id3: {
        top: topPercentage(200),
        fontSize: FontSize.size_mid,
        width: widthPercentage(130),
        height: heightPercentage(21),
        fontFamily: FontFamily.interLight,
        left: leftPercentage(60),
    },
    view: {
        flex: 1,
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
    },
});

export default AppLogin;
