import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import axios from 'axios';
import {useRoute} from "@react-navigation/native";

const UsedStore = ({ }) => {
    const [orderHistory, setOrderHistory] = useState([]);
    const route = useRoute()
    const { userid } = route.params;

    useEffect(() => {
        // 서버에서 주문 내역 데이터 가져오기
        const fetchOrderHistory = async () => {
            try {
                const response = await axios.post('http://43.201.92.62/user/history', {
                    userid: userid
                });
                setOrderHistory(response.data);
            } catch (error) {
                console.error("주문 내역을 불러오는 중 오류가 발생했습니다!", error);
            }
        };

        fetchOrderHistory();
    }, [userid]);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.orderItem}>
            <Text style={styles.orderId}>가게 이름: {item.storename}</Text>
            <Text style={styles.orderTime}>주문 시간: {new Date(item.ordertime).toLocaleString()}</Text>
            <Text style={styles.totalPrice}>총 금액: {item.total_price.toLocaleString()}₩</Text>
            <Text style={styles.itemsTitle}>주문 항목:</Text>
            {item.items.map((detail, index) => (
                <View key={index} style={styles.itemDetail}>
                    <Text>{detail.menu_name} x {detail.quantity}</Text>
                </View>
            ))}
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
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
        backgroundColor: '#f5f5f5',
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
});

export default UsedStore;
