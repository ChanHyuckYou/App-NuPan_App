import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image, Alert, Platform } from 'react-native';
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from 'axios';
import { topPercentage, widthPercentage } from "./Window";


const MenuPage = ({ }) => {
    const navigation = useNavigation();
    const route = useRoute();
    const { tableidx, userid } = route.params;
    const [ownerid, setOwnerid] = useState(route.params?.ownerid || null);
    const [showDetails, setShowDetails] = useState(false);
    const [menuItems, setMenuItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [orderList, setOrderList] = useState(route.params?.orderList || []);
    const [orderId, setOrderId] = useState(route.params?.orderId || null);

    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const payload = {
                    ownerid: ownerid,
                    tablenumber: tableidx,
                    userid: userid,
                };
                console.log("Request payload:", payload); // Debugging log
                const response = await axios.post('http://43.201.92.62/order/scan', payload);
                console.log("Response data: ", response.data); // 응답 데이터 로그 출력
                setMenuItems(response.data?.menu_items || []);
                setOrderId(response.data?.orderid); // Order ID 설정
                console.log(orderId);
            } catch (error) {
                console.error("메뉴를 불러오는 중 오류가 발생했습니다!", error);
                Alert.alert("오류", "메뉴를 불러오는 중 오류가 발생했습니다.");
            }
        };
        fetchData();
    }, [ownerid, tableidx, userid]);

    useEffect(() => {
        if (route.params?.orderList) {
            setOrderList(route.params.orderList);
        }
    }, [route.params?.orderList]);

    const handleItemPress = (item) => {
        setSelectedItem(item);
        setShowDetails(true);
    };

    const handleCancel = () => {
        setShowDetails(false);
        setSelectedItem(null);
    };

    const handleAddToOrder = () => {
        if (selectedItem) {
            const existingItemIndex = orderList.findIndex(orderItem => orderItem.productid === selectedItem.productid);
            if (existingItemIndex !== -1) {
                const updatedOrderList = [...orderList];
                updatedOrderList[existingItemIndex].quantity += 1;
                setOrderList(updatedOrderList);
            } else {
                setOrderList([...orderList, { ...selectedItem, quantity: 1 }]);
            }
            setShowDetails(false);
        }
    };

    const handleOrderCheck = () => {
        const orderDetails = {
            storeid: ownerid,
            tablenumber: tableidx,
            menu_items: orderList
        };
        navigation.navigate('OrderCheck', { orderList, userid, orderid: orderId, storeid: ownerid, tablenumber: tableidx });
    };

    // Function to group items by category
    const groupItemsByCategory = (items) => {
        return items.reduce((acc, item) => {
            const category = item.category || 'Uncategorized';
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(item);
            return acc;
        }, {});
    };

    const groupedItems = groupItemsByCategory(menuItems);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <View style={[styles.view18, styles.viewPosition]}>
                    <View style={[styles.child3, styles.viewPosition]} />
                    <Text style={[styles.text16, styles.textTypo2]}>{tableidx} 번 테이블</Text>
                </View>

                <View style={styles.menuList}>
                    <ScrollView>
                        {Object.keys(groupedItems).map((category) => (
                            <View key={category}>
                                <Text style={styles.categoryTitle}>{category}</Text>
                                {groupedItems[category].map(item => (
                                    <TouchableOpacity key={item.productid} onPress={() => handleItemPress(item)} style={styles.menuItem}>
                                        <View style={styles.menuItemContent}>
                                            <Image source={{ uri: item.imageurl }} style={styles.menuItemImage} />
                                            <View style={styles.menuItemText}>
                                                <Text style={styles.menuItemTitle}>{item.productname}</Text>
                                                <Text style={styles.menuItemPrice}>{numberWithCommas(item.price)} ₩</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <TouchableOpacity style={styles.orderCheckButton} onPress={handleOrderCheck}>
                    <Text style={styles.orderCheckButtonText}>주문확정</Text>
                </TouchableOpacity>

                {showDetails && selectedItem && (
                    <View style={styles.detailView}>
                        <View style={styles.detailContent}>
                            <Image source={{ uri: selectedItem.imageurl }} style={styles.detailImage} />
                            <Text style={styles.detailTitle}>{selectedItem.productname}</Text>
                            <Text style={styles.detailDescription}>{selectedItem.description}</Text>
                            <Text style={styles.detailPrice}>{numberWithCommas(selectedItem.price)} ₩</Text>
                            <View style={styles.detailButtons}>
                                <TouchableOpacity onPress={handleCancel} style={styles.detailButton}>
                                    <Text style={styles.detailButtonText}>취소</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleAddToOrder} style={styles.detailButton}>
                                    <Text style={styles.detailButtonText}>담기</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
                <TouchableOpacity onPress={() => navigation.navigate("StaffCall")} style={styles.callButton}>
                    <Text style={styles.callText}>직원호출</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: Color.colorWhite,
    },
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 0, // iOS에서 상단 네비게이션바와 겹치지 않도록 여백 추가
    },
    viewLayout3: {
        height: 73,
        position: "absolute",
        width: 118,
    },
    iconLayout: {
        height: 30,
        width: 30,
        position: "absolute",
        overflow: "hidden",
    },
    itemLayout: {
        height: 87,
        width: 115,
        position: "absolute",
    },
    textTypo6: {
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        fontSize: FontSize.size_xl,
        position: "absolute",
    },
    viewPosition: {
        width: "100%",
        left: 0,
        position: "absolute",
    },
    viewLayout2: {
        height: 142,
        width: "100%",
        left: 0,
        position: "absolute",
    },
    textTypo4: {
        fontFamily: FontFamily.interLight,
        fontWeight: "300",
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    view6Layout: {
        width: 119,
        position: "absolute",
    },
    viewLayout1: {
        height: 53,
        marginRight: 10,
        position: "relative",
    },
    textTypo3: {
        height: 33,
        fontSize: FontSize.size_4xl,
        top: 10,
        fontFamily: FontFamily.interLight,
        fontWeight: "300",
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    viewLayout: {
        borderRadius: Border.br_xl,
        height: 53,
        backgroundColor: Color.colorGainsboro,
        left: 0,
        top: 0,
        width: 118,
        position: "absolute",
    },
    textTypo2: {
        height: 56,
        fontSize: FontSize.size_11xl,
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    groupChildLayout: {
        height: 409,
        width: 270,
        position: "absolute",
    },
    textTypo1: {
        textAlign: "left",
        fontFamily: FontFamily.interRegular,
        color: Color.colorBlack,
        position: "absolute",
    },
    groupLayout: {
        height: 39,
        width: 260,
        alignSelf: "center",
        position: "absolute",
    },
    textTypo: {
        fontSize: FontSize.size_5xl,
        left: 119,
        top: 5,
        textAlign: "left",
        fontFamily: FontFamily.interRegular,
        color: Color.colorBlack,
        position: "absolute",
    },
    child: {
        borderColor: Color.colorBlack,
        backgroundColor: Color.colorGainsboro,
        left: 0,
        height: 73,
        position: "absolute",
        width: 118,
        borderWidth: 1,
    },
    text: {
        top: 43,
        left: 19,
    },
    view1: {
        alignSelf: "flex-end",
        top: 727,
        height: 73,
        position: "absolute",
    },
    item: {
        borderRadius: 30,
        borderWidth: 1,
        borderStyle: "solid",
        top: 0,
        borderColor: Color.colorBlack,
        backgroundColor: Color.colorGainsboro,
        left: 0,
    },
    text1: {
        top: 51,
        left: 21,
        width: 74,
        height: 25,
    },
    solarbag5BoldIcon: {
        top: 11,
        left: 43,
    },
    view2: {
        top: 713,
        alignSelf: "center",
    },
    ionreceiptIcon: {
        top: 4,
        left: 44,
    },
    text2: {
        top: 44,
        left: 18,
    },
    view3: {
        alignSelf: "flex-start",
        top: 727,
        height: 73,
        position: "absolute",
    },
    rectangleView: {
        borderColor: Color.colorDimgray,
        borderWidth: 1,
        borderStyle: "solid",
        top: 0,
        backgroundColor: Color.colorWhite,
    },
    text3: {
        left: 133,
        width: 184,
        height: 41,
        fontSize: FontSize.size_11xl,
        fontFamily: FontFamily.interLight,
        fontWeight: "300",
        top: 18,
    },
    text4: {
        top: 58,
        left: 142,
        fontSize: FontSize.size_lg,
        width: 131,
        height: 26,
    },
    text5: {
        top: 106,
        left: 233,
        height: 22,
        width: 118,
    },
    view6: {
        height: 107,
        left: 13,
        top: 18,
        width: 119,
        backgroundColor: Color.colorGainsboro,
    },
    view5: {
        top: 284,
    },
    view7: {
        top: 142,
    },
    view9: {
        top: 0,
    },
    view4: {
        top: 203,
        height: 426,
    },
    text12: {
        alignSelf: "center",
    },
    view12: {
        top: 0,
        width: 118,
    },
    view14: {
        top: 0,
        width: 118,
    },
    view17: {
        borderWidth: 3,
        borderColor: Color.colorBlack,
        borderStyle: "solid",
        borderRadius: Border.br_xl,
    },
    text14: {
        alignSelf: "center",
    },
    view16: {
        top: 0,
        width: 118,
    },
    view11: {
        flexDirection: "row",
        rowGap: 10,
        top: topPercentage(60),
        width: "100%",
        left: 0,
    },
    child3: {
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: "#000000",
        height: 70,
        top: 0,
        backgroundColor: "#ffffff",
    },
    text15: {
        top: 16,
        fontWeight: "600",
        fontFamily: FontFamily.interSemiBold,
        width: 270,
        height: 56,
        alignSelf: "center",
    },
    text16: {
        top: 10,
        alignSelf: "center",
        fontFamily: FontFamily.interMedium,
    },
    view18: {
        top: 0,
    },
    groupChild: {
        left: 0,
        top: 0,
        borderWidth: 1,
        borderColor: Color.colorBlack,
        borderStyle: "solid",
        backgroundColor: Color.colorWhite,
    },
    text17: {
        top: 108,
        left: 148,
        fontSize: FontSize.size_mini,
        width: 120,
        height: 25,
    },
    groupItem: {
        top: 366,
        backgroundColor: Color.colorGainsboro,
    },
    text18: {
        top: 372,
    },
    groupInner: {
        top: 326,
        backgroundColor: Color.colorOrangered,
    },
    text19: {
        top: 332,
    },
    image1Icon: {
        top: 39,
        left: 14,
        height: 159,
    },
    text20: {
        top: 207,
        fontSize: 13,
        width: 250,
        height: 121,
        left: 13,
    },
    text21: {
        top: 129,
        left: 189,
        fontFamily: FontFamily.interRegular,
        textAlign: "center",
        color: Color.colorBlack,
        fontSize: FontSize.size_xl,
        position: "absolute",
    },
    rectangleParent: {
        top: 206,
        left: 38,
        height: 409,
    },
    menuList: {
        flex: 1,
        padding: 10,
        marginTop: topPercentage(75),
    },
    categoryTitle: {
        fontSize: FontSize.size_3xl,
        fontFamily: FontFamily.interSemiBold,
        color: Color.colorBlack,
        marginBottom: 10,
    },
    menuItem: {
        marginBottom: 15,
    },
    menuItemContent: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#A5A5A5",
        padding: 10,
        borderRadius: 10,
    },
    menuItemImage: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    menuItemText: {
        flex: 1,
        justifyContent: "center",
    },
    menuItemTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    menuItemPrice: {
        marginTop: 5,
        color: "#888",
    },
    tabBar: {
        height: 50,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#f5f5f5",
        borderTopWidth: 1,
        borderColor: "#d3d3d3",
    },
    tabItem: {
        justifyContent: "center",
        alignItems: "center",
    },
    tabText: {
        fontSize: 16,
    },
    detailView: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    detailContent: {
        width: 300,
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
    },
    detailImage: {
        width: "100%",
        height: 200,
        marginBottom: 10,
    },
    detailTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    detailDescription: {
        fontSize: 16,
        color: "#666",
        marginBottom: 10,
    },
    detailPrice: {
        fontSize: 18,
        color: "#000",
        marginBottom: 20,
    },
    detailButtons: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    detailButton: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#dcdcdc",
    },
    detailButtonText: {
        fontSize: 16,
    },
    orderCheckButton: {
        paddingTop: 15,
        backgroundColor: '#4097e8',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        height: 50,
        width: widthPercentage(340),
    },
    orderCheckButtonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    callButton: {
        alignSelf: "center",
        padding: 10,
        backgroundColor: '#d9d9d9',
        alignItems: 'center',
        marginTop: 10,
        width: widthPercentage(300),
    },
    callText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default MenuPage;
