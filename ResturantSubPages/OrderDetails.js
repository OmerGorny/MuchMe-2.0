import React,{useEffect,useState,useContext} from 'react';
import {SafeAreaView ,Text,StyleSheet,Header, ScrollView,View,TouchableOpacity,ImageBackground}from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AppContext } from '../context/AppContext';
import { KitchenReceive } from '../classes/KitchenReceive';
import { OrderHistory } from '../classes/OrderHistory';






const OrderDetails=({route,navigation})=>{
    const image=require('../assets/back3.jpg')
    const {item}=route.params;
    
    
    
    const {
        setListOfOrder,setListOfCart,
        listToKitchen,setListToKitchen,
        orderNumber,setOrderNumber,
        dataHistory,setDataHistory
        }=useContext(AppContext)
        
    const Pay=()=>{

        let arr=[...item]
        let newArr=[...listToKitchen]
        let len=newArr.length;
        let newDate=new Date().toString().slice(0,25)
        arr.forEach((dish,index)=>{
           newArr[len+index]=new OrderHistory(dish.id,dish.DishCode,dish.dishName,dish.resID,dish.units,dish.hourOfOrder,dish.hourReady,dish.userID,dish.photoURL,newDate,dish.orderType)
            addToDatabase(newArr[len+index])
        })  
    
        
        // כדי שדף היסטוריית ההזמנות יתרנדר אצל כל יוזר
       let newDataHistory=[...dataHistory,...newArr]
     
        navigation.navigate('Resturants')
        setListOfOrder([])
        setListOfCart([])
        setDataHistory(newDataHistory)


        
    

    }

    const addToDatabase = async (order) => {
        console.log("ORDER===",order)
        const addNewOrder='http://proj15.ruppin-tech.co.il/api/MunchMe/AddNewHisoryDish'
        const new_order = await fetch(addNewOrder, {
            method: 'POST',
            body: JSON.stringify(order),
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
                    console.log("newOrder = ", result);
                    return result
                },
                (error) => {
                    console.log("err GET=", error);
                });
      
        return new_order
      };
     
  
    const check = item.map((dish,index)=> <View key={index}>
                                                <Text style={styles.dividerFirst}></Text>
                                                <Text style={[styles.textTitle3]}>{dish.dishName}</Text>
                                                <Text style={[styles.textTitle3]}>units: {dish.units} </Text>
                                                <Text style={[styles.textTitle3]}>cost: <MaterialCommunityIcons name="currency-ils" size={12} color="white" />{dish.price} </Text>
                                                <Text style={styles.divider}></Text>
                                            </View>
                                            
    ) 
    let prices=item.reduce(function(prev,currnt){
        return prev+ +currnt.price
    },0)
    let units=item.reduce(function(prev,currnt){
        return prev+ +currnt.units
    },0)

    return(
        <SafeAreaView >
     <ImageBackground source={image} style={{height:'100%'}} >
       

  





    <Text style={styles.textTitle2}>Order Sum</Text>
     <ScrollView style={{width:'80%',alignContent:'center',alignSelf:'center' ,borderRadius:20,borderWidth:0.5,borderColor:'white'}} backgroundColor='black'>
    
    <View style={styles.divider2}/>
    <Text style={styles.textTitle}> Check Details </Text>
    {check}
    
    </ScrollView>
    <View style={styles.divider2}/>


    <View style={{width:'80%',alignContent:'center',alignSelf:'center' ,borderRadius:20,borderWidth:0.5,borderColor:'white'}} backgroundColor='black' >
    <View style={{flexDirection:'row'}}>

    <Text style={[styles.textTitle1]}>Total-Price: <MaterialCommunityIcons name="currency-ils" size={18} color="white" />{prices} </Text>
    
    </View>
    <View style={{flexDirection:'row'}}>
    <Text style={[styles.textTitle1]}>Total-Units: {units} </Text>
    <Text  style={[styles.totalPrice]} >  </Text>
    
    </View>
    </View>
    <Text style={[styles.textTitle]}> should be ready at: {item[0].hourReady} </Text>
    <View style={styles.divider2}/>
    
   
    
    <View style={{alignContent:'center',alignItems:'center'}} >
    <TouchableOpacity onPress={Pay}
      style={styles.buttonCheckout} >
    <Text style={styles.buttonText}>checkout </Text>
    </TouchableOpacity>
    </View>
    
    </ImageBackground>
   </SafeAreaView>
    )
    
}
export const styles=StyleSheet.create({
    buttonText:{
        fontFamily:'Bangers',
        fontSize:20,
        color:'white'
    },
    buttonCheckout:{
        backgroundColor:'black',
        width:200,
        justifyContent:'center',
        alignItems:'center',
        margin:'auto',
        height:50,
        marginTop:10,
        marginBottom:10,
        borderRadius:50
    },
    textTitle2:{
        fontFamily:'Bangers',
        fontSize:40,
        color:'white',
        textAlign:'center',
        marginTop:15 
    },
    textTitle3:{
        fontFamily:'Bangers',
        fontSize:18,
        color:'white',
        marginTop:2,
        marginLeft:28
    },
    textTitle1:{
        fontFamily:'Bangers',
        fontSize:28,
        color:'white',
        marginTop:15,
        textAlign:'left',
        marginLeft:18
    },
    textTitle:{
        marginBottom:10,
        fontFamily:'Bangers',
        alignSelf:'center',
        fontSize:28,
        color:'white',
        marginTop:10,
        textAlign:'left',
        marginLeft:18,
        backgroundColor:'#D2042D',
        borderRadius:50,
        borderWidth:2,
        borderColor:'white'
    },
    totalPrice:{
        fontFamily:'Bangers',
        fontSize:24,
        color:'white',
        position:'absolute',
        right:3,
        marginTop:15,
        marginRight:18
    },

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
        marginTop:32,
    },
    image:{
        width:124,
        height:121,
        borderRadius:20,
        backgroundColor:'#808080'
    },
    titleSection:{
        marginLeft:16,

    },
    totalSelection:{
        marginTop:32
    },
    dividerFirst:{
        height:2,
        width:'100%',
        borderStyle:'dashed',
        borderWidth:1,
        borderTopColor:'white',
        marginTop:5,
    },
    divider:{
        height:2,
        width:'100%',
        borderColor:'white',
        borderStyle:'dashed',
        borderWidth:1,
        marginTop:5,
    },
    divider2:{
        width:'100%',
        height:2,
        backgroundColor:'black',
        marginTop:5,
        marginBottom:5
        },
    button:{
        marginTop:32,
        alignSelf:'center',
        paddingHorizontal:36,
        
    }


})
export default OrderDetails;