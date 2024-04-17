import  React,{useEffect,useState} from 'react';
import {Modal,Image,Text,View,ImageBackground,StyleSheet,TouchableOpacity,SafeAreaView, Animated, ScrollView}from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import{useFonts}from 'expo-font';
import AppLoading from 'expo-app-loading';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from "react-native-paper"






const NewDish=(props)=>{
    
   
    const image=require("../assets/back3.jpg");
    const [dishName, setDishName] = React.useState();
    const [about, setAbout] = React.useState();
    const [photo, setPhoto] = React.useState();
    const [price, setPrice] = React.useState();
    
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
        <Text style={styles.textTitle2}>ADD new Dish </Text>
        <SafeAreaView>
        <TextInput  
            style={styles.input}
            onChangeText={(name)=>setDishName(name)}
            value={dishName}
            placeholder="Dish-Name"
            left={ <TextInput.Icon style={styles.icon} name="food"/>}

          
          />
        <TextInput  
            style={styles.input}
            onChangeText={(aboutDish)=>setAbout(aboutDish)}
            value={about}
            placeholder="About the dish"
            left={ <TextInput.Icon style={styles.icon} name="information" />}
          />

        <TextInput  
            style={styles.input}
            onChangeText={(photo)=>setPhoto(photo)}
            value={photo}
            placeholder="Photo Url"
            left={ <TextInput.Icon style={styles.icon} name="camera" />}
          />
          <TextInput  
            style={styles.input}
            onChangeText={(price)=>setPrice(price)}
            value={price}
            placeholder="Price"
            left={ <TextInput.Icon style={styles.icon} name="tag" />}
          />
          
    <TouchableOpacity style={styles.button}  onPress={()=>{
               navigation.navigate('Login')
    }}>
    <Text style={styles.buttonText}>Add </Text>
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
export default NewDish;