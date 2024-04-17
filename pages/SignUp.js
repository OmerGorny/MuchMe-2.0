import React,{useContext} from "react";
import {Alert,TouchableOpacity,Text,StyleSheet,Image,ScrollView,View,SafeAreaView, ImageBackground}from 'react-native';
import{useFonts}from 'expo-font';
import AppLoading from 'expo-app-loading';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from "react-native-paper"
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { User } from "../classes/User";
import { AppContext } from "../context/AppContext";

const SignUp=({navigation})=>{
    const image=require("../assets/back3.jpg");
    const [email, setEmail] = React.useState();
    const [pass, setPass] = React.useState();
    const [rePass, setRePass] = React.useState();
    const [fullName, setFullName] = React.useState();
    const [phone, setPhone] = React.useState();
    const[city,setCity]=React.useState();
    
    
    const {
        usersList,setUsersList,
        currentUser,setCurrentUser,
        }=useContext(AppContext)

    let [fontsLoaded]=useFonts({
        'Bangers':require('../assets/fonts/Bangers-Regular.ttf'),
    })
    if(!fontsLoaded){
        return<AppLoading/>
    }


    const addToDatabase = async (user) => {
      const addNewUser='http://proj15.ruppin-tech.co.il/api/MunchMe/AddNewUser'
      const new_user = await fetch(addNewUser, {
          method: 'POST',
          body: JSON.stringify(user),
          headers: new Headers({
              'Content-Type': 'application/json; charset=UTF-8',
              'Accept': 'application/json; charset=UTF-8'
          })
      })
          .then(res => {
              console.log('res.status', res.status);
              console.log('res.ok', res.ok);
              if (res.ok) {
                  return res.json()
              }
              else
                  return null;
    
          })
          .then(
              (result) => {
                  // console.log("new_user = ", result);
                  return result
              },
              (error) => {
                  console.log("err GET=", error);
              });
    
      return new_user
    };


    const handleApiSignUp=(newUser)=>{
      const user=newUser

      fetch('http://proj15.ruppin-tech.co.il/api/MunchMe/AddNewUser'),{
        method:'POST',
        headers:new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8',
          body:JSON.stringify(user),
        
          

      })
     
      }
      
    }
    const handleSignUp=()=>{
        let arr=[...usersList]
        let a=undefined;
       
       let uuid=uuidv4()
       if(pass!==rePass){
        Alert.alert(
            "Password not match",
            "Check again...",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
          return;
       }
       else if(arr.find(user=>user.email===email)){
        Alert.alert(
            "User already registered",
            "change mail!!!",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
          return
       }
       else if(email===a||fullName===a||phone===a||phone===a||pass===a){
        Alert.alert(
            "One or more fields are empty...",
            "all field must be field!!",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
          return
       }

       let newUser= new User(uuid,email,fullName,phone,city,pass)
       arr.push(newUser);
       setUsersList(arr);
      
       addToDatabase(newUser)



       navigation.navigate('Login')
    }

    return(
        <ScrollView>
        <ImageBackground source={image}  style={styles.container} >
            <Image
            source={require('../assets/food_icon1.png')}
            resizeMode='center'
            style={styles.image}/>
        <Text style={styles.textTitle2}>Let's Get Started </Text>
        <Text style={styles.textBody}>create an account to get full features </Text>
       
    
        <SafeAreaView>
        <TextInput  
            style={styles.input}
            onChangeText={(name)=>setFullName(name)}
            value={fullName}
            placeholder="FullName"
            left={ <TextInput.Icon style={styles.icon} name="account"/>}

          
          />
        <TextInput  
            style={styles.input}
            onChangeText={(phone)=>setPhone(phone)}
            value={phone}
            placeholder="Phone"
            left={ <TextInput.Icon style={styles.icon} name="phone" />}
          />
          <TextInput  
            style={styles.input}
            onChangeText={(city)=>setCity(city)}
            value={city}
            placeholder="City"
            left={ <TextInput.Icon style={styles.icon} name="city" />}
          />

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
            left={ <TextInput.Icon style={styles.icon} name="key" />}
          />
          
          <TextInput
            style={styles.input}
            onChangeText={(rePass)=>setRePass(rePass)}
            value={rePass}
            placeholder="Confirm Password"
            secureTextEntry
            left={<TextInput.Icon style={styles.icon} name="lock" />}
          />
    <TouchableOpacity style={styles.button}  onPress={handleSignUp}>
    <Text style={styles.buttonText}>Sign Up </Text>
    </TouchableOpacity>
        </SafeAreaView>
        </ImageBackground>
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
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
        width:300,
        height:220,
        
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
        color:'white',
        fontSize:16
    },
     buttonText:{
        fontFamily:'Bangers',
        fontSize:20,
        color:'white',
    },
    button:{
        backgroundColor:'#D2042D',
        width:100,
        justifyContent:'center',
        alignItems:'center',
        height:50,
        marginTop:20,
        marginBottom:20,
        marginLeft:80
    },
    });
export default SignUp;