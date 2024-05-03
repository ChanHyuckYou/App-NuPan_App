/* fonts */
import * as Font from "expo-font";
import {fontPercentage} from "./Screens/Window";

export async function FontFamily()  {
    await Font.loadAsync({
            // 폰트 이름과 파일 경로 설정
        'interBold': require('./assets/fonts/Inter-Bold.ttf'),
        'interMedium': require('./assets/fonts/Inter-Medium.ttf'),
        'interSemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
        'interRegular': require('./assets/fonts/Inter-Regular.ttf'),
        'interThin': require('./assets/fonts/Inter-Thin.ttf'),
        'interBlack': require('./assets/fonts/Inter-Black.ttf'),
        'interLight': require('./assets/fonts/Inter-Light.ttf'),
    });
}

/* font sizes */
export const FontSize = {
    size_mini: fontPercentage(15),
    size_8xl: fontPercentage(27),
    size_sm: fontPercentage(14),
    size_5xl: fontPercentage(24),
    size_11xl: fontPercentage(30),
    size_4xl: fontPercentage(23),
    size_xl: fontPercentage(20),
    size_lg: fontPercentage(18),
    size_mid: fontPercentage(17),
    size_6xl: fontPercentage(25),
};
/* Colors */
export const Color = {
    colorWhite: "#fff",
    colorBlack: "#000",
    colorOrangered: "#ff4c00",
    colorGainsboro: "#d9d9d9",
    colorDimgray: "#545454",
    colorGray: "#878787",
};
/* border radiuses */
export const Border = {
    br_4xl: 23,
    br_xl: 20,
};
