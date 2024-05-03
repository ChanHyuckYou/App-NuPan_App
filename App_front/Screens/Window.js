import {useWindowDimensions} from "react-native";
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
} from "react-native-responsive-dimensions";

// const { height, width } = useWindowDimensions();
const FIGMA_WINDOW_WIDTH = 360;
const FIGMA_WINDOW_HEIGHT = 800;
export function widthPercentage (width: number): number{
    const percentage = (width / FIGMA_WINDOW_WIDTH) * 100;
    return responsiveScreenWidth(percentage)
}

export function heightPercentage(height: number): number {
    const percentage = (height / FIGMA_WINDOW_HEIGHT) * 100;
    return responsiveScreenHeight(percentage);
}
export function fontPercentage(size: number): number {
    const percentage = size * 0.135;
    return responsiveScreenHeight(percentage);
}

export function topPercentage(top: number): number {
    const percentage = (top / FIGMA_WINDOW_HEIGHT) * 100;
    return responsiveScreenHeight(percentage);
}

export function leftPercentage(left: number): number {
    const percentage = (left / FIGMA_WINDOW_WIDTH) * 100;
    return responsiveScreenWidth(percentage);
}

