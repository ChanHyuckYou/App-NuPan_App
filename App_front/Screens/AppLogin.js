// 로그인 페이지 AppLogin.js
import * as React from "react";
import {StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView} from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import {useState} from "react";
import axios from "axios";

const AppLogin = () => {
    const navigation = useNavigation();
    const [userEmail, setuserEmail] = useState("");
    const [userPwd, setuserPwd] = useState("");

    function login() {
        if (userEmail.trim() === "") {
            Alert.alert("아이디 입력 확인", "아이디가 입력되지 않았습니다.");
        } else if (userPwd.trim() === "") {
            Alert.alert("비밀번호 입력 확인", "비밀번호가 입력되지 않았습니다.");
        } else {
            // admin과 1234로 바로 로그인 처리
            if (userEmail === "admin" && userPwd === "1234") {
                console.log("관리자로 로그인 성공");
                navigation.navigate('Frame8'); // 성공 시 이동할 페이지
            } else {
                axios.post("http://43.201.92.62/user/login", {
                    userid: userEmail,
                    password: userPwd
                })
                    .then(function (resp) {
                        console.log(resp.data);

                        if (resp.data !== null && resp.data !== "") {
                            console.log("로그인 성공");
                            navigation.navigate('Frame8');
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



    // function login() {
    //     if (userEmail.trim() === "") {
    //         Alert.alert("아이디 입력 확인", "아이디가 입력되지 않았습니다.");
    //     } else if (userPwd.trim() === "") {
    //         Alert.alert("비밀번호 입력 확인", "비밀번호가 입력되지 않았습니다.");
    //     } else {
    //         axios.post("http://43.201.92.62/user/login",
    //             null,
    //             {params: {userid: userEmail, password: userPwd}}
    //         ).then(function (resp) {
    //             console.log(resp.data);
    //
    //             if (resp.data !== null && resp.data !== "") {
    //                 console.log("로그인 성공");
    //                 navigation.navigate('UserPage')
    //             } else {
    //                 Alert.alert("로그인 실패", "아이디나 비밀번호를 확인하세요.");
    //                 setEmail("");
    //                 setPassword("");
    //             }
    //         }).catch(function (err) {
    //             console.log(`Error Message: ${err}`);
    //         })
    //     }
    // }


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
                onPress={() => navigation.navigate('Frame10')}>
                <View style={[styles.view2, styles.viewLayout]}>
                    <View style={[styles.child, styles.childPosition]}/>
                    <Text style={[styles.text1, styles.textTypo]}>{`회원가입`}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Frame10')}>
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
        height: 36,
        width: 267,
        position: "absolute",
    },
    childPosition: {
        left: 0,
        top: 0,
    },
    textTypo: {
        height: 23,
        textAlign: "left",
        color: Color.colorWhite,
        fontSize: FontSize.size_xl,
        top: 6,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        position: "absolute",
    },
    passwordLayout: {
        height: 41,
        width: 267,
        position: "absolute",
    },
    text2Typo: {
        height: 18,
        width: 248,
        fontSize: FontSize.size_mini,
        left: 42,
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
        height: 36,
        width: 267,
        position: "absolute",
    },
    text: {
        left: 105,
        width: 56,
    },
    view1: {
        top: 425,
        left: 47,
    },
    text1: {
        left: 96,
        width: 74,
    },
    view2: {
        top: 605,
        left: 47,
    },
    id: {
        left: 60,
        width: 147,
    },
    view3: {
        top: 507,
        left: 47,
    },
    passwordChild: {
        borderStyle: "solid",
        borderColor: Color.colorOrangered,
        borderWidth: 3,
        left: 0,
        top: 0,
        backgroundColor: Color.colorWhite,
    },
    password1: {
        top: 10,
        left: 13,
        color: Color.colorGray,
        width: 106,
        fontFamily: FontFamily.interLight,
        fontStyle: "italic",
        height: 23,
        textAlign: "left",
        fontSize: FontSize.size_xl,
        position: "absolute",
    },
    password: {
        top: 311,
        left: 47,
    },
    id1: {
        top: 239,
        left: 47,
    },
    appNupan: {
        top: 630,
    },
    text2: {
        top: 530,
    },
    appNupan1: {
        top: 35,
        left: 112,
        fontSize: FontSize.size_5xl,
        width: 150,
        height: 29,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        color: Color.colorBlack,
    },
    id3: {
        top: 200,
        fontSize: FontSize.size_mid,
        width: 130,
        height: 21,
        fontFamily: FontFamily.interLight,
        left: 47,
    },
    view: {
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
    },
});

export default AppLogin;
