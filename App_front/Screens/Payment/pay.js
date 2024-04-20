import React, {useState} from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import IMP from 'iamport-react-native';
import {useNavigation} from "@react-navigation/native";


const userCode = 'imp42271774'; // 아임포트 관리자 페이지에서 발급받은 가맹점 식별코드를 입력하세요.

const Payment = ({ route }) => {
    const navigation = useNavigation();
    const { payType } = route.params;
    console.log(payType);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <IMP.Payment
                userCode={userCode}
                data={{
                    pg: payType, // PG사
                    pay_method: 'card', // 결제수단
                    name: '주문명:결제테스트', // 주문명
                    merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
                    amount: '1000', // 결제금액
                    buyer_email: 'iamport@siot.do', // 구매자 이메일
                    buyer_name: '구매자이름', // 구매자 이름
                    buyer_tel: '010-1234-5678', // 구매자 전화번호
                    buyer_addr: '서울특별시 강남구 삼성동', // 구매자 주소
                    buyer_postcode: '123-456', // 구매자 우편번호
                    app_scheme: 'example', // 앱 URL scheme
                }}
                callback={response => navigation.navigate("Frame5")} // 결제 완료 후 콜백 함수
            />
        </SafeAreaView>
    );
};

export default Payment;
