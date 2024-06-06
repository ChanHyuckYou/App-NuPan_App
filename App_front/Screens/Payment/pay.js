import React, { useEffect } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import IMP from 'iamport-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const userCode = 'imp42271774'; // 아임포트 관리자 페이지에서 발급받은 가맹점 식별코드를 입력하세요.

const Payment = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { payType, totalPrice, userid, orderList, orderid, storeid, tablenumber } = route.params;

    useEffect(() => {
        console.log("orderid : ", orderid, "\nstoreid : ", storeid, "\ntablenumber", tablenumber);
        console.log("orderList:", orderList); // orderList 데이터 확인
    }, [orderList]);

    const getCurrentTime = () => {
        const currentDateTime = new Date();
        const koreaTime = new Date(currentDateTime.getTime() + 9 * 60 * 60 * 1000); // UTC+9
        return koreaTime.toISOString();
    };

    const onPaymentResult = async (response) => {
        console.log('결제 응답:', response); // 응답 데이터 확인

        // 결제 성공 여부 확인
        if (response.imp_success === 'true') {
            try {
                const currentOrderTime = getCurrentTime(); // 한국 현재 시간

                // 서버로 전송할 결제 정보 구성
                const paymentData = {
                    userid: userid,
                    orderid: orderid, // orderid 추가
                    pg: payType,
                    merchant_uid: currentOrderTime,
                    order_details: {
                        storeid: storeid,
                        tablenumber: tablenumber,
                        amount: totalPrice,
                        menu_items: orderList.map(item => ({
                            productname: item.productname,
                            price: item.price,
                            quantity: item.quantity,
                        })),
                    },
                };

                // 전송할 데이터를 콘솔에 출력
                console.log("서버로 전송할 데이터:", JSON.stringify(paymentData, null, 2));

                // 서버로 결제 정보 전송
                const serverResponse = await fetch("http://43.201.92.62/order/payments", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(paymentData),
                });

                const data = await serverResponse.json();
                console.log('서버 응답 데이터:', data); // 서버 응답 데이터 확인
                if (data.message) {
                    // 결제 프로세스 완료 후 다음 화면으로 네비게이션
                    navigation.navigate("OrderConfirm_pay", { userid });
                } else {
                    throw new Error(data.error || '결제 정보 전송 실패');
                }
            } catch (error) {
                console.error('결제 정보 전송 실패:', error);
                Alert.alert('결제 실패', error.message);
                navigation.goBack();
            }
        } else {
            // 결제 실패 처리
            console.log('결제 실패:', response.error_msg || response);
            Alert.alert('결제 실패', response.error_msg || '알 수 없는 오류가 발생했습니다.');
            navigation.goBack();
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <IMP.Payment
                userCode={userCode}
                data={{
                    pg: payType, // PG사
                    pay_method: 'card', // 결제수단
                    name: '주문명:결제테스트', // 주문명
                    merchant_uid: `mid_${new Date().getTime()}`, // 고유한 주문번호 설정
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
}

export default Payment;
