import  React,{useEffect,useState,useContext} from 'react';
import {Modal,Image,Text,View,StyleSheet,TextInput,TouchableOpacity,ImageBackground}from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AppContext } from '../context/AppContext'; 



const CartCard=({item,index})=>{
    const image=require('../assets/backDeck.jpg')
    const {
        listOfOrder,setListOfOrder
        }=useContext(AppContext)

    const delDish=(id)=>{
        
        let newArr=listOfOrder.filter(dish=>dish.DishCode!=id)
     
        setListOfOrder(newArr)
        

    }

   

    return(
       
        <View style={styles.card}>
         <ImageBackground  source={image} >
            <View style={{flexDirection:'row'}}>
                <View style={styles.image}>
                <Image
            style={styles.image}
            source={item.photoURL}
            rezieMode='contain'
            />
                </View>
                <View style={[styles.titleSection,{width:'45%'}]}>
                    <View style={{marginTop:20}}>
                        <Text style={{marginBottom:5,fontSize:20,fontFamily:'Bangers' ,color:'white'}} >{item.dishName}</Text>
                        <Text style={{marginBottom:5,color:'white'}} >units: {item.units}</Text>
                       <Text style={{color:'white'}} >price: <MaterialCommunityIcons name="currency-ils" size={12} color="white" /> {item.price}</Text>
                    </View>
                </View>
           
           
            <View style={{marginBottom:50, flexDirection:'row'}}>
           
           <TouchableOpacity onPress={()=>delDish(item.DishCode)}>
           <Feather  name="delete" size={24} color="white" />
           </TouchableOpacity>
            </View>
            </View>
            </ImageBackground>
        </View>
        

    )
}
export const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',

    },
    content:{
        marginHorizontal:29,
        paddingBottom:32
    },
    titleSection:{
        marginLeft:16,
    },
    actions:{
        width:95,
        height:30,
        borderRadius:20,
        backgroundColor:'rgba(0,0,0,0.06)'

    },
    delete:{
        width:53,
        height:55,
        borderRadius:20,
        borderWidth:1,
        backgroundColor:'#ff3d00',
    },
    card:{
        
        flex:1,
        borderRadius:50,
        marginTop:32,
        borderBottomWidth:0.5,
        borderTopWidth:0.5,
        borderColor:'black',
    },
    
    image:{
        width:124,
        height:121,
        borderRadius:10,
    },
    titleSection:{
        marginLeft:16,

    },
    totalSelection:{
        marginTop:32
    },
    divider:{
        height:1,
        borderColor:'#DDDDDD',
        borderStyle:'dashed',
        borderWidth:1,
        alignSelf:'stretch',
        flex:1,
        marginHorizontal:29,
        marginTop:5,
    },
    button:{
        marginTop:32,
        alignSelf:'center',
        paddingHorizontal:36,

    }


})
export default CartCard;