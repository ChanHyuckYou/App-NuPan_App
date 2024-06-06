import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const UsedStore = () => {
    const [orderHistory, setOrderHistory] = useState([]);
    const route = useRoute();
    const { userid } = route.params;
    const navigation = useNavigation();

    useEffect(() => {
        // 서버에서 주문 내역 데이터 가져오기
        const fetchOrderHistory = async () => {
            try {
                const response = await axios.post('http://43.201.92.62/user/history', {
                    userid: userid
                });
                // 주문 내역을 시간별로 정렬 (최근 주문이 먼저)
                const sortedHistory = response.data.sort((a, b) => new Date(b.ordertime) - new Date(a.ordertime));
                setOrderHistory(sortedHistory);
            } catch (error) {
                console.error("주문 내역을 불러오는 중 오류가 발생했습니다!", error);
            }
        };

        fetchOrderHistory();
    }, [userid]);



    const renderItem = ({ item }) => {
        // ordertime을 Date 객체로 변환
        const orderDate = new Date(item.ordertime);

        // 원하는 형식으로 변환
        const formattedOrderTime = orderDate.toISOString().slice(0, 19).replace('T', ' ');

        return (
            <TouchableOpacity style={styles.orderItem}>
                <Text style={styles.orderId}>가게 이름: {item.storename}</Text>
                <Text style={styles.orderTime}>주문 시간: {formattedOrderTime}</Text>
                <Text style={styles.totalPrice}>총 금액: {item.total_price}₩</Text>
                <Text style={styles.itemsTitle}>주문 항목:</Text>
                {item.items.map((detail, index) => (
                    <View key={index} style={styles.itemDetail}>
                        <Text>{detail.menu_name} x {detail.quantity}</Text>
                    </View>
                ))}
            </TouchableOpacity>
        );
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image
                        style={styles.backIcon}
                        source={require("../assets/ep_back.png")}
                    />
                </TouchableOpacity>
                <Text style={styles.orderHistory}>
                    주문내역
                </Text>
            </View>
            <FlatList
                data={orderHistory}
                renderItem={renderItem}
                keyExtractor={item => item.orderid}
                ListEmptyComponent={<Text>주문 내역이 없습니다.</Text>}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    orderItem: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        borderStyle: "solid",
        borderColor: "#000",
        borderWidth: 1,
    },
    orderId: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    orderTime: {
        fontSize: 14,
        color: '#888',
    },
    totalPrice: {
        fontSize: 14,
        color: '#000',
        marginTop: 5,
    },
    itemsTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
    },
    itemDetail: {
        fontSize: 14,
        color: '#000',
        marginTop: 5,
    },
    headerContainer: {
        width: "100%",
        left: 0,
        position: "relative",
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: "#000000",
        height: 70,
        backgroundColor: "#ffffff",
        marginBottom: 40,
        justifyContent: "center",
    },
    orderHistory: {
        fontFamily: FontFamily.interMedium,
        fontSize: FontSize.size_11xl,
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
        alignSelf: "center",
    },
    backButton: {
        position: 'absolute',
        left: 20,
        width: 30,
        height: 30,
        top: 20,
    },
    backIcon: {
        width: 30,
        height: 30,
    },
});

export default UsedStore;
