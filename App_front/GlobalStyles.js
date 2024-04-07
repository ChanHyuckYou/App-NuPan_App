/* fonts */
import * as Font from "expo-font";

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
    size_mini: 15,
    size_8xl: 27,
    size_sm: 14,
    size_5xl: 24,
    size_11xl: 30,
    size_4xl: 23,
    size_xl: 20,
    size_lg: 18,
    size_mid: 17,
    size_6xl: 25,
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
