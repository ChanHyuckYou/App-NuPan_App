import React, {useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import IMP from 'iamport-react-native';
import {useNavigation, useRoute} from "@react-navigation/native";


const userCode = 'imp42271774'; // 아임포트 관리자 페이지에서 발급받은 가맹점 식별코드를 입력하세요.

const Payment = ({  }) => {
    const navigation = useNavigation();
    const route = useRoute();
    const { payType, totalPrice, userEmail } = route.params;

    useEffect(() => {
        console.log("결제 유형:", payType);
        console.log("총 금액:", totalPrice);
        console.log("결제한 userid : ", userEmail)
    }, [payType, totalPrice]);


    // 결제 후 콜백 함수
    const onPaymentResult = async (response) => {
        console.log("받은금액 :", totalPrice)
        // 결제 성공 여부 확인
        if (response.success) {
            try {
                // 서버로 결제 정보 전송
                const response = await fetch('"http://43.201.92.62/order/complete_payment"', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        // 서버에 전송할 결제 정보. 필요에 따라 수정하세요.
                        userid: userEmail,
                        merchant_uid: response.merchant_uid,
                        amount: response.amount,
                        buyer_email: response.buyer_email,
                        buyer_name: response.buyer_name,
                        buyer_tel: response.buyer_tel,
                        buyer_addr: response.buyer_addr,
                        buyer_postcode: response.buyer_postcode,
                        pay_method: response.pay_method,
                        pg: response.pg,
                    }),
                });
                const data = await response.json();
                console.log(data);
            } catch(error) {
                console.error('결제 정보 전송 실패:', error);
            }
        } else {
            // 결제 실패 처리
            console.log('결제 실패:', response.error_msg);
        }

        // 결제 프로세스 완료 후 다음 화면으로 네비게이션
        navigation.navigate("AppMain");
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <IMP.Payment
                userCode={userCode}
                data={{
                    pg: payType, // PG사
                    pay_method: 'card', // 결제수단
                    name: '주문명:결제테스트', // 주문명
                    merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
                    amount: totalPrice, // 결제금액
                    buyer_email: 'iamport@siot.do', // 구매자 이메일
                    buyer_name: '구매자이름', // 구매자 이름
                    buyer_tel: '010-1234-5678', // 구매자 전화번호
                    buyer_addr: '서울특별시 강남구 삼성동', // 구매자 주소
                    buyer_postcode: '123-456', // 구매자 우편번호
                    app_scheme: 'example', // 앱 URL scheme
                }}
                callback={onPaymentResult} // 결제 완료 후 콜백 함수로 onPaymentResult 사용
            />
        </SafeAreaView>
    );
};

export default Payment;
