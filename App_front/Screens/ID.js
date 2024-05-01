import * as React from "react";
import {Text, StyleSheet, View, TextInput, TouchableOpacity} from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ID = () => {
  return (
    <View style={styles.id}>
      <Text style={styles.appNupan}>App-nupan</Text>
      <TouchableOpacity style={[styles.id1, styles.childLayout]}>
        <View style={[styles.idChild, styles.idItemPosition]} />
        <Text style={styles.id2}>ID 찾기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.view, styles.childLayout]}>
        <View style={[styles.child, styles.itemBorder]} />
        <Text style={styles.text}>비밀번호 찾기</Text>
      </TouchableOpacity>
      <View style={[styles.view1, styles.viewLayout]}>
        <View style={[styles.item, styles.viewLayout]} />
        <TextInput
            placeholder={"Name"}
            style={[styles.text1, styles.id4Typo]}></TextInput>
      </View>
      <View style={[styles.view2, styles.viewLayout]}>
        <View style={[styles.item, styles.viewLayout]} />
        <TextInput
            placeholder={"E-mail"}
            style={[styles.text1, styles.id4Typo]}></TextInput>
      </View>
      <Text style={[styles.text2, styles.textTypo]}>이름</Text>
      <Text style={[styles.text3, styles.textTypo]}>이메일</Text>
      <View style={[styles.id3, styles.id3Layout]}>
        <View style={[styles.idItem, styles.id3Layout]} />
        <Text style={[styles.id4, styles.id4Typo]}>내 ID 찾기</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    height: 54,
    position: "absolute",
  },
  idItemPosition: {
    backgroundColor: Color.colorOrangered,
    left: 0,
    top: 0,
  },
  itemBorder: {
    borderColor: Color.colorOrangered,
    borderStyle: "solid",
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  viewLayout: {
    height: 41,
    width: 267,
    position: "absolute",
  },
  id4Typo: {
    height: 23,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontStyle: "italic",
    position: "absolute",
  },
  textTypo: {
    height: 21,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.interLight,
    left: 47,
    textAlign: "left",
    color: Color.colorBlack,
    fontStyle: "italic",
    position: "absolute",
  },
  id3Layout: {
    height: 48,
    width: 246,
    position: "absolute",
  },
  appNupan: {
    top: 35,
    alignSelf: "center",
    width: 136,
    height: 29,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  idChild: {
    height: 54,
    position: "absolute",
    width: 146,
  },
  id2: {
    left: 32,
    width: 82,
    color: Color.colorWhite,
    top: 12,
    height: 29,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  id1: {
    left: 20,
    width: 146,
    height: 54,
    top: 119,
  },
  child: {
    borderWidth: 2,
    height: 54,
    position: "absolute",
    width: 146,
  },
  text: {
    left: 4,
    color: Color.colorOrangered,
    width: 147,
    top: 12,
    height: 29,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  view: {
    left: 191,
    width: 151,
    top: 119,
  },
  item: {
    borderWidth: 3,
    borderColor: Color.colorOrangered,
    borderStyle: "solid",
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text1: {
    top: 10,
    left: 13,
    color: Color.colorBlack,
    width: 106,
    fontFamily: FontFamily.interLight,
    height: 23,
    fontSize: FontSize.size_xl,
  },
  view1: {
    top: 270,
    left: 47,
    width: 267,
  },
  view2: {
    top: 359,
    left: 47,
    width: 267,
  },
  text2: {
    top: 249,
    width: 47,
  },
  text3: {
    top: 338,
    width: 65,
  },
  idItem: {
    backgroundColor: Color.colorOrangered,
    left: 0,
    // top: 0,
  },
  id4: {
    top: 13,
    left: 76,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 88,
    height: 23,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
  },
  id3: {
    top: 497,
    left: 60,
  },
  id: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default ID;
