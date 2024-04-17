import React from "react";
import {TouchableOpacity,Text,StyleSheet,Image,ScrollView,View,SafeAreaView, ImageBackground}from 'react-native';
import{useFonts}from 'expo-font';
import AppLoading from 'expo-app-loading';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from "react-native-paper"

const Edit=({navigation})=>{
    const image=require("../assets/back3.jpg");
    const [email, setEmail] = React.useState();
    const [city, setCity] = React.useState();
    const [fullName, setFullName] = React.useState();
    const [phone, setPhone] = React.useState();
    
    let [fontsLoaded]=useFonts({
        'Bangers':require('../assets/fonts/Bangers-Regular.ttf'),
    })
    if(!fontsLoaded){
        return<AppLoading/>
    }


    return(
        
        <ImageBackground source={image}  style={styles.container} >
            <Image
            source={require('../assets/food_icon1.png')}
            resizeMode='center'
            style={styles.image}/>
        <Text style={styles.textTitle2}>Edit Profile </Text>
        <Text style={styles.textBody}>let us know if somthig change </Text>
       
    
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
            onChangeText={(mail)=>setEmail(mail)}
            value={email}
            placeholder="Email"
            left={ <TextInput.Icon style={styles.icon} name="email" />}
          />
          <TextInput  
            style={styles.input}
            onChangeText={(city)=>setCity(city)}
            value={city}
            placeholder="City"
            left={ <TextInput.Icon style={styles.icon} name="city" />}
          />
          
    <TouchableOpacity style={styles.button}  onPress={()=>{
               navigation.navigate('Login')
    }}>
    <Text style={styles.buttonText}>Update </Text>
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
export default Edit;