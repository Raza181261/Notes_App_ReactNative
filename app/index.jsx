import { Text, View,StyleSheet, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import PostItImage from "@/assets/images/post-it.png"
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";

const HomeScreen = () => {
  const {user,loading} = useAuth();

  const router = useRouter()

  useEffect(() => {
     if(!loading && user){
      router.replace("/notes")
     }
  },[user,loading,router])

  if(loading){
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size='large' color="#007bff"/>
      </View>
    )
  }
  return (
    <View
      style={styles.container}
      >
        <Image source={PostItImage} style={styles.image}/>
      <Text style={styles.title}>Welcome to Notes App</Text>
      <Text style={styles.subtitle}>Capture your thoughts any time, any where</Text>

      <TouchableOpacity
       style={styles.button}
       onPress={() => router.push("/notes")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding:20,
        backgroundColor:"#f8f9fa",
  },
  image:{
    width:100,
    height:100,
    marginBottom:20,
    borderRadius:10
  },
  title:{
    fontSize:28,
    fontWeight:"bold",
    marginBottom:10,
    color:"#333"
  },
  subtitle:{
    fontSize:15,
    color:"#666",
    textAlign:"center",
    marginBottom:20
  },
  button:{
    backgroundColor:"#007bff",
    paddingVertical:12,
    paddingHorizontal:25,
    borderRadius:8,
    alignItems:"center"
  },
  buttonText:{
    color:"#fff",
    fontSize:18,
    fontWeight:"bold"
  },
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
})

export default HomeScreen;
