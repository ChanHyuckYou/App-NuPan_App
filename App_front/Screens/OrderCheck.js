import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const OrderCheck = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const initialOrderList = route.params?.orderList || []; // route.params.orderList가 존재하지 않을 경우 빈 배열을 초기값으로 설정
    const ownerid = route.params?.ownerid;
    const userid = route.params?.userid;
    const orderid = route.params?.orderid;
    const storeid = route.params?.storeid;
    const tablenumber = route.params?.tablenumber;
    const [orderList, setOrderList] = useState(initialOrderList); // orderList를 상태로 관리
    // 총 결제 금액 계산
    const totalPrice = orderList.reduce((total, item) => total + parseInt(item.price, 10) * item.quantity, 0);

    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const formattedTotalPrice = numberWithCommas(totalPrice);

    // 항목 삭제 함수
    const handleDelete = (index) => {
        const newOrderList = orderList.filter((_, i) => i !== index);
        setOrderList(newOrderList);
        navigation.setParams({ orderList: newOrderList }); // 업데이트된 orderList를 route params에 설정
    };

    const handleMenuPage = () => {
        navigation.navigate('MenuPage', { orderList, totalPrice,tableidx: tablenumber, userid, orderid, storeid, ownerid });
        // navigation.goBack();
    };

    // SelectPayment로 이동할 때 현재 상태를 전달
    const handleSelectPayment = () => {
        navigation.navigate('SelectPayment', { orderList, totalPrice, userid, orderid, storeid, tablenumber });
        console.log("보낸 금액: ", totalPrice);
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
                            <Text style={styles.menuPrice}>{numberWithCommas(item.price)}₩</Text>
                            <Text style={styles.menuQuantity}>수량: {item.quantity}</Text>
                        </View>
                        <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteButton}>
                            <Text style={styles.deleteButtonText}>삭제</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>총 결제금액</Text>
                <Text style={styles.totalPrice}>{formattedTotalPrice}₩</Text>
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
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: Color.colorBlack,
        height: 70,
        backgroundColor: Color.colorWhite,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
    },
    title: {
        alignSelf: "center",
        fontSize: FontSize.size_11xl,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        position: "absolute",
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
        marginLeft: 20,
        fontSize: FontSize.size_xl,
        fontFamily: FontFamily.interRegular,
        textAlign: 'center',
        color: Color.colorBlack,
        alignSelf: "flex-start",
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
    menuQuantity: {
        marginTop: 4,
        fontSize: FontSize.size_md,
        color: Color.colorBlack,
        fontFamily: FontFamily.interRegular,
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
