import React from 'react';
import { View } from 'react-native';
import IMP from 'iamport-react-native'; // 아임포트 모듈을 불러옵니다.

const userCode = 'imp42271774'; // 아임포트 관리자 페이지에서 확인한 가맹점 식별코드를 입력합니다.

const Certification = ({ navigation }) => {
    // 본인인증 완료 후 콜백 함수
    const callback = (response) => {
        console.log(response); // 본인인증 결과를 콘솔에 출력합니다.
        // 여기서 본인인증 결과에 따른 추가 로직을 구현할 수 있습니다.
        navigation.goBack(); // 본인인증 후 이전 페이지로 돌아갑니다.
    };

    return (
        <View style={{ flex: 1 }}>
            <IMP.Certification
                userCode={userCode}
                data={{
                    // merchant_uid: `mid_${new Date().getTime()}`, // 가맹점에서 생성/관리하는 고유 주문번호
                    company: '회사명 또는 앱 이름', // 회사명 또는 앱 이름
                    carrier: 'SKT', // 통신사('SKT', 'KTF', 'LGT', 'MVNO' 중 하나)
                    name: '홍길동', // 본인인증 할 이름
                    phone: '01012341234', // 본인인증 할 전화번호
                }}
                callback={callback} // 본인인증 결과를 받을 콜백 함수
            />
        </View>
    );
};

export default Certification;
