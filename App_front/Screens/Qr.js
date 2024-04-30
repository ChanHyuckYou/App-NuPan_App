import * as React from "react";
import {StyleSheet, Text, View, Image, Button} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import { Camera } from 'expo-camera';
import {useEffect, useState} from "react";
import { BarCodeScanner } from 'expo-barcode-scanner';

const QR = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync(); // 변경된 부분
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`QR 코드가 인식되었습니다! 유형: ${type}, 데이터: ${data}`);
        // 여기서 필요한 로직을 추가할 수 있습니다. 예를 들어, 인식된 데이터를 다루는 방법 등
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
