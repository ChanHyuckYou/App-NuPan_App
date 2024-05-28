import * as React from "react";
import {StyleSheet, Text, View, Image, Button} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import { Camera } from 'expo-camera/legacy';
import {useEffect, useState} from "react";
import { BarCodeScanner } from 'expo-barcode-scanner';
import {useNavigation} from "@react-navigation/native";

const QR = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const navigation = useNavigation(); // useNavigation Hook 사용

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`QR 코드가 인식되었습니다! 유형: ${type}, 데이터: ${data}`);

        // URL에서 필요한 부분 추출
        const regex = /\/qr\/_([^_]+)_([^\.]+)\.png$/;
        const match = data.match(regex);

        if (match) {
            const ownerid = match[1];
            const tableidx = match[2];

            console.log(`매장 ID: ${ownerid}, 테이블 인덱스: ${tableidx}`);

            // 필요한 로직에 따라 ownerid와 tableidx 사용
            // 예를 들어, 이 값을 상태에 저장하거나, 다른 컴포넌트로 전달할 수 있습니다.

            navigation.navigate('MenuPage', { ownerid, tableidx });
        } else {
            console.log("URL 형식이 올바르지 않습니다.");
        }
    };



    if (hasPermission === null) {
        return null;
    }
    if (hasPermission === false) {
        return <Text>카메라 접근 권한이 없습니다.</Text>;
    }

    return (
        <Camera
            style={{ flex: 1 }}
            type={Camera.Constants.Type.back}
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        >
            <Image
                style={styles.biqrCodeScanIcon}
                contentFit="cover"
                source={require('../assets/bi_qr-code-scan.png')}
            />
            <Text style={styles.qr1}>QR코드 스캔중..</Text>
            {scanned && <Button title={'다시 스캔하기'} onPress={() => setScanned(false)} />}
        </Camera>
    );
};

const styles = StyleSheet.create({
    biqrCodeScanIcon: {
        top: 167,
        left: 67,
        width: 225,
        height: 215,
        position: "absolute",
        overflow: "hidden",
        opacity: 0.7, // 투명도를 50%로 설정
    },

    qr1: {
        top: 519,
        left: 55,
        fontSize: FontSize.size_11xl,
        fontWeight: "500",
        fontFamily: FontFamily.interMedium,
        color: Color.colorBlack,
        textAlign: "center",
        width: 250,
        height: 159,
        position: "absolute",
    },
    qr: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
    },
});

export default QR;
