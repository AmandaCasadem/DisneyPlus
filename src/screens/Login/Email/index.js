import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import logo from "../../../../assets/logo.png";
export default function Login() {
  const [user, setUser] = useState({
    login: "",
  });
  const navigation = useNavigation();
  function screenPassword() {
    navigation.navigate("Password");
  }
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.title}>Use seu e-mail para entrar </Text>
      <TextInput
        value={user.login}
        onChangeText={setUser}
        placeholder={"    E-mail "}
        placeholderTextColor={"gray"}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={screenPassword}>
        <Text style={styles.textBotton}> CONTINUAR</Text>
      </TouchableOpacity>
      <Text style={styles.dontHave}>Não tem Disney+?</Text>
      <TouchableOpacity style={{width:'80%'}}>
        <Text style={styles.toSign}>ASSINAR</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  dontHave: {
    color: "#d3d3d3",
    opacity: 0.5,
    marginBottom: 10,
    textAlign: "left",
    width: '80%' ,
  },

  toSign: {
    fontWeight: "bold",
    color: "#ffffff",
    
    
    
  },

  button: {
    height: 40,
    width: 300,
    borderRadius: 2,
    marginBottom: 15,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2b59e5",
  },

  textBotton: {
    color: "#ffffff",
    textAlign: "center",
    position: "absolute",
    fontWeight: "bold",
  },

  input: {
    height: 40,
    width: 300,
    backgroundColor: "#d3d3d3",
    opacity: 0.2,
    borderRadius: 2,
    border: " 2px solid #ffff",
    marginBottom: 15,
    marginTop: 15,
  },

  logo: {
    width: 100,
    height: 100,
  },
  container: {
    marginTop: -180,
    flex: 1,
    backgroundColor: "#1A1C29",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "20px",
  },
});
