import React,{useContext} from "react";
import {TouchableOpacity,Text,StyleSheet,Image,ScrollView,View,SafeAreaView, ImageBackground,Alert}from 'react-native';
import{useFonts}from 'expo-font';
import AppLoading from 'expo-app-loading';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from "react-native-paper"
import { AppContext } from "../context/AppContext";




const Login=({navigation})=>{
    const image=require("../assets/back3.jpg");
    const [email, setEmail] = React.useState();
    const [pass, setPass] = React.useState();
    const admin='admin';
    
   
    const {
        usersList,setUsersList,
        currentUser,setCurrentUser
        }=useContext(AppContext)


        
    let [fontsLoaded]=useFonts({
        'bakery':require('../assets/fonts/bakery.ttf'),
        'Bangers':require('../assets/fonts/Bangers-Regular.ttf'),
        'planetbe':require('../assets/fonts/planetbe.ttf'),
    })
    if(!fontsLoaded){
        return<AppLoading/>
    }

    
    const loginAction=()=>{
       
        let arrOfUsers=[...usersList]
        let user=arrOfUsers.find(user=>user.email===email);

        if(admin==email)
        {
            navigation.navigate('AdminHome')
            return
        }
      
        else if(user!==undefined&&user.password===pass){
            setCurrentUser(user);
          navigation.navigate('Home',{item:user})
          return  
        }
        else{
            Alert.alert(
                "User is not registered",
                "go to sign up page...",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => navigation.navigate('SignUp') }
                ]
              );
        }

        
    }
    return(
    
    <ImageBackground source={image} style={styles.container} >
    
        <Image
        source={require('../assets/food_icon1.png')}
        resizeMode='center'
        style={styles.image}/>
    <Text style={styles.textTitle2}>Welcome Back </Text>
    <Text style={styles.textBody}>Log in to your account </Text>
    <Ionicons name="md-checkmark-circle" size={32} color="green" />

    <SafeAreaView>
      <TextInput
     
        style={styles.input}
        onChangeText={(mail)=>setEmail(mail)}
        value={email}
        placeholder="Email"
        left={ <TextInput.Icon style={styles.icon} name="email" />}
      />
      
      <TextInput
        style={styles.input}
        onChangeText={(pass)=>setPass(pass)}
        value={pass}
        placeholder="Password"
        secureTextEntry
        left={<TextInput.Icon style={styles.icon} name="lock" />}
      />

<TouchableOpacity style={styles.button}  onPress={loginAction}>
   
           


<Text style={styles.buttonText}>Login </Text>
</TouchableOpacity>


<TouchableOpacity style={styles.button}  onPress={()=>navigation.navigate('SignUp')}>
<Text style={styles.buttonText}>Sign Up </Text>
</TouchableOpacity>


    </SafeAreaView>


    </ImageBackground>
    
    )
}

const styles=StyleSheet.create({
container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
},
image: {
    flex: 1,
    justifyContent: "center"
  },
icon:{
    marginTop:25
},
input: {
    marginVertical:10,
    width:250,
    height: 20,
    margin: 10,
    borderWidth: 2,
    borderColor:'#D2042D',
    padding: 10,
  },
image:{
    width:400,
    height:250,
    marginVertical:10
},
textTitle:{
    fontFamily:'bakery',
    fontSize:40,
     
},
textTitle2:{
    fontFamily:'Bangers',
    fontSize:40,
    color:'white'
     
},
textTitle3:{
    fontFamily:'planetbe',
    fontSize:40,
     
},
textBody:{
    fontFamily:'Bangers',
    fontSize:16,
    color:'white'
},
 buttonText:{
    fontFamily:'Bangers',
    fontSize:20,
    color:'white'
   
},
button:{
    backgroundColor:'#D2042D',
    width:100,
    justifyContent:'center',
    alignItems:'center',
    height:50,
    marginTop:20,
    marginLeft:80
},
});
export default Login;
