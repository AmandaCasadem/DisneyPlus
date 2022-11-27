import { Ionicons } from '@expo/vector-icons';
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
    password: "",
  
    
  }); 
  const navigation = useNavigation();
  function screenMenu() {
    navigation.navigate("Menu");
  }
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
     
      <Text style={styles.title}>Digite a senha </Text>
     <View style={styles.inputArea}>
      <TextInput
        style={styles.input}
    
        value={user.password}
        onChangeText={setUser}
        placeholder={"  Senha "}
        placeholderTextColor={"gray"}
        secureTextEntry={true}
        />
      <Ionicons style={styles.eyes}name="eye" color ="#fff" size ={25}/>
        </View>
      <Text style={styles.text}> (maiúscula e minúscula) </Text>
      <TouchableOpacity style={styles.button} onPress={screenMenu}>
        <Text style={styles.textBotton} > ENTRAR </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width:'80%'}}>
        <Text style={styles.forgot}>Esqueceu sua senha ?</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  inputArea: {
    width: '100%',
  borderRadius: '8px',
  flexDirection: 'row',
  alignItems: 'center',
  height: 40,
  width: 300,
  backgroundColor: 'rgba(211,211,211,0.2)'   ,
  borderRadius: 2,
  marginBottom: 15,
  marginTop: 15,
  },
 eyes: {  
  color: "#fff",
  marginLeft: "50px",
 },
 

  text: {
    color: "#ffffff",
    textAlign: "left",
    width: '80%' 
  },
  forgot: {

    marginBottom : 20,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "left",
    width: '100%' 
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
    // height: 40,
    // width: 300,
    // backgroundColor: "#d3d3d3",
    // opacity: 0.2,
    // borderRadius: 2,
    // border: " 2px solid #ffff",
    // marginBottom: 15,
    // marginTop: 15,
    width: '70%',
  padding: '8px',
  borderRadius: '8px',
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

