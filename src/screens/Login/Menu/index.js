import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Gradient } from "../../../components/Gradient";

// import { Container } from './styles';

const Menu = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: "100%",
          height: 230,
          position: "absolute",
          zIndex: -5,
          resizeMode: "contain",
          top: 25,
        }}
        source={{
          uri: "https://sm.ign.com/ign_br/screenshot/default/blob_1w3g.jpg",
        }}
      ></Image>
      <Gradient />
      <Image
        style={{
          width: 500,
          height: 100,
          resizeMode: "contain",
          marginBottom: "10px",
        }}
        source={{
          uri: "https://lumiere-a.akamaihd.net/v1/images/ml2_bra_tt_4c_01f_ea97eae0.png",
        }}
      ></Image>
      <Text style={styles.imax}>Já disponível em iMAX Enchanced</Text>

      <Text style={styles.subImax}>Saiba mais em</Text>
      <View style={styles.mainRestricao}>
        <Text style={styles.restricao}>12</Text>
        <View style={styles.outRestricao}>
          <Text style={{ color: "white", fontSize: 8 }}>IMAX ENHANCED</Text>
        </View>
        <View style={styles.outRestricao}>
          <Text style={{ color: "white", fontSize: 8 }}>HD</Text>
        </View>
        <View style={styles.outRestricao}>
          <Text style={{ color: "white", fontSize: 8 }}> 5.1</Text>
        </View>
      </View>

      <Text style={{ textAlign: "center", color: "#7B7B85", marginTop: 8 }}>
        2019 ° 3h5min ° Ficção cientifica, Fantasia, Super herois, Ação e
        aventura{" "}
      </Text>

      <TouchableOpacity style={styles.button}>
        <Ionicons name="caret-forward-outline" size={20} />
        <Text style={{ fontSize: 15, fontWeight: 700 }}>Assistir</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
        <View>
          <Text style={{ color: "#7B7B85", marginTop: "2px " }}>
            Minha lista   GroupWatch   Trailer   Baixar
          </Text>
        </View>
      </View>

      <Text
        style={{ fontSize: 18, color: "#7B7B85", width: "90%", marginTop: 25 }}
      >
        Na grande saga do infinito, os vingadores enfrentaram o thanos
      </Text>

      <View
        style={{
          flexDirection: "row",
          gap: 10,
          marginTop: 20,
          width: "100%",
          textAlign: "left",
        }}
      >
        <Text style={{ color: "white", borderBottom: "3px solid white" }}>
          .Sugestões            .
        </Text>

        <Text style={{ color: "#7B7B85" }}>Extras            .Versões  </Text>
      </View>

      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Image></Image>
        <Image></Image>
        <Image></Image>
        <Image></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A1C29",
    paddingHorizontal: 10,
  },

  imax: {
    color: "#E3AB48",
    fontSize: "12px",
    marginBottom: 3,
  },
  subImax: {
    color: "#7B7B85",
    marginBottom: 20,
  },

  restricao: {
    backgroundColor: "yellow",

    border: "1px solid white",
    color: "white",
    padding: "2px 100px",
  },

  mainRestricao: {
    flexDirection: "row",
    gap: 5,
  },

  outRestricao: {
    backgroundColor: "#4B4B57",
    color: "white",
    padding: 6,
  },
  button: {
    height: 40,
    width: 300,
    borderRadius: 2,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    backgroundColor: "white",
  },
});

export default Menu;
