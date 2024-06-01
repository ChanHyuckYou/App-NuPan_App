import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const OrderCheck = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const initialOrderList = route.params?.orderList || []; // route.params.orderList가 존재하지 않을 경우 빈 배열을 초기값으로 설정
    const { userEmail } = route.params;
    const [orderList, setOrderList] = useState(initialOrderList); // orderList를 상태로 관리

    // 총 결제 금액 계산
    const totalPrice = orderList.reduce((total, item) => total + item.price, 0);

    // 항목 삭제 함수
    const handleDelete = (index) => {
        const newOrderList = orderList.filter((_, i) => i !== index);
        setOrderList(newOrderList);
    };
    const handleMenuPage = () => {
        navigation.navigate('MenuPage', { orderList });
    };

    // SelectPayment로 이동할 때 현재 상태를 전달
    const handleSelectPayment = () => {
        navigation.navigate('SelectPayment', { totalPrice, userEmail});
        console.log("보낸 금액: ",totalPrice)
    };
    return (
        <SafeAreaView style={styles.view}>
            <View style={[styles.header, styles.viewLayout]}>
                <Text style={styles.title}>주문확정</Text>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image
                        style={styles.backIcon}
                        source={require("../assets/ep_back.png")}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.sectionTitle}>선택한 메뉴</Text>
            <ScrollView style={styles.menuList}>
                {orderList.map((item, index) => (
                    <View key={index} style={styles.menuItem}>
                        <Image source={{ uri: item.imageurl }} style={styles.menuImage} />
                        <View style={styles.menuDetails}>
                            <Text style={styles.menuName}>{item.productname}</Text>
                            <Text style={styles.menuPrice}>{item.price}₩</Text>
                        </View>
                        <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteButton}>
                            <Text style={styles.deleteButtonText}>삭제</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>총 결제금액</Text>
                <Text style={styles.totalPrice}>{totalPrice}₩</Text>
            </View>
            <TouchableOpacity style={styles.paymentButton} onPress={handleSelectPayment}>
                <Text style={styles.paymentButtonText}>즉시 결제</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addMoreButton} onPress={handleMenuPage}>
                <Text style={styles.addMoreButtonText}>추가 담기</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: Color.colorWhite,
    },
    viewLayout: {
        width: "100%",
    },
    header: {
        height: 70,
        backgroundColor: Color.colorOrangered,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
    },
    title: {
        fontSize: FontSize.size_11xl,
        fontFamily: FontFamily.interSemiBold,
        color: Color.colorBlack,
    },
    backButton: {
        position: 'absolute',
        left: 20,
        top: 20,
    },
    backIcon: {
        width: 30,
        height: 30,
    },
    sectionTitle: {
        marginTop: 20,
        fontSize: FontSize.size_xl,
        fontFamily: FontFamily.interRegular,
        textAlign: 'center',
        color: Color.colorBlack,
    },
    menuList: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: Color.colorGainsboro,
        paddingBottom: 10,
    },
    menuImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        backgroundColor: Color.colorGainsboro,
    },
    menuDetails: {
        marginLeft: 10,
        flex: 1,
    },
    menuName: {
        fontFamily: FontFamily.interRegular,
        fontSize: FontSize.size_xl,
        color: Color.colorBlack,
    },
    menuPrice: {
        marginTop: 4,
        fontSize: FontSize.size_lg,
        color: Color.colorBlack,
        fontFamily: FontFamily.interSemiBold,
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: 'white',
        fontSize: FontSize.size_md,
        fontFamily: FontFamily.interSemiBold,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: Color.colorGainsboro,
    },
    totalText: {
        fontSize: FontSize.size_5xl,
        fontFamily: FontFamily.interSemiBold,
        color: Color.colorBlack,
    },
    totalPrice: {
        fontSize: FontSize.size_5xl,
        fontFamily: FontFamily.interSemiBold,
        color: Color.colorBlack,
    },
    paymentButton: {
        backgroundColor: "#4097e8",
        alignItems: 'center',
        justifyContent: 'center',
        height: 52,
        marginHorizontal: 20,
        borderRadius: 10,
        marginTop: 10,
    },
    paymentButtonText: {
        color: Color.colorWhite,
        fontSize: FontSize.size_xl,
        fontFamily: FontFamily.interSemiBold,
    },
    addMoreButton: {
        backgroundColor: Color.colorGainsboro,
        alignItems: 'center',
        justifyContent: 'center',
        height: 52,
        marginHorizontal: 20,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 20,
    },
    addMoreButtonText: {
        color: Color.colorBlack,
        fontSize: FontSize.size_xl,
        fontFamily: FontFamily.interSemiBold,
    },
});

export default OrderCheck;
